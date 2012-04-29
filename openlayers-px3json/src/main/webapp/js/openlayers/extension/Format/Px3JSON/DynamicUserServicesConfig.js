OpenLayers.Format.Px3JSON.DynamicUserServicesConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.DynamicUserServicesConfig (Px3 Viewer Unique, for WMS services)
    * 
    * Dynamic User Services Configuration Object
    * 
    * An object containing configuration information related to the selection results.
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: useDynamicUserServices
     * {Boolean} A flag to tell the application whether it should receive dynamic service messages or not.
     */
    useDynamicUserServices: null,
    
    /**
     * Property: wmsReflectorUrl
     * {String} URL pointing to the WMS reflector. This is used to interoperate WFS services.
     */
    wmsReflectorUrl: null,
        
    /**
     * Property: drawOrder
     * {Number} The draw order dynamic services should have.
     */
    drawOrder: null,
        
    /**
     * Property: classification
     * {String} The classification of services added through dynamic services.
     */
    classification: null,
            
    /**
     * Property: caveats
     * {String[]} A array of classification caveats for services added through dynamic services.
     */
    caveats: null,
    
    options : null,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.DynamicUserServicesConfig
     * Construct an OpenLayers.Format.Px3JSON.DynamicUserServicesConfig object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        this.options = options;
        if (this.options.opacity < 0) {
            this.opacity = 0;
        } else if(this.options.opacity > 1) {
            this.opacity = 1;
        }
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.DynamicUserServicesConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.DynamicUserServicesConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.DynamicUserServicesConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.DynamicUserServicesConfig"
});