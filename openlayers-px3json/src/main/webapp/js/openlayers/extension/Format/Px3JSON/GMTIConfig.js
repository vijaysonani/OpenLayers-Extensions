OpenLayers.Format.Px3JSON.GMTIConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.GMTIConfig
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * 
    * An object containing configuration information related to the selection results.
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: enableValidationByDefault
     * {Boolean} A flag to tell the application whether GMTI validation for buffers should be enabled by default.
     */
    enableValidationByDefault: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.GMTIConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.GMTIConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.GMTIConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.GMTIConfig"
});