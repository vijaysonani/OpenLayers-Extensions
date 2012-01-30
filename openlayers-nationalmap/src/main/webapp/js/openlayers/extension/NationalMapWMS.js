/* Copyright (c) 2006-2008 MetaCarta, Inc., published under the Clear BSD
 * license.  See http://svn.openlayers.org/trunk/openlayers/license.txt for the
 * full text of the license. */


/**
 * @requires OpenLayers/Layer/Grid.js
 * @requires OpenLayers/Tile/Image.js
 */

/**
 * Class: OpenLayers.Layer.NationalMapWMS
 * Instances of OpenLayers.Layer.NationalMapWMS are used to display data from OGC Web
 *     Mapping Services. Create a new NationalMapWMS layer with the <OpenLayers.Layer.NationalMapWMS>
 *     constructor.
 * 
 * Inherits from: 
 *  - <OpenLayers.Layer.Grid>
 */
OpenLayers.Layer.NationalMapWMS = OpenLayers.Class(OpenLayers.Layer.Grid, {

    /**
     * Constant: DEFAULT_PARAMS
     * {Object} Hashtable of default parameter key/value pairs 
     */
	
	//f=image&dpi=96&transparent=true&format=png8&bbox={%22xmin%22:-20037508.342789244,%22ymin%22:-20037508.342789236,%22xmax%22:20037508.342789244,%22ymax%22:20037508.342789244,%22spatialReference%22:{%22wkid%22:102113}}&bboxSR=102113&imageSR=102113&size=256,256',

    DEFAULT_PARAMS: { format: "png8",
                      transparent: "true",
                      f: 'image',
                      dpi: 96,
                      bboxSR: 102100,
                      imageSR: 102100
                     },
                     
                     
     layerUrlParams: null,
     
     transitionEffect: 'resize',
	 displayOutsideMaxExtent: true,
    
     singleTile: true,
    
    /**
     * Property: reproject
     * *Deprecated*. See http://trac.openlayers.org/wiki/SphericalMercator
     * for information on the replacement for this functionality. 
     * {Boolean} Try to reproject this layer if its coordinate reference system
     *           is different than that of the base layer.  Default is true.  
     *           Set this in the layer options.  Should be set to false in 
     *           most cases.
     */
    reproject: false,
 
    /**
     * APIProperty: isBaseLayer
     * {Boolean} Default is true for NationalMapWMS layer
     */
    isBaseLayer: false,
    
    /**
     * APIProperty: encodeBBOX
     * {Boolean} Should the BBOX commas be encoded? The WMS spec says 'no', 
     * but some services want it that way. Default false.
     */
    encodeBBOX: false,
    
    /** 
     * APIProperty: noMagic 
     * {Boolean} If true, the image format will not be automagicaly switched 
     *     from image/jpeg to image/png or image/gif when using 
     *     TRANSPARENT=TRUE. Also isBaseLayer will not changed by the  
     *     constructor. Default false. 
     */ 
    noMagic: false,
    
    /**
     * Property: yx
     * {Array} Array of strings with the EPSG codes for which the axis order
     *     is to be reversed (yx instead of xy, LatLon instead of LonLat). This
     *     is only relevant for WMS versions >= 1.3.0.
     */
    yx: ['EPSG:4326'],
    
    /**
     * Constructor: OpenLayers.Layer.WMS
     * Create a new WMS layer object
     *
     * Example:
     * (code)
     * var wms = new OpenLayers.Layer.WMS("NASA Global Mosaic",
     *                                    "http://wms.jpl.nasa.gov/wms.cgi", 
     *                                    {layers: "modis,global_mosaic"});
     * (end)
     *
     * Parameters:
     * name - {String} A name for the layer
     * url - {String} Base url for the WMS
     *                (e.g. http://wms.jpl.nasa.gov/wms.cgi)
     * params - {Object} An object with key/value pairs representing the
     *                   GetMap query string parameters and parameter values.
     * options - {Ojbect} Hashtable of extra options to tag onto the layer
     */
    initialize: function(name, url, params, options) {
        var newArguments = [];
        //uppercase params
       // params = OpenLayers.Util.upperCaseObject(params);
        newArguments.push(name, url, params, options);
        OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
        OpenLayers.Util.applyDefaults(
                       this.params, 
                       this.DEFAULT_PARAMS
                       );


        //layer is transparent        
        if (!this.noMagic && this.params.transparent && 
            this.params.transparent.toString().toLowerCase() == "true") {
            
            // unless explicitly set in options, make layer an overlay
            if ( (options == null) || (!options.isBaseLayer) ) {
                this.isBaseLayer = false;
            } 
            
            // jpegs can never be transparent, so intelligently switch the 
            //  format, depending on teh browser's capabilities
            if (this.params.format == "image/jpeg") {
                this.params.format = OpenLayers.Util.alphaHack() ? "image/gif"
                                                                 : "image/png";
            }
        }

    },    

    /**
     * Method: destroy
     * Destroy this layer
     */
    destroy: function() {
        // for now, nothing special to do here. 
        OpenLayers.Layer.Grid.prototype.destroy.apply(this, arguments);  
    },

    
    /**
     * Method: clone
     * Create a clone of this layer
     *
     * Returns:
     * {<OpenLayers.Layer.WMS>} An exact clone of this layer
     */
    clone: function (obj) {
        
        if (obj == null) {
            obj = new OpenLayers.Layer.WMS(this.name,
                                           this.url,
                                           this.params,
                                           this.getOptions());
        }

        //get all additions from superclasses
        obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);

        // copy/set any non-init, non-simple values here

        return obj;
    },    
    
    /**
     * APIMethod: reverseAxisOrder
     * Returns true if the axis order is reversed for the WMS version and
     * projection of the layer.
     * 
     * Returns:
     * {Boolean} true if the axis order is reversed, false otherwise.
     */
    reverseAxisOrder: function() {
        return (parseFloat(this.params.VERSION) >= 1.3 && 
            OpenLayers.Util.indexOf(this.yx, 
            this.map.getProjectionObject().getCode()) !== -1)
    },
    
    
    
    
    removeSubLayer: function(subId) {
    	if (this.layersUrlParam != null) {
    		var tmpLayersUrl = '';
    		var subList = this.layersUrlParam.split(',')
    		if (subList.length > 1) {
    			for (var i = 0; i < subList.length; i++) {
    				if (parseInt(subId) != parseInt(subList[i])) {
    					tmpLayersUrl += subList[i] + ',';
    				}
    			}
    			this.layersUrlParam = tmpLayersUrl.substr(0,tmpLayersUrl.length-1);
    		} else {
    			this.layersUrlParam = null;
    		}
    	}
    	if (this.layersUrlParam == null && this.params.layers) {
    		delete this.params.layers;
    	} else {
    		this.params.layers = 'show:' + this.layersUrlParam;
    	}
    },

    appendSubLayer: function(subId) {
    	if (this.layersUrlParam == null) {
    		this.layersUrlParam = '' + subId;
    	} else {
    		//make sure sublayer id isn't already there
    		var subList = this.layersUrlParam.split(',');
    		for (var i = 0; i < subList.length; i++) {
    			if (parseInt(subId) == parseInt(subList[i])) {
    				return;	//already there
    			}
    		}
    		this.layersUrlParam += ',' + subId;
    		
    		//now order them to help to allow browser caching of image
    		subList = this.layersUrlParam.split(',');
    		subList.sort(function(a,b){return a - b});
    		this.layersUrlParam = subList.join();
    	}
		this.params.layers = 'show:' + this.layersUrlParam;
    },
    
    
    
    /**
     * Method: getURL
     * Return a GetMap query string for this layer
     *
     * Parameters:
     * bounds - {<OpenLayers.Bounds>} A bounds representing the bbox for the
     *                                request.
     *
     * Returns:
     * {String} A string with the layer's url and parameters and also the
     *          passed-in bounds and appropriate tile size specified as 
     *          parameters.
     */
    getURL: function (bounds) {
        bounds = this.adjustBounds(bounds);
        var imageSize = this.getImageSize();
        var newParams = {};
       
        var reverseAxisOrder = this.reverseAxisOrder();
        
        newParams.bbox = this.encodeBBOX ?
            bounds.toBBOX(null, reverseAxisOrder) :
            bounds.toArray(reverseAxisOrder);
        var b = bounds.toArray();
        newParams.bbox = '{"xmin":' + b[0] + ',"ymin":' + b[1] + ',"xmax":' + b[2] + ',"ymax":' + b[3] + ',"spatialReference":{"wkid":102113}}';
        newParams.size = imageSize.w + ',' + imageSize.h;
        var requestString = this.getFullRequestString(newParams);
        return requestString;
    },

    /**
     * Method: addTile
     * addTile creates a tile, initializes it, and adds it to the layer div. 
     *
     * Parameters:
     * bounds - {<OpenLayers.Bounds>}
     * position - {<OpenLayers.Pixel>}
     * 
     * Returns:
     * {<OpenLayers.Tile.Image>} The added OpenLayers.Tile.Image
     */
    addTile:function(bounds,position) {
        return new OpenLayers.Tile.Image(this, position, bounds, 
                                         null, this.tileSize);
    },

    /**
     * APIMethod: mergeNewParams
     * Catch changeParams and uppercase the new params to be merged in
     *     before calling changeParams on the super class.
     * 
     *     Once params have been changed, the tiles will be reloaded with
     *     the new parameters.
     * 
     * Parameters:
     * newParams - {Object} Hashtable of new params to use
     */
    mergeNewParams:function(newParams) {
        //var upperParams = OpenLayers.Util.upperCaseObject(newParams);
        var newArguments = [newParams];
        return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this, 
                                                             newArguments);
    },

    /** 
     * APIMethod: getFullRequestString
     * Combine the layer's url with its params and these newParams. 
     *   
     *     Add the SRS parameter from projection -- this is probably
     *     more eloquently done via a setProjection() method, but this 
     *     works for now and always.
     *
     * Parameters:
     * newParams - {Object}
     * altUrl - {String} Use this as the url instead of the layer's url
     * 
     * Returns:
     * {String} 
     */
    getFullRequestString:function(newParams, altUrl) {

        return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(
                                                    this, arguments);
    },

    CLASS_NAME: "OpenLayers.Layer.NationalMapWMS"
});
