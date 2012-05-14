OpenLayers.Format.Px3JSON.LayerConfig = OpenLayers.Class(OpenLayers.Format.Px3JSON, {
    /**
    * Class: OpenLayers.Format.Px3JSON.LayerConfig
    * 
    * Layer Configuration Object
    * 
    * @requires OpenLayers/Format/Px3JSON.js
    * @requires OpenLayers/Format/Px3JSON/InfoTemplate.js
    * 
    * @see https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
   
    /**
     * Property: id
     * Id of the layer, this should match the key in the layers hash 
     * map object (this allows for fast access to a Layer Configuration Object)
     * {String} 
     */
    id: null,
    
    /**
     * Property: identifiable
     * True will allows the layer to be identified upon. This will 
     * override the value of the Service Configuration Object’s layersDefaultIdentifiable property.
     * {Boolean} 
     */
    identifiable : false,
    
    /**
     * Property: infoTemplate
     * Optional. The template used to create the contents of the 
     * InfoWindow displayed when an identified features details are displayed.
     * {OpenLayers.Format.Px3JSON.InfoTemplate} 
     */
    infoTemplate : {},
    
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
        
        if (this.options.infoTemplate) {
            this.infoTemplate = new OpenLayers.Format.Px3JSON.InfoTemplates(this.options.infoTemplate);
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
    
    CLASS_NAME : 'OpenLayers.Format.Px3JSON.LayerConfig'
});