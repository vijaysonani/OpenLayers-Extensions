OpenLayers.Format.Px3JSON.SearchConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.SearchConfig (Px3 Viewer Unique)
    * 
    * Search Configuration Object
    * 
    * An object used to configure the search function.
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * z2see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: locator
     * {Boolean} Id of the locator to be used during a search.
     */
    locator: null,

    /**
     * Property: searchZoomLevel
     * {Integer} The level to zoom to on a successful search.
     */
    searchZoomLevel: null,

    /**
     * Property: nearTaskUrl
     * {String} Optional. URL pointing to the REST endpoint of a GPTask used to handle the near keyword.
     */
    nearTaskUrl: null,

    /**
     * Property: wmsReflectorUrl
     * {String} URL pointing to wms reflector used to add wms services through enhanced search.
     */
    wmsReflectorUrl: null,

    /**
     * Property: defaultText
     * {String} Optional. Text to be displayed when there are no search or routing results.
     */
    defaultText: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.SearchConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.SearchConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.SearchConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.SearchConfig"
});