var osm = new ol.layer.Tile({ visible: true,
    source: new ol.source.OSM()
});

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

var milanoBovisa = new ol.layer.Image({ source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS': 'Example:ECU_adm0', 'STYLES': 'polygon'} })
});


var map = new ol.Map({
    target: document.getElementById('map'), view: new ol.View({
        center: ol.proj.fromLonLat([9.1630, 45.505]),
        zoom: 16.5 }),
    controls: ol.control.defaults().extend([ new ol.control.ScaleLine(),
        new ol.control.FullScreen(),
        new ol.control.OverviewMap(),
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4), projection: 'EPSG:4326'
        })
        ])
});



map.addLayer(osm);
map.addLayer(milanoBovisa);
