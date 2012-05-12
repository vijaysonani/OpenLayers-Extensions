OpenLayers.Format.Px3JSON.NSSEEventEntryConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.NSSEEventEntryConfig (Px3 Viewer Unique, event entry sites only)
    * 
    * NSSE Event Entry Configuration Object
    * 
    * An object containing configuration information related to the NSSE event entry form. 
    * This is included in the NGA Palanterra x3 Toolbox, but not used by USGS The National Map
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: nsseEventsServiceId
     * {String} Id of the map service used to display the NSSE events.
     */
    nsseEventsServiceId: null,
      
    /**
     * Property: nsseEventsLayerId
     * {Number} The layer that should be used in the NSSE service.
     */
    nsseEventsLayerId: null,
     
     /**
      * Property: nsseEventsTimeServiceId
      * {String} Id of the map service used to display time visualization of NSSE events.
      */
    nsseEventsTimeServiceId : null,
    
    /**
     * Property: featureServiceUrl
     * {String} URL to the feature service used for editing NSSE events features. An example is:
     * http://server/rest/services/Events/NSSE_Events_Feature/Fea tureServer/0. 
     * For more information on constructing a URL, see The Services Directory and the REST API
     */
    featureServiceUrl: null,
            
    /**
     * Property: locator
     * {String} Id of the locator to use.
     */
    locator: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.NSSEEventEntryConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.NSSEEventEntryConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.NSSEEventEntryConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.NSSEEventEntryConfig"
});