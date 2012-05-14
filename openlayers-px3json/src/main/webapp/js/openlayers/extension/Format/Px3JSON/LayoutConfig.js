OpenLayers.Format.Px3JSON.LayoutConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.LayoutConfig (Base Context)
    * 
    * Layout Configuration Object
    * 
    * An object containing various properties used to setup the layout of the application.
    *
    * @requires OpenLayers/Format/Px3JSON.js  
    * @requires OpenLayers/Format/Px3JSON/OverlayGroups.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
     /**
     * Property: displaySecurityBanners
     * {Boolean} When true will display a security banner depending on what 
     * services are on the map and what their classification level is.
     */
    displaySecurityBanners: null,
     
    /**
     * Property: displayTocSecurityMarkings
     * {Boolean} When true will display a security banner next to services in 
     * the table of contents with certain classification levels.
     */
    displayTocSecurityMarkings: null,
         
    /**
     * Property: linkPaneType
     * {String} The class to be used as the link pane.
     */
    linkPaneType: null,
          
    /**
     * Property: tocMenuType
     * {String} The class to be used for the TOC popup menu.
     */
    tocMenuType: null,
      
    /**
     * Property: hideToolbar
     * {Boolean} Optional. If true, makes the toolbar hidden initially.
     */
    hideToolbar: null,
  
    /**
     * Property: overlayGroups
     * {OpenLayers.Format.Px3JSON.OverlayGroups[]} An array of objects defining what is displayed in the table of contents.
     */
    overlayGroups: null,
            
    /**
     * Property: initialActiveTaskId
     * {String} Optional. The id of a task to have populated when the task pane is opened.
     */
    initialActiveTaskId: null,
  
    /**
     * Property: availableTasks
     * {String[]} An array of task ids that will be available in the left pane.
     */
    availableTasks: [],
           
    /**
     * Property: backgroundMaps
     * {OpenLayers.Format.Px3JSON.BackgroundMaps[]} Optional.
     * This property does not exist @ 
     * https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
     * but does exist in /doc/example.json so is included here
     */       
    backgroundMaps : [],       
            
    /**
     * Constructor: OpenLayers.Format.Px3JSON.LayoutConfig
     * Construct an OpenLayers.Format.Px3JSON.LayoutConfig object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        if (options.overlayGroups) {
            this.overlayGroups = [];
            for (var overlayGroupsIndex = 0;overlayGroupsIndex < options.overlayGroups.length;overlayGroupsIndex++) {
                this.overlayGroups.push(new OpenLayers.Format.Px3JSON.OverlayGroups(options.overlayGroups[overlayGroupsIndex]));
            }
        }
        
        if (options.backgroundMaps) {
            this.backgroundMaps = [];
            for (var backgroundMapsIndex = 0;backgroundMapsIndex < options.backgroundMaps.length;backgroundMapsIndex++) {
                this.backgroundMaps.push(new OpenLayers.Format.Px3JSON.BackgroundMaps(options.backgroundMaps[backgroundMapsIndex]));
            }
        }
        
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.LayoutConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.LayoutConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.LayoutConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.LayoutConfig"
});