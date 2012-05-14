OpenLayers.Format.Px3JSON.RouterConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.RouterConfig (Px3 Viewer Unique, Not Used in TNM)
    * 
    * Router Configuration Object
    * 
    * An object containing configuration information related to the router. 
    * This is included in the NGA Palanterra x3 Toolbox, 
    * but not used by USGS The National Map
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: locator
     * {String} Id of the locator to be used during a routing task.
     */
    locator: null,

    /**
     * Property: findNAService
     * {String} URL of the GP Task used to find the Network Analyst service. 
     * This Task should take in a Feature Set of stops and return the URL of a 
     * Network Analyst service available for those stops.
     */
    findNAService: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.RouterConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.RouterConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.RouterConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.RouterConfig"
});