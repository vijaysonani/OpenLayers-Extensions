OpenLayers.Format.Px3JSON.InfoTemplates = OpenLayers.Class({
   /**
    * Class: OpenLayers.Format.Px3JSON.InfoTemplates
    * 
    * In both properties of the Info Template Object can have attributes 
    * specified in them by using ${<column name>}. An example might be ${STREET_NAME}.
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: title
     * {String} The string template used to create the title of the InfoWindow 
     * displayed when an identified features details are displayed.
     */
    title: null,
    
    /**
     * Property: content
     * {String} The string template used to create the contents of the InfoWindow 
     * displayed when an identified features details are displayed. 
     * default: ${*} (All attributes in key = value format)
     */
    content : '${*}',
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.LayerConfig
     * Construct an OpenLayers.Format.Px3JSON.LayerConfig object
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
     * Read a JSON string into a OpenLayers.Format.Px3JSON.LayerConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.LayerConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.InfoTemplates(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME : 'OpenLayers.Format.Px3JSON.InfoTemplate'
});