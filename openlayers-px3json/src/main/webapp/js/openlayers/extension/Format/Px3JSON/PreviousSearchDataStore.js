OpenLayers.Format.Px3JSON.PreviousSearchDataStore = OpenLayers.Class({

    /**
    * Class: OpenLayers.Format.Px3JSON.PreviousSearchDataStore
    * 
    * An object containing configuration information related to storing previous search text.
    * Note: to prevent storing any previous search text, remove this object from the configuration
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: type
     * {String} The type of data store used to hold previous search text. Valid values are:
     * - “session”: stores search text in browser memory. Previous search values are removed 
     *              when user closes browser.
     * - “cookie”: stores search text in browser cookie (if user allows cookies to be stored)
     * - “db”: stores search text in a database. Note: when selecting this option, 
     *          you must also configure the “searchdatastore” properties in the jsapix.properties file. 
     *          See PalX3_Properties_Files_Configuration.doc for details
     */
    type: null,
    
    options : null,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.PreviousSearchDataStore
     * Construct an OpenLayers.Format.Px3JSON.PreviousSearchDataStore object
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
     * Read a JSON string into a OpenLayers.Format.Px3JSON.PreviousSearchDataStore object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.PreviousSearchDataStore} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.PreviousSearchDataStore(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.PreviousSearchDataStore"
});