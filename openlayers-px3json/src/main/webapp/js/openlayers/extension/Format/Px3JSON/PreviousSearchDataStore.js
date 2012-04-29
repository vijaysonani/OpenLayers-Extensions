OpenLayers.Format.Px3JSON.PreviousSearchDataStore = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.PreviousSearchDataStore (Px3 Viewer Unique, optional)
    * 
    * Previous Search Data Store Configuration Object
    * 
    * An object containing configuration information related to storing previous search text.
    * Note: to prevent storing any previous search text, remove this object from the configuration
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: type
     * {String} The type of data store used to hold previous search text. Valid values are:
     * - “session”: stores search text in browser memory. Previous search values are removed 
     *              when user closes browser.
     * - “cookie”: stores search text in browser cookie (if user allows cookies to be stored)
     * - “db”: stores search text in a database. Note: when selecting this option, 
     *          you must also configure the “searchdatastore” properties in the jsapix.properties file. 
     *          See PalX3_Properties_Files_Configuration.doc for details
     */
    type: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.PreviousSearchDataStore object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.PreviousSearchDataStore} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.PreviousSearchDataStore(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.PreviousSearchDataStore"
});