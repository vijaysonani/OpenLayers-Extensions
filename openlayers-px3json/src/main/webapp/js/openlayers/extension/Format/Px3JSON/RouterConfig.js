OpenLayers.Format.Px3JSON.RouterConfig = OpenLayers.Class({

    /**
    * Class: OpenLayers.Format.Px3JSON.RouterConfig
    * 
    * An object containing configuration information related to the router. 
    * This is included in the NGA Palanterra x3 Toolbox, 
    * but not used by USGS The National Map
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: locator
     * {String} Id of the locator to be used during a routing task.
     */
    locator: null,

    /**
     * Property: findNAService
     * {String} URL of the GP Task used to find the Network Analyst service. 
     * This Task should take in a Feature Set of stops and return the URL of a 
     * Network Analyst service available for those stops.
     */
    findNAService: null,

    options : null,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.RouterConfig
     * Construct an OpenLayers.Format.Px3JSON.RouterConfig object
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
     * Read a JSON string into a OpenLayers.Format.Px3JSON.RouterConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.RouterConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.RouterConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.RouterConfig"
});