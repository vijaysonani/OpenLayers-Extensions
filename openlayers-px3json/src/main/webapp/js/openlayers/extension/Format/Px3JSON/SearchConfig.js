OpenLayers.Format.Px3JSON.SearchConfig = OpenLayers.Class({
    /**
    * @requires OpenLayers/Format/Px3JSON/SearchConfig.js
    */

    /**
    * Class: OpenLayers.Format.Px3JSON.SearchConfig
    * 
    * An object used to configure the search function.
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: locator
     * {Boolean} Id of the locator to be used during a search.
     */
    locator: null,

    /**
     * Property: searchZoomLevel
     * {Number} The level to zoom to on a successful search.
     */
    searchZoomLevel: null,

    /**
     * Property: nearTaskUrl
     * {String} Optional. URL pointing to the REST endpoint of a GPTask used to handle the near keyword.
     */
    nearTaskUrl: null,

    /**
     * Property: wmsReflectorUrl
     * {String} URL pointing to wms reflector used to add wms services through enhanced search.
     */
    wmsReflectorUrl: null,

    /**
     * Property: defaultText
     * {String} Optional. Text to be displayed when there are no search or routing results.
     */
    defaultText: null,

    options : null,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.SearchConfig
     * Construct an OpenLayers.Format.Px3JSON.SearchConfig object
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
     * Read a JSON string into a OpenLayers.Format.Px3JSON.SearchConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.SearchConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.SearchConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.SearchConfig"
});