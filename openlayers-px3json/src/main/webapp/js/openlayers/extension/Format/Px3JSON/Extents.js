OpenLayers.Format.Px3JSON.Extents = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
    /**
    * Class: OpenLayers.Format.Px3JSON.Extents
    * 
    * Extent Configuration Object
    * 
    * The extents object can be thought of as a hash map with the key being the 
    * extent id and value being an extent configuration object.
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: xmin
     * {Double} Bottom-left X-coordinate of an extent envelope.
     */
    xmin: null,
    
    /**
     * Property: ymin
     * {Double} Bottom-left Y-coordinate of an extent envelope.
     */
    ymin: null,
   
    /**
     * Property: xmax
     * {Double} Top-right X-coordinate of an extent envelope.
     */
    xmax: null,
       
    /**
     * Property: ymax
     * {Double} Top-right Y-coordinate of an extent envelope.
     */
    ymax: null,
       
    /**
     * Property: spatialReference
     * {OpenLayers.Format.Px3JSON.SpatialReference} Spatial Reference of the extent.
     */ 
    spatialReference: null,
    
    /**
     * Constructor: OpenLayers.Px3JSON.Extents
     * Construct an OpenLayers.Px3JSON.Extents object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        
        if (options.spatialReference) {
            this.spatialReference = new OpenLayers.Format.Px3JSON.SpatialReference(options.spatialReference);
        }
    },
    
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
        return new OpenLayers.Format.Px3JSON.Extents(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.Extents"
});