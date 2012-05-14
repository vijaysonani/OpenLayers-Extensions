OpenLayers.Format.Px3JSON.ServiceControls = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
    /**
    * Class: OpenLayers.Format.Px3JSON.ServiceControls
    * 
    * Service Control Object
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: label
     * {String} Label displayed for the service control.
     */
    label: null,
    
    /**
     * Property: servicesIds
     * {String[]} Array of service ids for services whose visibility are controlled by this service control.
     */
    servicesIds: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.ServiceControls object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.ServiceControls} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.ServiceControls(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.ServiceControls"
});