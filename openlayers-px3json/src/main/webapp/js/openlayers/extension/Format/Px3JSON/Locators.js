OpenLayers.Format.Px3JSON.Locators = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
        
    /**
    * Class: OpenLayers.Format.Px3JSON.Locators (Px3 Viewer Unique)
    * 
    * Locator Object
    * 
    * The locators object can be thought of as a hash map with the key being the
    * locator id and value a locator configuration object.
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @requires OpenLayers/Format/Px3JSON/Fields.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: url
     * {String} Url to the ArcGIS Server REST resource that represents a locator service. 
     * An example is
     * http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Loc ators/ESRI_Geocode_USA/GeocodeServer
     */
    url: null,
    
    /**
     * Property: spatialReference
     * {OpenLayers.Format.Px3JSON.SpatialReference} Spatial Reference of the extent.
     */ 
    spatialReference: null,
    
    /**
     * Property: version
     * {String} Version of the locator. Valid values are: Ò9.3.1Ó and Ò10Ó.
     */
    version: null,
    
    /**
     * Property: fields
     * {Object or OpenLayers.Format.Px3JSON.Fields} Map of field names used to 
     * override field names.
     */
    fields: {
        stateField : ' ' 
    },
    
    /**
     * Property: streetRequired
     * {Boolean} If true a space will be placed in the street field value 
     * before submission if a street value is not put in by the user. 
     * Default: false.
     */
     srteetRequired : null,
    
    /**
     * Constructor: OpenLayers.Px3JSON.ServiceGroups
     * Construct an OpenLayers.Px3JSON.ServiceGroups object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        
        if (options.fields && Object.keys['fields'].length) {
            this.fields = new OpenLayers.Format.Px3JSON.Fields(options.fields);
        }
        
        if (options.spatialReference) {
            this.spatialReference = new OpenLayers.Format.Px3JSON.SpatialReference(options.spatialReference);
        }
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.Services object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.Services} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.Locators(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    /**
     * Method: isValidType
     * Check if a ServiceGroups object is a valid representative of the given type.
     * 
     * Parameters:
     * obj - {Object} An initialized object of this type
     * 
     * Returns:
     * {Boolean} The object is valid ServiceGroups object of the given type.
     */
    isValidType : function(obj) {
        if (obj.version !== null && obj.version !== '9.3.1' && obj.version !== '10') {
            return false;
        }
        return true;
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.Locators"
});