OpenLayers.Format.Px3JSON.Extents = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
    /**
    * Class: OpenLayers.Format.Px3JSON.Extents
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * 
    * The extents object can be thought of as a hash map with the key being the 
    * extent id and value being an extent configuration object.
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: xmin
     * {Number} Bottom-left X-coordinate of an extent envelope.
     */
    xmin: null,
    
    /**
     * Property: ymin
     * {Number} Bottom-left Y-coordinate of an extent envelope.
     */
    ymin: null,
   
    /**
     * Property: xmax
     * {Number} Top-right X-coordinate of an extent envelope.
     */
    xmax: null,
       
    /**
     * Property: ymax
     * {Number} Top-right Y-coordinate of an extent envelope.
     */
    ymax: null,
       
    /**
     * Property: spatialReference
     * {Object} Spatial reference of the extent.
     */
    spatialReference: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.Extents object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents"
});