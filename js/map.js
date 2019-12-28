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
layers: [milanoBovisaLines, milanoBovisaPoint] });

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

var elementPopup = document.getElementById('popup');


var popup = new ol.Overlay({ element: elementPopup
}); map.addOverlay(popup);

map.on('click', function(event) {
  var feature = map.forEachFeatureAtPixel(event.pixel, function(feature, layer) {
                                    return feature;
                                  });
  if (feature != null) {
    var pixel = event.pixel;
    var coord = map.getCoordinateFromPixel(pixel);
    popup.setPosition(coord);
    $(elementPopup).attr('title', 'Ecuador railways');
    $(elementPopup).attr('data-content', '<b>Id: </b>' + feature.get('FID_rail_d') + '</br><b>Description: </b>' + feature.get('F_CODE_DES'));
    $(elementPopup).popover({'placement': 'top', 'html': true});
    $(elementPopup).popover('show');
  }

});

map.on('pointermove', function(event) { if (event.dragging) {
$(elementPopup).popover('destroy');
return; }
var pixel = map.getEventPixel(event.originalEvent); var hit = map.hasFeatureAtPixel(pixel); map.getTarget().style.cursor = hit ? 'pointer' : '';
});
