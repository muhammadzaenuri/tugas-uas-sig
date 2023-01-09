var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0 = new ol.format.GeoJSON();
var features_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0 = format_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0.readFeatures(json_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0.addFeatures(features_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0);var lyr_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0, 
                style: style_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0,
    title: 'SIG3 [LapakGIS.com] Batas_Kecamatan_BIG_PPBW Polygon25D<br />\
    <img src="styles/legend/SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0_0.png" /> rendah<br />\
    <img src="styles/legend/SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0_1.png" /> sedang<br />\
    <img src="styles/legend/SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0_2.png" /> tinggi<br />\
    <img src="styles/legend/SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0_3.png" /> sangat tinggi<br />'
        });

lyr_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0.setVisible(true);
var layersList = [baseLayer,lyr_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0];
lyr_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0.set('fieldAliases', {'kecamatan': 'kecamatan', 'kota': 'kota', 'katolik2020': 'katolik2020', 'katolik2021': 'katolik2021', });
lyr_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0.set('fieldImages', {'kecamatan': 'TextEdit', 'kota': 'TextEdit', 'katolik2020': 'TextEdit', 'katolik2021': 'TextEdit', });
lyr_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0.set('fieldLabels', {'kecamatan': 'inline label', 'kota': 'inline label', 'katolik2020': 'inline label', 'katolik2021': 'inline label', });
lyr_SIG3LapakGIScomBatas_Kecamatan_BIG_PPBWPolygon25D_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});