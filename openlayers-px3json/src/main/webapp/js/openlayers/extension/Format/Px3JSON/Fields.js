OpenLayers.Format.Px3JSON.Fields = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
    /**
    * Class: OpenLayers.Format.Px3JSON.Fields
    * 
    * Fields Object
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.Fields"
});