OpenLayers.Format.Px3JSON.GMTIConfig = OpenLayers.Class({

    /**
    * Class: OpenLayers.Format.Px3JSON.GMTIConfig
    * 
    * An object containing configuration information related to the selection results.
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: enableValidationByDefault
     * {Boolean} A flag to tell the application whether GMTI validation for buffers should be enabled by default.
     */
    enableValidationByDefault: null,
    options : null,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.GMTIConfig
     * Construct an OpenLayers.Format.Px3JSON.GMTIConfig object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        this.options = options;
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.GMTIConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.GMTIConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.GMTIConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.GMTIConfig"
});