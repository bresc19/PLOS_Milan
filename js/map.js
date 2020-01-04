var vectorSource = new ol.source.Vector({
loader: function(extent, resolution, projection) {
var url = 'http://localhost:8080/geoserver/Milan/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Milan%3ALines&maxFeatures=50&outputFormat=text%2Fjavascript';
$.ajax({
  url: url, dataType: 'jsonp',
  jsonpCallback: "parseResponse"
    }); }
});

var geojsonFormat = new ol.format.GeoJSON(); function loadFeatures(response) {
vectorSource.addFeatures(geojsonFormat.readFeatures(response)); }

var aaa = new ol.layer.Vector({ title: 'Linesss',
source: vectorSource,
style: new ol.style.Style({
stroke: new ol.style.Stroke({ color: 'rgb(58, 255, 81)', width: 4
}) })
});




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



var milanoBovisaPoint = new ol.layer.Image({
  title: 'Points',
  source: new ol.source.ImageWMS({
        title: 'Points',
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS': 'Milan:Points'}, 'STYLES': 'point' })
});


var milanoBovisaLines = new ol.layer.Image({
  title: 'Lines',
  source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS': 'Milan:Lines', 'STYLES': 'line'}
    })
});




var groupLayer = new ol.layer.Group({
title: 'Layers',
layers: [aaa, milanoBovisaPoint] });

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
            coordinateFormat: ol.coordinate.createStringXY(4), projection: 'EPSG:32632'
        })
        ])
});

var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);
