OpenLayers.Format.Px3JSON.Fields = OpenLayers.Class({
    
    /**
    * Class: OpenLayers.Format.Px3JSON.Fields
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: singleLineAddressField
     * {String} Field name for single line address field (only valid when 
     * Locator Object version property is “10”. Default “SingleLine”).
     */
    singleLineAddressField: null,
    
    /**
     * Property: streetField
     * {String} Field name for street field. Default “Street”
     */
    streetField: 'Street',
 
     /**
     * Property: cityField
     * {String} Field name for state field. Default “City”
     */
    cityField: 'City',
 
     /**
     * Property: stateField
     * {String} Field name for state field. Default “State”
     * NOTE: The API configuration has this field as an object. This is incorrect.
     */
    stateField: 'State',
    
     /**
     * Property: zipField
     * {String} Field name for zip field. Default “Zip”
     * NOTE: The API configuration has this field as a boolean. This is incorrect.
     */
    zipField: 'Zip',
               
    /**
     * Constructor: OpenLayers.Format.Px3JSON.Fields
     * Construct an OpenLayers.Format.Px3JSON.Fields object
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
     * Read a JSON string into a OpenLayers.Format.Px3JSON.Fields object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.Fields} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.Fields(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.Fields"
});