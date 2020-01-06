

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
                    stroke: new ol.style.Stroke({ color: ' #00FF00 ', width: 8
                    }) })
                });










       var milanoBovisaPoints = new ol.layer.Image({
  title: 'Points',
  source: new ol.source.ImageWMS({
        title: 'Points',
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS': 'Milan:Points'}, 'STYLES': 'point' })
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




var groupLayer = new ol.layer.Group({
title: 'Layers',
layers: [milanoBovisaLines, milanoBovisaPoints] });

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
var elementPopup = document.getElementById('popup');
var popup = new ol.Overlay({ element: elementPopup
}); map.addOverlay(popup);



map.on('click', function(event) {
var feature = map.forEachFeatureAtPixel(event.pixel, function(feature, layer) {
return feature; });
if (feature != null) {
var pixel = event.pixel;
var coord = map.getCoordinateFromPixel(pixel);
popup.setPosition(coord);
$(elementPopup).attr('title', 'Values of the PLOSs'); $(elementPopup).attr('data-content','</br><b>EPLOS: </b>' + feature.get('EPLOS')); $(elementPopup).popover({'placement': 'top', 'html': true}); $(elementPopup).popover('show');
}

});




map.on('pointermove', function(event) { if (event.dragging) {
$(elementPopup).popover('destroy');
return; }
var pixel = map.getEventPixel(event.originalEvent); var hit = map.hasFeatureAtPixel(pixel); map.getTarget().style.cursor = hit ? 'pointer' : '';
});

map.on('click', function(event) { document.getElementById('get-feature-info').innerHTML = '';
var viewResolution = (map.getView().getResolution());
var url = milanoBovisaPoints.getSource().getFeatureInfoUrl(event.coordinate, viewResolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
if (url)
document.getElementById('get-feature-info').innerHTML = '<iframe seamless src="' + url + '"></iframe>';
});
