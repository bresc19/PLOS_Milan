var osm = new ol.layer.Tile({ title: 'OpenStreetMap', type: 'base',
visible: true,
source: new ol.source.OSM() });

var bingRoads = new ol.layer.Tile({ title: 'Bing Maps—Roads',
type: 'base',
visible: false,
source: new ol.source.BingMaps({ key: 'X',
imagerySet: 'Road'
}) });
var bingAerial = new ol.layer.Tile({ title: 'Bing Maps—Aerial',
type: 'base',
visible: false,
source: new ol.source.BingMaps({ key: 'X',
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



var milanoBovisaPoint = new ol.layer.Image({ source: new ol.source.ImageWMS({
        title: 'Points',
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS': 'Milan:point1', 'STYLES': 'point'} })
});


var milanoBovisaLines = new ol.layer.Image({ source: new ol.source.ImageWMS({
        title: 'Lines',
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS': 'Milan:roadlinks_1_blue', 'STYLES': 'polygon'}
    })
});




var map = new ol.Map({
    target: document.getElementById('map'),
    view: new ol.View({
        center: ol.proj.fromLonLat([9.1630, 45.50477]),
        zoom: 17 }),
        layers: [
      new ol.layer.Group({
      title: 'Base Maps',
      layers: [stamenToner, stamenWatercolor, bingAerialWithLabels, osm]
      }),
      new ol.layer.Group({
      title: 'Layers',
      layers: [milanoBovisaLines, milanoBovisaPoint] })
    ],
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
