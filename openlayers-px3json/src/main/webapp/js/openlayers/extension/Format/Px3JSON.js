/* Copyright (c) 2006-2011 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the Clear BSD license.  
 * See http://svn.openlayers.org/trunk/openlayers/license.txt for the
 * full text of the license. */


/**
 * Class: OpenLayers.Format.Px3JSON
 */
OpenLayers.Format.Px3JSON = OpenLayers.Class(OpenLayers.Format.JSON, {
    
    read: function(json, filter) {
        var obj = null;
        var requiredStringNode = 'defaultToolGroup';
        
        if (typeof json == "string") {
            obj = OpenLayers.Format.JSON.prototype.read.apply(this, [json, filter]);
        } else { 
            obj = json;
        }  
        
        if(!obj) {
            OpenLayers.Console.error("Bad JSON: " + json);
        } else if(typeof(obj[requiredStringNode]) != "string") {
            OpenLayers.Console.error("Bad Px3JSON - no "+requiredStringNode+": " + json);
        } else {
            for (key in obj) {
                
            }
        }
        return obj;
    },
    
    write: function(px3json, pretty) {
        return OpenLayers.Format.JSON.prototype.write.apply(this, [px3json, pretty]);
    },

    CLASS_NAME: "OpenLayers.Format"
});     
