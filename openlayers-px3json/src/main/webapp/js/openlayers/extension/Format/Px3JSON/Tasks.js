OpenLayers.Format.Px3JSON.Tasks = OpenLayers.Class({
    
    /**
    * Class: OpenLayers.Format.Px3JSON.Tasks 
    * 
    * The tasks object can be thought of as a hash map with the key being the 
    * task id and value being a task configuration object. This is included in 
    * the NGA Palanterra x3 Toolbox, but not used by USGS The National Map
    * 
    * More info @ https://my.usgs.gov/confluence/download/attachments/67862566/Configuring+Config_USGS_TNM.json.pdf
    */
    
    /**
     * Property: id
     * {String} Id of the task, this should match the key in the tasks object 
     * (this allows for fast access to a task configuration object)
     */
    id: null,
    
    /**
     * Property: displayName
     * {String} Name that will be displayed in the Tasks Selection Pane for the task.
     */
    displayName: null,   
    
    /**
     * Property: url
     * {String} URL to an ArcGIS Server REST resource that represents a geo-processing 
     * service. 
     * An example is 
     * http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Network/ESRI_DriveTime_US/GPServer/CreateDriveTimePolygons. 
     * For more information on constructing a URL, see The Services Directory and the REST API.
     */
    url: null,    
     
    /**
     * Property: parameters
     * {Object} Optional. Hash map of parameter configuration objects with 
     * parameter ids as a key.	These objects set the output symbology 
     * for the task.
     */
    parameters: null,  
    
    /**
     * Property: classification
     * {Object} Optional. Valid values are:
     * "UNCLASSIFIED", "CONFIDENTIAL", "SECRET", and "TOP SECRET". 
     * This will be used if displaySecurityBanners or displayTocSecurityMarkings in the
     */
    classification: null,     
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents
     * Construct an OpenLayers.Format.Px3JSON.OpenLayers.Format.Px3JSON.Extents object
     * 
     * Parameters:
     * options - {Object} Optional object whose properties will be set on
     *     the object.
     */
    initialize: function(options) {
        OpenLayers.Util.applyDefaults(this, options);
    },
    
    /**
     * APIMethod: read
     * Read a JSON string into a OpenLayers.Format.Px3JSON.Tasks
     *
     * Parameters:
     * obj - {Object} A JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.Tasks} 
     */
    read : function(json) {
        return new OpenLayers.Format.Px3JSON.Tasks(OpenLayers.Format.JSON.prototype.read.apply(this, [json]));
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
        if (obj.classification) {
            if (!obj.classification === "UNCLASSIFIED" &&
                !obj.classification === "CONFIDENTIAL" &&
                !obj.classification === "SECRET" &&
                !obj.classification === "TOP SECRET") {
                return false;
                }
        }
        return true;
    },
    
    CLASS_NAME: "OpenLayers.Format.Px3JSON.Tasks"
});