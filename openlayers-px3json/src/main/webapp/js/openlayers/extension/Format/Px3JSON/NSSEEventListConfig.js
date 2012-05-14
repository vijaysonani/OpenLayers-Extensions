OpenLayers.Format.Px3JSON.NSSEEventListConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.NSSEEventListConfig (Px3 Viewer Unique, event display sites only)
    * 
    * NSEE Event List Configuration Object
    * 
    * An object containing configuration information related to the NSSE event 
    * list. This is included in the NGA Palanterra x3 Toolbox, 
    * but not used by USGS The National Map
    *
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: eventServiceId
     * {String} Id of the map service used to display the NSSE events.
     */
    eventServiceId: null,
      
    /**
     * Property: eventLayerId
     * {Integer} The layer that should be used in the NSSE service.
     */
    eventLayerId: null,
     
    /**
     * Property: featureServiceUrl
     * {String} URL to the feature service used for editing NSSE events features. An example is:
     * http://server/rest/services/Events/NSSE_Events_Feature/Fea tureServer/0. 
     * For more information on constructing a URL, see The Services Directory and the REST API
     */
    featureServiceUrl: null,
      
    /**
     * Property: rssUrl
     * {String} The relative URL linking to a RSS feed displaying all of the current NSSE events.
     */
    rssUrl: null,
     
    /**
     * Property: kmlUrl
     * {String} The complete URL to a kmz file containing all of the current NSSE events.
     */
    kmlUrl: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.NSSEEventListConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.NSSEEventListConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.NSSEEventListConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.NSSEEventListConfig"
});