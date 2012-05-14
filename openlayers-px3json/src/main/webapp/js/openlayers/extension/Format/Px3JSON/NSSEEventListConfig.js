OpenLayers.Format.Px3JSON.NSSEEventListConfig = OpenLayers.Class({

    /**
    * Class: OpenLayers.Format.Px3JSON.NSSEEventListConfig
    * 
    * An object containing configuration information related to the NSSE event 
    * list. This is included in the NGA Palanterra x3 Toolbox, 
    * but not used by USGS The National Map
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: eventServiceId
     * {String} Id of the map service used to display the NSSE events.
     */
    eventServiceId: null,
      
    /**
     * Property: eventLayerId
     * {Number} The layer that should be used in the NSSE service.
     */
    eventLayerId: null,
     
    /**
     * Property: featureServiceUrl
     * {String} URL to the feature service used for editing NSSE events features. An example is:
     * http://server/rest/services/Events/NSSE_Events_Feature/Fea tureServer/0. 
     * For more information on constructing a URL, see The Services Directory and the REST API
     */
    featureServiceUrl: null,
      
    /**
     * Property: rssUrl
     * {String} The relative URL linking to a RSS feed displaying all of the current NSSE events.
     */
    rssUrl: null,
     
    /**
     * Property: kmlUrl
     * {String} The complete URL to a kmz file containing all of the current NSSE events.
     */
    kmlUrl: null,
     
    options : null,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.NSSEEventListConfig
     * Construct an OpenLayers.Format.Px3JSON.NSSEEventListConfig object
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
     * Read a JSON string into a OpenLayers.Format.Px3JSON.NSSEEventListConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.NSSEEventListConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.NSSEEventListConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.NSSEEventListConfig"
});