OpenLayers.Format.Px3JSON.BandwidthTestEndpoints = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
    /**
    * Class: OpenLayers.Format.Px3JSON.BandwidthTestEndpoints (Px3 Viewer Unique)
    * 
    * The bandwidthTestEndpoints object can be thought of as a hash map with 
    * the key being the endpoint id and value being an endpoint configuration object.
    * 
    * Bandwidth Test Endpoint Object
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: displayName
     * {String} Name that will be displayed in the endpoint dropdown input for 
     * the bandwith test.
     */
    displayName: null,
    
    /**
     * Property: url
     * {String} A full URL to an image located on the server you would like to 
     * test. For the most reliable results, this should be a tile from a map service.
     */
    url: null,
 
     /**
     * Property: byteSize
     * {Integer} The number of bytes to send to the service as a test
     */
    byteSize: 'byteSize',
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.BandwidthTestEndpoints object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.BandwidthTestEndpoints} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.BandwidthTestEndpoints(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.BandwidthTestEndpoints"
});