OpenLayers.Format.Px3JSON.LayoutConfig = OpenLayers.Class({
    /**
    * @requires OpenLayers/Format/Px3JSON/OverlayGroups.js
    */

    /**
    * Class: OpenLayers.Format.Px3JSON.LayoutConfig
    * 
    * An object containing various properties used to setup the layout of the application.
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
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
     * {Boolean} If true, makes the toolbar hidden initially.
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
    availableTasks: null,
                  
    options : null,
    
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
        this.options = options;
        if (this.options.overlayGroups) {
            this.overlayGroups = [];
            for (var overlayGroupsIndex = 0;overlayGroupsIndex < this.options.overlayGroups.length;overlayGroupsIndex++) {
                this.overlayGroups.push(new OpenLayers.Format.Px3JSON.OverlayGroups(this.options.overlayGroups[overlayGroupsIndex]));
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.LayoutConfig"
});