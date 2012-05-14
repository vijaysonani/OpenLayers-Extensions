OpenLayers.Format.Px3JSON.ServiceGroups = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
    /**
    * Class: OpenLayers.Px3JSON.ServiceGroups (Base Context)
    * 
    * The servicesGroups object can be thought of as a hash map with the key 
    * being the service group id and value being an array of service ids.	
    * This is used to help organize the services into grouped menus for the 
    * overlay services and into buttons for the basemaps
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.ServiceGroups"
});