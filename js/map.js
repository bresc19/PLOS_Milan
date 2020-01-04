
var geojsonFormat1 = new ol.format.GeoJSON();
var geojsonFormat2 = new ol.format.GeoJSON();
var vectorSource_lines = new ol.source.Vector({
            loader: function (extent, resolution, projection) {
              $.ajax('http://localhost:8080/geoserver/Milan/wfs',{
        type: 'GET',
        data: {
            service: 'WFS',
            version: '1.0.0',
            request: 'GetFeature',
            typename: 'Milan:Lines',
            srsname: 'EPSG:3857',
            outputFormat: 'text/javascript',
            bbox: extent.join(',') + ',EPSG:3857'
            },
        dataType: 'jsonp',
        jsonpCallback:'callback:loadFeatures',
        jsonp:'format_options'
        });

            },
        });


  /*    var vectorSource_points = new ol.source.Vector({
                  loader: function (extent, resolution, projection) {
                    $.ajax('http://localhost:8080/geoserver/Milan/wfs',{
              type: 'GET',
              data: {
                  service: 'WFS',
                  version: '1.0.0',
                  request: 'GetFeature',
                  typename: 'Milan:Points',
                  srsname: 'EPSG:3857',
                  outputFormat: 'text/javascript',
                  bbox: extent.join(',') + ',EPSG:3857'
                  },
              dataType: 'jsonp',
              jsonpCallback:'callback:loadFeatures',
              jsonp:'format_options'
              });

                  },
              });

*/
               window.loadFeatures = function(response) {
              vectorSource_lines.addFeatures(geojsonFormat1.readFeatures(response));

            };



                var milanoBovisaLines = new ol.layer.Vector({
                  source: vectorSource_lines,
                    title: 'Lines',
                    name: 'Lines',
                    style: new ol.style.Style({
                    stroke: new ol.style.Stroke({ color: 'rgb(0,0,255)', width: 2
                    }) })
                });










/*        var milanoBovisaPoints = new ol.layer.Image({
  title: 'Points',
  source: new ol.source.ImageWMS({
        title: 'Points',
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS': 'Milan:Points'}, 'STYLES': 'point' })
});

*/

var osm = new ol.layer.Tile({ title: 'OpenStreetMap', type: 'base',
visible: true,
source: new ol.source.OSM() });

var bingRoads = new ol.layer.Tile({ title: 'Bing Maps—Roads',
type: 'base',
visible: false,
source: new ol.source.BingMaps({ key: 'Ao-LZ_ysaEN1dmvsePcEj6mMWTqbyBZsQvJaSzgfqmxClkNrpzzi3klQiTtx-sls',
imagerySet: 'Road'
}) });
var bingAerial = new ol.layer.Tile({ title: 'Bing Maps—Aerial',
type: 'base',
visible: false,
source: new ol.source.BingMaps({ key: 'Ao-LZ_ysaEN1dmvsePcEj6mMWTqbyBZsQvJaSzgfqmxClkNrpzzi3klQiTtx-sls',
imagerySet: 'Aerial'
}) });

var stamenWatercolor = new ol.layer.Tile({ title: 'Stamen Watercolor',
type: 'base',
visible: false,
source: new ol.source.Stamen({ layer: 'watercolor'
}) });
var stamenToner = new ol.layer.Tile({ title: 'Stamen Toner',
type: 'base',
visible: false,
source: new ol.source.Stamen({ layer: 'toner'
}) });



var bingAerialWithLabels = new ol.layer.Tile({ title: 'Bing Maps—Aerial with Labels', type: 'base',
visible: false,
source: new ol.source.BingMaps({ key: 'Ao-LZ_ysaEN1dmvsePcEj6mMWTqbyBZsQvJaSzgfqmxClkNrpzzi3klQiTtx-sls',
imagerySet: 'AerialWithLabels'
}) });




var groupLayer = new ol.layer.Group({
title: 'Layers',
layers: [milanoBovisaLines] });

var groupMaps =   new ol.layer.Group({
  title: 'Base Maps',
  layers: [stamenToner, stamenWatercolor ,bingRoads, bingAerial, bingAerialWithLabels, osm]
});

var map = new ol.Map({
    target: document.getElementById('map'),
    view: new ol.View({
        center: ol.proj.fromLonLat([9.1630, 45.50477]),
        zoom: 17 }),
        layers: [groupMaps, groupLayer ],
    controls: ol.control.defaults().extend([ new ol.control.ScaleLine(),
        new ol.control.FullScreen(),
        new ol.control.OverviewMap(),
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4), projection: 'EPSG:3857'
        })
        ])
});

var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);
