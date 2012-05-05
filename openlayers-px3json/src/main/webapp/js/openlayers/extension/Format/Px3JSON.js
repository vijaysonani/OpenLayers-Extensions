/**
 * Class: OpenLayers.Format.Px3JSON
 * 
 * NGA Palanterra x3 and USGS The National Map Viewer Configuration
 * 
 */
OpenLayers.Format.Px3JSON = OpenLayers.Class(OpenLayers.Format.JSON, {
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON 
     * Construct an OpenLayers.Format.Px3JSON object
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
     * Deserialize a OpenLayers.Format.Px3JSON string.
     *
     * Parameters:
     * json - {String} A PxOpenLayers.Format.Px3JSON3JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.v1} Null is returned if the serialized Px3JSON is invalid
     */
    read: function(json) {
        return OpenLayers.Format.Px3JSON.v17.prototype.read.apply(this, [json]);
    },
    
    write: function(json, pretty) {
        return OpenLayers.Format.JSON.prototype.write.apply(this, [json, pretty]);
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

    CLASS_NAME: "OpenLayers.Format.Px3JSON"
});     
