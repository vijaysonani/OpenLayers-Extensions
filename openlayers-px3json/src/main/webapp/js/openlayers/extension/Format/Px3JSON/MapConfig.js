OpenLayers.Format.Px3JSON.MapConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.MapConfig
    * 
    * (Base Context)
    * 
    * An object used to set the initial map settings.
    * 
    * @requires OpenLayers/Format/Px3JSON/MapConfig.js
    * @required OpenLayers/Format/Px3JSON/BackgroundMaps.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: baseServiceId
     * {String} Id of the service that will be used as the applications base 
     * service. This will set the spatial reference of the map.
     */
    baseServiceId: null,
    
    /**
     * Property: initialBackgroundMapId
     * {String} Id of the background map group to be displayed on load.
     */
    initialBackgroundMapId: null,

    /**
     * Property: initialToolId
     * {String} Id of the tool to be made active at startup.
     */
    initialToolId: null,

    /**
     * Property: initialVisibleServicesGroupId
     * {String} Id of a service group to be loaded at startup.
     */
    initialVisibleServicesGroupId: null,

    /**
     * Property: dynamicUserServicesGroupId
     * {String} Optional. Id of a service group used to keep track of dynamic user services.
     */
    dynamicUserServicesGroupId: null,

    /**
     * Property: initialExtentId
     * {String} Optional. Id of an extent to be visible at startup.
     */
    initialExtentId: null,

    /**
     * Property: fullExtentId
     * {String} Id of an extent to be used when the Zoom to Full Extent tool is activated.
     */
    fullExtentId: null,

    /**
     * Property: nav
     * {Boolean} If false, navigation will be disabled by default.
     */
    nav: false,

    /**
     * Property: statusBar
     * {Boolean} If false, the status bar will not be displayed.
     */
    statusBar: false,

    /**
     * Property: defaultServiceClassification
     * {String} The default service classification level.
     */
    defaultServiceClassification: null,

    /**
     * Property: defaultServiceCaveats
     * {String} The default service caveats.
     */
    defaultServiceCaveats: null,

    /**
     * Property: backgroundMaps
     * {OpenLayers.Format.Px3JSON.BackgroundMaps[]} An array of objects defining types of background maps.
     */
    backgroundMaps: [],
    
    /**
     * Property: identifyLayerOption
     * {String} Optional. Default: "esri.tasks.IdentifyParameters.LAYER_OPTION_ALL"
     * Possible values: "esri.tasks.IdentifyParameters.LAYER_OPTION_ALL",
     *  "esri.tasks.IdentifyParameters.LAYER_OPTION_TOP",
     *  "esri.tasks.IdentifyParameters.LAYER_OPTION_VISIBLE"
     *  
     *  Information regarding this property could not be found @ 
     *  https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
     *  But it does appear in /doc/jsapix-config-schema.jsd
     */
    identifyLayerOption : "esri.tasks.IdentifyParameters.LAYER_OPTION_ALL",
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.MapConfig
     * Construct an OpenLayers.Format.Px3JSON.MapConfig object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        if (options.backgroundMaps) {
            this.backgroundMaps = [];
            for (var backgroundMapsIndex = 0;backgroundMapsIndex < options.backgroundMaps.length;backgroundMapsIndex++) {
                this.backgroundMaps.push(new OpenLayers.Format.Px3JSON.BackgroundMaps(options.backgroundMaps[backgroundMapsIndex]));
            }
        }
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.MapConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.MapConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.MapConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.MapConfig"
});