OpenLayers.Format.Px3JSON.BackgroundMaps = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
   /**
    * Class: OpenLayers.Format.Px3JSON.BackgroundMaps
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @requires OpenLayers/Format/Px3JSON/ServiceControls.js
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
     
    /**
     * Property: id
     * {String} An id to be used by other references to this map in the config.
     */
    id: null,
            
    /**
     * Property: displayName
     * {String} The name that will be displayed on the background map selector 
     * in the upper right hand corner of the map.
     */
    displayName: null,
       
    /**
     * Property: serviceGroupId
     * {String} The service group that this background map consists of.
     */
    serviceGroupId: null,
    
    /**
     * Property: serviceControls
     * {Object[]} An array of service control configuration objects. Provides control of specific service visibility within background maps.
     */
    serviceControls: [],
   
    /**
     * Constructor: OpenLayers.Format.Px3JSON.BackgroundMaps
     * Construct an OpenLayers.Format.Px3JSON.BackgroundMaps object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        if (options.serviceControls) {
            this.serviceControls = [];
            for (var serviceControlsIndex = 0;serviceControlsIndex < options.serviceControls.length;serviceControlsIndex++) {
                this.serviceControls.push(new OpenLayers.Format.Px3JSON.ServiceControls(options.serviceControls[serviceControlsIndex]));
            }
        }
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.BackgroundMaps object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.BackgroundMaps} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.BackgroundMaps(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.BackgroundMaps"
});