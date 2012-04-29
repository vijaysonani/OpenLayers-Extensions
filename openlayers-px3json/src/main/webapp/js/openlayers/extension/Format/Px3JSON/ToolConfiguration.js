OpenLayers.Format.Px3JSON.ToolConfiguration = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    
    /**
    * Class: OpenLayers.Format.Px3JSON.ToolConfiguration
    * 
    * Tool Configuration Object
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: type
     * {String} Name of the class this tool is created by.
     */
    type: null,
    
    /**
     * Property: displayName
     * {String} Name that will be displayed in the toolbar.
     */
    displayName: null,
    
    /**
     * Property: image
     * {String} Image that will be displayed in the toolbar. Should specify an 
     * absolute url path or one relative to the tool.
     */
    image: null,
        
    /**
     * Property: configuration
     * {Object} Should include the tool's id and any other tool specific configuration options.
     */
    configuration: null,
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.ToolConfiguration object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.ToolConfiguration} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.ToolConfiguration(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.ToolConfiguration"
});