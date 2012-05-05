/* Copyright (c) 2006-2009 MetaCarta, Inc., published under the Clear BSD
 * license.  See http://svn.openlayers.org/trunk/openlayers/license.txt for the
 * full text of the license. */

/**
 * @requires OpenLayers/Layer/XYZ.js
 * @requires OpenLayers/Tile/Image.js
 */

/** 
 * Class: OpenLayers.Layer.NationalMapXYZ
 * The NationalMapXYZ class is designed to make it easier for people who have tiles
 * arranged by a standard XYZ grid. 
 */
OpenLayers.Layer.NationalMapXYZ = OpenLayers.Class(OpenLayers.Layer.XYZ, {

    /**
     * Constructor: OpenLayers.Layer.NationalMapXYZ
     *
     * Parameters:
     * name - {String}
     * url - {String}
     * options - {Object} Hashtable of extra options to tag onto the layer
     */
    initialize: function(name, url, options) {
        if (options && options.sphericalMercator || this.sphericalMercator) {
            options = OpenLayers.Util.extend({
                maxExtent: new OpenLayers.Bounds(
                    -128 * 156543.0339,
                    -128 * 156543.0339,
                    128 * 156543.0339,
                    128 * 156543.0339
                ),
                maxResolution: 156543.0339,
                numZoomLevels: 19,
                units: "m",
                projection: "EPSG:900913"
            }, options);
        }
        url = url || this.url;
        name = name || this.name;
        var newArguments = [name, url, {}, options];
        OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
    },
    
    /**
     * APIMethod: clone
     * Create a clone of this layer
     *
     * Parameters:
     * obj - {Object} Is this ever used?
     * 
     * Returns:
     * {<OpenLayers.Layer.Grid>} An exact clone of this OpenLayers.Layer.Grid
     */
    clone: function (obj) {
        
        if (obj == null) {
            obj = new OpenLayers.Layer.NationalMapXYZ(this.name,
                                            this.url,
                                            this.getOptions());
        }

        //get all additions from superclasses
        obj = OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this, [obj]);

        // copy/set any non-init, non-simple values here
        if (this.tileSize != null) {
            obj.tileSize = this.tileSize.clone();
        }
        
        // we do not want to copy reference to grid, so we make a new array
        obj.grid = [];

        return obj;
    },    

    /**
     * Method: getUrl
     *
     * Parameters:
     * bounds - {<OpenLayers.Bounds>}
     *
     * Returns:
     * {String} A string with the layer's url and parameters and also the
     *          passed-in bounds and appropriate tile size specified as
     *          parameters
     */
    getURL: function (bounds) {
        var res = this.map.getResolution();
        var x = Math.round((bounds.left - this.maxExtent.left) 
            / (res * this.tileSize.w));
        var y = Math.round((this.maxExtent.top - bounds.top) 
            / (res * this.tileSize.h));
        var z = this.map.getZoom();

        var url = this.url;
        var s = '' + x + y + z;
        if (url instanceof Array)
        {
            url = this.selectUrl(s, url);
        }
        
        var path = OpenLayers.String.format(url, {'x': x, 'y': y, 'z': z});

        return path;
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

    CLASS_NAME: "OpenLayers.Layer.NationalMapXYZ"
});