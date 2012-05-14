OpenLayers.Format.Px3JSON.OverlayGroups = OpenLayers.Class({

    /**
    * Class: OpenLayers.Format.Px3JSON.OverlayGroups
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: id
     * {String} The overlay group id.
     */
    id: null,
     
    /**
     * Property: displayName
     * {String} The title of this overlay group to be displayed in the left pane.
     */
    displayName: null,
      
    /**
     * Property: serviceGroupId
     * {String} The service group that this overlay group represents.
     */
    serviceGroupId: null,
        
    /**
     * Property: selected
     * {Boolean} If true, this pane will be open when the map loads.
     */
    selected: null,
              
    options : null,
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.OverlayGroups
     * Construct an OpenLayers.Format.Px3JSON.OverlayGroups object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        this.options = options;
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.OverlayGroups object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.OverlayGroups} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.OverlayGroups(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.OverlayGroups"
});