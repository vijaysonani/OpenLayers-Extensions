OpenLayers.Format.Px3JSON.EditUtilConfig = OpenLayers.Class({

    /**
    * Class: OpenLayers.Format.Px3JSON.EditUtilConfig
    * 
    * An object containing configuration information related to editing annotations.
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: geometryServiceUrl
     * {String} URL pointing to the REST geometry service used for editing.
     */
    geometryServiceUrl: null,
    
    options : null,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.EditUtilConfig
     * Construct an OpenLayers.Format.Px3JSON.EditUtilConfig object
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
     * Read a JSON string into a OpenLayers.Format.Px3JSON.EditUtilConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.EditUtilConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.EditUtilConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.EditUtilConfig"
});