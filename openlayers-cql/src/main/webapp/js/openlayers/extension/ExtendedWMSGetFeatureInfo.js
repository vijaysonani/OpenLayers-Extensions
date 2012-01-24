/**
 * @requires OpenLayers/Control/WMSGetFeatureInfo.js
 * @requires OpenLayers/Control.js
 * @requires OpenLayers/Handler/Click.js
 * @requires OpenLayers/Handler/Hover.js
 * @requires OpenLayers/Request.js
 */

/**
 * Class: OpenLayers.Control.ExtendedWMSGetFeatureInfo
 * Extends the WMSGetFeatureInfo control to allow the use of CQL filters.
 * Tested against GeoServer 2.1.1.  There is no garuantee that any other
 * server allows filtration in the GetFeatureInfo operation.
 *
 * Inherits from:
 *  - <OpenLayers.Control.WMSGetFeatureInfo>
 */
OpenLayers.Control.ExtendedWMSGetFeatureInfo = OpenLayers.Class(OpenLayers.Control.WMSGetFeatureInfo, {

    cql_filter : [],
    
    filter : [],
    
    requestParams : {},
    /**
     * Method: buildWMSOptions
     * Build an object with the relevant WMS options for the GetFeatureInfo request
     *
     * Parameters:
     * url - {String} The url to be used for sending the request
     * layers - {Array(<OpenLayers.Layer.WMS)} An array of layers
     * clickPosition - {<OpenLayers.Pixel>} The position on the map where the mouse
     *     event occurred.
     * format - {String} The format from the corresponding GetMap request
     */
    buildWMSOptions: function(url, layers, clickPosition, format) {
        var layerNames = [], styleNames = [];
        for (var i = 0, len = layers.length; i < len; i++) { 
            layerNames = layerNames.concat(layers[i].params.LAYERS);
            styleNames = styleNames.concat(this.getStyleNames(layers[i]));
        }
        var firstLayer = layers[0];
        // use the firstLayer's projection if it matches the map projection -
        // this assumes that all layers will be available in this projection
        var projection = this.map.getProjection();
        var layerProj = firstLayer.projection;
        if (layerProj && layerProj.equals(this.map.getProjectionObject())) {
            projection = layerProj.getCode();
        }
        
        var params = OpenLayers.Util.extend({
            service: "WMS",
            version: firstLayer.params.VERSION,
            request: "GetFeatureInfo",
            layers: layerNames,
            query_layers: layerNames,
            styles: styleNames,
            bbox: this.map.getExtent().toBBOX(null,
                firstLayer.reverseAxisOrder()),
            feature_count: this.maxFeatures,
            height: this.map.getSize().h,
            width: this.map.getSize().w,
            format: format,
            info_format: firstLayer.params.INFO_FORMAT || this.infoFormat
        }, (parseFloat(firstLayer.params.VERSION) >= 1.3) ?
        {
            crs: projection,
            i: parseInt(clickPosition.x),
            j: parseInt(clickPosition.y)
        } :
{
            srs: projection,
            x: parseInt(clickPosition.x),
            y: parseInt(clickPosition.y)
        }
        );

        // If there were Filters included, create the string
        // There needs to be x filters for x layers and the format needs to look like:
        // FILTER=(filter1)(filter2)...
        // @See http://docs.geoserver.org/stable/en/user/services/wms/vendor.html
        params = OpenLayers.Util.extend(params,
            (this.filter.length) ? {
                filter : function(filter, layers) {
                    var filter_1_0 = new OpenLayers.Format.Filter({
                        version: "1.0.0"
                    });
                    var returnFilter = '';
                    for (var i = 0;i < layers.length;i++) {
                        returnFilter += '(' + XMLToString(filter_1_0.write(filter[(layers.length == filter.length) ? i : 0])) + ')';
                    }
                    return  returnFilter.substr(0, returnFilter.length); 
                }(this.filter, this.layers)
            } : {}
            );

        // If there were CQL Filters included, create the string
        // There needs to be x filters for x layers and the format needs to look like:
        // CQL_FILTER=filter1;filter2;...
        // @See http://docs.geoserver.org/stable/en/user/services/wms/vendor.html
        params = OpenLayers.Util.extend(params,
            (this.cql_filter.length) ? {
                cql_filter : function(cql_filter, layers) {
                    var returnFilter = '';
                    for (var i = 0;i < layers.length;i++) {
                        returnFilter += (new OpenLayers.Format.CQL()).write(cql_filter[(layers.length == cql_filter.length) ? i : 0]) + ';';
                    }
                    return returnFilter.substr(0, returnFilter.length - 1); // We must slice the trailing ;
                }(this.cql_filter, this.layers)
            } : {}
            );
            
        OpenLayers.Util.applyDefaults(params, this.vendorParams);
        return {
            url: url,
            params: OpenLayers.Util.upperCaseObject(params),
            callback: function(request) {
                this.handleResponse(clickPosition, request, url);
            },
            scope: this
        };
    },
    /**
     * Method: request
     * Sends a GetFeatureInfo request to the WMS
     * 
     * Parameters:
     * clickPosition - {<OpenLayers.Pixel>} The position on the map where the
     *     mouse event occurred.
     * options - {Object} additional options for this method.
     * 
     * Valid options:
     * - *hover* {Boolean} true if we do the request for the hover handler
     */
    request: function(clickPosition, options) {
        var layers = this.findLayers();
        if(layers.length == 0) {
            this.events.triggerEvent("nogetfeatureinfo");
            // Reset the cursor.
            OpenLayers.Element.removeClass(this.map.viewPortDiv, "olCursorWait");
            return;
        }
        
        options = options || {};
        if(this.drillDown === false) {
            var wmsOptions = this.buildWMSOptions(this.url, layers,
                clickPosition, layers[0].params.FORMAT); 
            var request = OpenLayers.Request.POST(wmsOptions);
    
            if (options.hover === true) {
                this.hoverRequest = request;
            }
        } else {
            this._requestCount = 0;
            this._numRequests = 0;
            this.features = [];
            // group according to service url to combine requests
            var services = {}, url;
            for(var i=0, len=layers.length; i<len; i++) {
                var layer = layers[i];
                var service, found = false;
                url = OpenLayers.Util.isArray(layer.url) ? layer.url[0] : layer.url;
                if(url in services) {
                    services[url].push(layer);
                } else {
                    this._numRequests++;
                    services[url] = [layer];
                }
            }
            var layers;
            for (var url in services) {
                layers = services[url];
                var wmsOptions = this.buildWMSOptions(url, layers, 
                    clickPosition, layers[0].params.FORMAT);
                this.requestParams = wmsOptions.params;
                OpenLayers.Request.POST(wmsOptions); 
            }
        }
    },
    CLASS_NAME: "OpenLayers.Control.ExtendedWMSGetFeatureInfo"
});
