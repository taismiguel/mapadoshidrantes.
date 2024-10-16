ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([365272.223126, 6433315.705849, 412960.295493, 6463804.178867]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_hidrantes__1 = new ol.format.GeoJSON();
var features_hidrantes__1 = format_hidrantes__1.readFeatures(json_hidrantes__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_hidrantes__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrantes__1.addFeatures(features_hidrantes__1);
var lyr_hidrantes__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrantes__1, 
                style: style_hidrantes__1,
                popuplayertitle: "hidrantes_",
                interactive: true,
                title: '<img src="styles/legend/hidrantes__1.png" /> hidrantes_'
            });

lyr_OSMStandard_0.setVisible(true);lyr_hidrantes__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_hidrantes__1];
lyr_hidrantes__1.set('fieldAliases', {'ENDEREÇO': 'ENDEREÇO', 'LONG': 'LONG', 'LAT': 'LAT', 'TIPO': 'TIPO', 'FUNCIONAME': 'FUNCIONAME', 'UTIL PARA': 'UTIL PARA', 'CHAVE DE A': 'CHAVE DE A', });
lyr_hidrantes__1.set('fieldImages', {'ENDEREÇO': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'TIPO': 'TextEdit', 'FUNCIONAME': 'TextEdit', 'UTIL PARA': 'TextEdit', 'CHAVE DE A': 'TextEdit', });
lyr_hidrantes__1.set('fieldLabels', {'ENDEREÇO': 'no label', 'LONG': 'hidden field', 'LAT': 'hidden field', 'TIPO': 'no label', 'FUNCIONAME': 'no label', 'UTIL PARA': 'no label', 'CHAVE DE A': 'no label', });
lyr_hidrantes__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});