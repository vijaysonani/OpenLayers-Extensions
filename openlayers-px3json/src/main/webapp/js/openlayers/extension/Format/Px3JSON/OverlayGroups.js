OpenLayers.Format.Px3JSON.OverlayGroups = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.OverlayGroups
    * 
    * @requires OpenLayers/Format/Px3JSON.js
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
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.OverlayGroups"
});