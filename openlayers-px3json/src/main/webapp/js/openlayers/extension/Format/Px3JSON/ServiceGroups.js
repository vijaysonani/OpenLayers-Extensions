OpenLayers.Format.Px3JSON.ServiceGroups = OpenLayers.Class({
    
    /**
    * Class: OpenLayers.Px3JSON.ServiceGroups
    * The servicesGroups object can be thought of as a hash map with the key 
    * being the service group id and value being an array of service ids.	
    * This is used to help organize the services into grouped menus for the 
    * overlay services and into buttons for the basemaps
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: id
     * {String} Id of the service group
     */
    id: null,
    
    /**
     * Property: serviceIds
     * {String[]} Service Ids
     */
    serviceIds : [],
    
    
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
        
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.ServiceGroups object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.ServiceGroups} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.ServiceGroups(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.ServiceGroups"
});