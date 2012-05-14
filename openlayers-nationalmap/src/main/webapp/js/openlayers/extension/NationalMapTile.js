/**
 * Class: OpenLayers.Layer.NationalMapTile
 *
 * This layer defaults to Spherical Mercator.
 */

OpenLayers.Layer.NationalMapTile = OpenLayers.Class(OpenLayers.Layer.NationalMapXYZ, {
     sphericalMercator: true,
     transitionEffect: 'resize',
     minZoom: 0,
     getURL: function (bounds) {
         var res = this.map.getResolution();
         var x = Math.round((bounds.left - this.maxExtent.left) 
             / (res * this.tileSize.w));
         var y = Math.round((this.maxExtent.top - bounds.top) 
             / (res * this.tileSize.h));
         var z = this.map.getZoom();

         var url = this.url + '/${z}/${y}/${x}.png';
         var s = '' + x + y + z;
         if (url instanceof Array)
         {
             url = this.selectUrl(s, url);
         }
         
         var path = OpenLayers.String.format(url, {'x': x, 'y': y, 'z': (z-this.minZoom)});

         return path;
     },
     CLASS_NAME: "OpenLayers.Layer.NationalMapTile"
});
