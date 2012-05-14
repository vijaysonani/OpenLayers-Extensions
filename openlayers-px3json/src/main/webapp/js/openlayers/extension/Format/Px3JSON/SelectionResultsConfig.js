OpenLayers.Format.Px3JSON.SelectionResultsConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.SelectionResultsConfig (Px3 Viewer Unique)
    * 
    * An object containing configuration information related to the selection results.
    * 
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: elevationGPEndPoint
     * {String} URL of the elevation GP Task for elevation operations.
     */
    elevationGPEndPoint: null,
   
    /**
     * Property: bufferGeometryServiceUrl
     * {String} URL of the geometry service used for buffering geometries.
     */
    bufferGeometryServiceUrl: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.SelectionResultsConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.SelectionResultsConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.SelectionResultsConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.SelectionResultsConfig"
});