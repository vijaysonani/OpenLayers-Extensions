OpenLayers.Format.Px3JSON.WMSErrorConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.WMSErrorConfig (Px3 Viewer Unique)
    * 
    * An object containing configuration information related to showing error 
    * messages on WMS layer interaction.
    * 
    * WMS Error Messge Configuration Object
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: reflectorErrorUrl
     * {String} URL pointing to the Reflector service serving the error message configuration.
     * 
     * This is usually the “/exceptions” service for the reflector
     */
    reflectorErrorUrl: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.WMSErrorConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.WMSErrorConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.WMSErrorConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.WMSErrorConfig"
});