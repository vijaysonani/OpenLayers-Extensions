OpenLayers.Format.Px3JSON.EditUtilConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.EditUtilConfig (Px3 Viewer Unique)
    * 
    * Edit Utility Configuration Object
    * 
    * An object containing configuration information related to editing annotations.
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: geometryServiceUrl
     * {String} URL pointing to the REST geometry service used for editing.
     */
    geometryServiceUrl: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.EditUtilConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.EditUtilConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.EditUtilConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.EditUtilConfig"
});