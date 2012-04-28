/**
 * @requires OpenLayers/Format/Px3JSON/v17.js
 * @requires OpenLayers/Format/Px3JSON/Service.js
 */

/**
 * Class: OpenLayers.Format.Px3JSON
 */
OpenLayers.Format.Px3JSON = OpenLayers.Class(OpenLayers.Format.JSON, {
    
   /**
     * APIMethod: read
     * Deserialize a OpenLayers.Format.Px3JSON string.
     *
     * Parameters:
     * json - {String} A PxOpenLayers.Format.Px3JSON3JSON string
     *
     * Returns: 
     * {OpenLayers.Format.Px3JSON.v1} Null is returned if the serialized Px3JSON is invalid
     */
    read: function(json) {
        return OpenLayers.Format.Px3JSON.v17.prototype.read.apply(this, [json]);
    },
    
    write: function(px3json, pretty) {
        return OpenLayers.Format.JSON.prototype.write.apply(this, [px3json, pretty]);
    },

    CLASS_NAME: "OpenLayers.Format.Px3JSON"
});     
