var osm = new ol.layer.Tile({ visible: true,
    source: new ol.source.OSM()
});
var ecuadorBoundary = new ol.layer.Image({ source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS': 'Example:ECU_adm0', 'STYLES': 'polygon'} })
});
var map = new ol.Map({
    target: document.getElementById('map'), view: new ol.View({
        center: ol.proj.fromLonLat([-84, -2]),
        zoom: 6 }),
    controls: ol.control.defaults().extend([ new ol.control.ScaleLine(),
        new ol.control.FullScreen(),
        new ol.control.OverviewMap(),
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4), projection: 'EPSG:4326'
        })
        ])
});
map.addLayer(osm); map.addLayer(ecuadorBoundary);