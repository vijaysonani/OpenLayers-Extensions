OpenLayers.Format.Px3JSON.Tools = OpenLayers.Class(OpenLayers.Format.Px3JSON, {

    /**
    * Class: OpenLayers.Format.Px3JSON.Tools (Px3 Viewer Unique)
    * 
    * Tool Group Object
    * 
    * An array of tool group configuration objects.
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @requires OpenLayers/Format/Px3JSON/ToolConfiguration.js
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: group
     * {String} Id of the tool group. This will be displayed on a tab in the toolbar.
     */
    group: null,
    
    /**
     * Property: tools
     * {OpenLayers.Format.Px3JSON.ToolConfiguration[]} An array of tool configuration objects.
     */
    tools: [],
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.Tools
     * Construct an OpenLayers.Format.Px3JSON.Tools object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        this.options = options;
        if (this.options.tools) {
            this.tools = [];
            for (var toolsIndex = 0;toolsIndex < this.options.tools.length;toolsIndex++) {
                this.tools.push(new OpenLayers.Format.Px3JSON.ToolConfiguration(this.options.tools[toolsIndex]));
            }
        }
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.Tools object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.Tools} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.Tools(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.Tools"
});