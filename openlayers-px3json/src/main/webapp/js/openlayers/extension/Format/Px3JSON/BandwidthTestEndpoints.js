OpenLayers.Format.Px3JSON.BandwidthTestEndpoints = OpenLayers.Class({
    
    /**
    * Class: OpenLayers.Format.Px3JSON.BandwidthTestEndpoints
    * 
    * The bandwidthTestEndpoints object can be thought of as a hash map with 
    * the key being the endpoint id and value being an endpoint configuration object.
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
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
     * {String} The number of bytes to send to the service as a test
     */
    cityField: 'byteSize',

    /**
     * Constructor: OpenLayers.Format.Px3JSON.BandwidthTestEndpoints
     * Construct an OpenLayers.Format.Px3JSON.BandwidthTestEndpoints object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
    },
    
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
    
    /**
     * Method: isValidType
     * Check if an object is a valid representative of the given type.
     * 
     * Parameters:
     * obj - {Object} An initialized object of this type
     * 
     * Returns:
     * {Boolean} The object is valid object of the given type.
     */
    isValidType : function(obj) {
        return true;
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.BandwidthTestEndpoints"
});