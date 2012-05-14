/**
 * @requires OpenLayers/Format/Px3JSON/Service.js
 */

/**
 * Class: OpenLayers.Format.Px3JSON.v17
 */
OpenLayers.Format.Px3JSON.v17 = OpenLayers.Class({
    /**
     * Property : services
     * {Service[]} 
     */
    services : [],
    
    options : null,
    
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
        for (var property in this) {
            switch(property) {
                case 'services' :
                    var servicesJSON = this[property];
                    var serviceArr = [];
                    for (var service in servicesJSON) {
                        var serviceObj = new OpenLayers.Format.Px3JSON.Service(servicesJSON[service]);
                        if (serviceObj.isValidType(serviceObj)) {
                            serviceArr.push(serviceObj);
                        }
                    }
                    this.services = serviceArr;
                    break;
            }
        }
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
    
        for (var key in obj) {
            switch(key) {
                case 'services' :
                    var services = obj[key];
                    for (var service in services) {
                        var serviceObj = new OpenLayers.Format.Px3JSON.Service(services[service]);
                        if (serviceObj.isValidType(serviceObj)) {
                            this.services.push(serviceObj);
                        } else {
                            OpenLayers.Console.error('Invalid Service Object');
                        }
                    }
                    break;
            }
        }
    }, 
    
    CLASS_NAME : 'OpenLayers.Format.Px3JSON.v17'
})