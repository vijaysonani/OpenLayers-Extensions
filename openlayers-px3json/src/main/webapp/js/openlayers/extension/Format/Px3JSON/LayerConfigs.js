OpenLayers.Format.Px3JSON.LayerConfig = OpenLayers.Class({
    /**
    * Class: OpenLayers.Format.Px3JSON.LayerConfig
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
    * @requires OpenLayers/Format/Px3JSON/InfoTemplate.js
    */
   
    /**
     * Property: id
     * {String} Id of the layer, this should match the key in the layers hash 
     * map object (this allows for fast access to a Layer Configuration Object)
     */
    id: null,
    
    /**
     * Property: identifiable
     * {Boolean} True will allows the layer to be identified upon. This will 
     * override the value of the Service Configuration Object’s layersDefaultIdentifiable property.
     */
    identifiable : false,
    
    /**
     * Property: infoTemplate
     * {OpenLayers.Format.Px3JSON.InfoTemplate} Optional. The template used to create the contents of the 
     * InfoWindow displayed when an identified features details are displayed.
     */
    infoTemplate : {},
    
    options : null,
    /**
     * Constructor: OpenLayers.Format.Px3JSON.LayerConfig
     * Construct an OpenLayers.Format.Px3JSON.LayerConfig object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        this.options = options;
        
        if (options.infoTemplate) {
            this.infoTemplate = new OpenLayers.Format.Px3JSON.InfoTemplates(options.infoTemplate);
        }
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.LayerConfig object
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.LayerConfig} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.LayerConfig(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
    
    CLASS_NAME : 'OpenLayers.Format.Px3JSON.LayerConfig'
});