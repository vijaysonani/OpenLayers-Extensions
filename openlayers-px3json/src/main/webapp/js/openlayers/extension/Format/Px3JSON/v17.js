/**
 * @requires OpenLayers/Format/Px3JSON/Service.js
 */

/**
 * Class: OpenLayers.Format.Px3JSON.v17
 */
OpenLayers.Format.Px3JSON.v17 = OpenLayers.Class({
    /**
     * Property : services
     * The services object can be thought of as a hash map with the key being 
     * the service id and value being a service configuration object.
     * {OpenLayers.Format.Px3JSON.Services} 
     */
    services : {},
    
    /**
     * Property : serviceGroups
     * The servicesGroups object can be thought of as a hash map with the key 
     * being the service group id and value being an array of service ids.	
     * This is used to help organize the services into grouped menus for the 
     * overlay services and into buttons for the basemaps
     * {OpenLayers.Format.Px3JSON.ServiceGroups} 
     */
    serviceGroups : {},
    
    /**
     * Property : locators
     * The locators object can be thought of as a hash map with the key being 
     * the locator id and value a locator configuration object.
     * {OpenLayers.Format.Px3JSON.Locators} 
     */
    
    options : {},
    
    /**
     * Constructor: OpenLayers.Format.Px3JSON.v17
     * Construct an OpenLayers.Format.Px3JSON.v17 object
     * 
     * Parameters:
     * json - {Object} The object from which this object is constructed
     */    
    initialize : function(options) {
        OpenLayers.Util.applyDefaults(this, options);
        this.options = options;
        for (var option in this.options) {
            var val = this.options[option];
            var obj = {};
            switch(option) {
                case 'services' :
                    for (var key in val) {
                        obj = new OpenLayers.Format.Px3JSON.Services(val[key]);
                        if (obj.isValidType(obj)) {
                            this[option] = obj;
                        }
                    }
                    break;
                case 'serviceGroups' :
                    for (var key in val) {
                        obj = new OpenLayers.Format.Px3JSON.ServiceGroups(val[key]);
                        if (obj.isValidType(obj)) {
                            this[option] = obj;
                        }
                    }
                    break;
                case 'locators' :
                    for (var key in val) {
                        obj = new OpenLayers.Format.Px3JSON.Locators(val[key]);
                        if (obj.isValidType(obj)) {
                            this[option] = obj;
                        }
                    }
                    break;
                case 'bandwidthTestEndpoints' :
                    for (var key in val) {
                        obj = new OpenLayers.Format.Px3JSON.BandwidthTestEndpoints(val[key]);
                        if (obj.isValidType(obj)) {
                            this[option] = obj;
                        }
                    }
                    break;
                case 'tasks' :
                    for (var key in val) {
                        obj = new OpenLayers.Format.Px3JSON.Tasks(val[key]);
                        if (obj.isValidType(obj)) {
                            this[option] = obj;
                        }
                    }
                    break;
            }
        }
        var a = 1;
    },
    
    read : function(json) {
        var obj = null;
        
        if (typeof json == "string") {
            obj = OpenLayers.Format.JSON.prototype.read.apply(this, [json]);
        } else { 
            obj = json;
        }  
        
        if(!obj) {
            OpenLayers.Console.error("Bad JSON: " + json);
            return null;
        } else {
            
            return new OpenLayers.Format.Px3JSON.v17(obj);
        }
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
    
    CLASS_NAME : 'OpenLayers.Format.Px3JSON.v17'
})