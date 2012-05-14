OpenLayers.Format.Px3JSON.SpatialReference = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
    /**
    * Class: OpenLayers.Format.Px3JSON.SpatialReference
    * 
    * Service Control Object
    * 
    * @requires OpenLayers/Format/SpatialReference.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: wkid
     * {Integer} The well-known ID of a spatial reference. See Projected Coordinate 
     * Systems and Geographic Coordinate Systems for the list of supported 
     * spatial references.
     */
    wkid: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.ServiceControls object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.ServiceControls} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.SpatialReference(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.SpatialReference"
});