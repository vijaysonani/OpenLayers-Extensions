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
     * Property: minItems
     * {Integer} A number, >= 0, specifies the minimum length of the tools array for this
     * object to be considered valid.
     */
    minItems : 1,
    
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
        if (options.tools) {
            this.tools = [];
            for (var toolsIndex = 0;toolsIndex < options.tools.length;toolsIndex++) {
                this.tools.push(new OpenLayers.Format.Px3JSON.ToolConfiguration(options.tools[toolsIndex]));
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
        if (this.tools.length < this.minItems) {
            return false;
        } else {
            return true;
        }
    },
    CLASS_NAME: "OpenLayers.Format.Px3JSON.Tools"
});