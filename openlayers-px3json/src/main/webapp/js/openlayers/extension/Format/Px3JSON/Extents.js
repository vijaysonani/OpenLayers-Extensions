OpenLayers.Format.Px3JSON.Extents = OpenLayers.Class({
    
    /**
    * Class: OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents
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
     * Constructor: OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents
     * Construct an OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
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
        return new OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    /**
     * Method: isValidType
     * Check if an object is a valid representative of the given type.
     * 
     * Parameters:
     * obj - {Object} An initialized object of this type
     * 
     * Returns:
     * {Boolean} The object is valid object of the given type.
     */
    isValidType : function(obj) {
        return true;
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents"
});