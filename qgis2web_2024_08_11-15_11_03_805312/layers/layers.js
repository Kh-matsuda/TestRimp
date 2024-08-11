var wms_layers = [];

var lyr_RIMP_ProjectAreaUpstreamNorth_240530_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "RIMP_ProjectArea+Upstream+North_240530",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RIMP_ProjectAreaUpstreamNorth_240530_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11967373.182248, -822280.235574, 12129669.812812, -678966.355699]
                            })
                        });
var format_Upper_RentangHW_0429_1 = new ol.format.GeoJSON();
var features_Upper_RentangHW_0429_1 = format_Upper_RentangHW_0429_1.readFeatures(json_Upper_RentangHW_0429_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Upper_RentangHW_0429_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Upper_RentangHW_0429_1.addFeatures(features_Upper_RentangHW_0429_1);
var lyr_Upper_RentangHW_0429_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Upper_RentangHW_0429_1, 
                style: style_Upper_RentangHW_0429_1,
                popuplayertitle: "Upper_RentangHW_0429",
                interactive: false,
                title: '<img src="styles/legend/Upper_RentangHW_0429_1.png" /> Upper_RentangHW_0429'
            });
var format_20All_Canal4326_2 = new ol.format.GeoJSON();
var features_20All_Canal4326_2 = format_20All_Canal4326_2.readFeatures(json_20All_Canal4326_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20All_Canal4326_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20All_Canal4326_2.addFeatures(features_20All_Canal4326_2);
var lyr_20All_Canal4326_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20All_Canal4326_2, 
                style: style_20All_Canal4326_2,
                popuplayertitle: "20.All_Canal(4326)",
                interactive: false,
    title: '20.All_Canal(4326)<br />\
    <img src="styles/legend/20All_Canal4326_2_0.png" /> Main Canal<br />\
    <img src="styles/legend/20All_Canal4326_2_1.png" /> Secondary Canal<br />'
        });
var format_LTC_StationTMTCcopy_3 = new ol.format.GeoJSON();
var features_LTC_StationTMTCcopy_3 = format_LTC_StationTMTCcopy_3.readFeatures(json_LTC_StationTMTCcopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LTC_StationTMTCcopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LTC_StationTMTCcopy_3.addFeatures(features_LTC_StationTMTCcopy_3);
var lyr_LTC_StationTMTCcopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LTC_StationTMTCcopy_3, 
                style: style_LTC_StationTMTCcopy_3,
                popuplayertitle: "LTC_Station (TMTC) copy",
                interactive: true,
                title: 'LTC_Station (TMTC) copy'
            });

lyr_RIMP_ProjectAreaUpstreamNorth_240530_0.setVisible(true);lyr_Upper_RentangHW_0429_1.setVisible(true);lyr_20All_Canal4326_2.setVisible(true);lyr_LTC_StationTMTCcopy_3.setVisible(true);
var layersList = [lyr_RIMP_ProjectAreaUpstreamNorth_240530_0,lyr_Upper_RentangHW_0429_1,lyr_20All_Canal4326_2,lyr_LTC_StationTMTCcopy_3];
lyr_Upper_RentangHW_0429_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_20All_Canal4326_2.set('fieldAliases', {'Key': 'Key', 'Bank': 'Bank', 'Main_C': 'Main_C', 'Canal_name': 'Canal_name', 'Canal_type': 'Canal_type', 'length_m': 'length_m', 'Group': 'Group', 'Package': 'Package', 'Head_Str': 'Head_Str', 'Q_Div_m3_s': 'Q_Div_m3_s', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_LTC_StationTMTCcopy_3.set('fieldAliases', {'Canal': 'Canal', 'Station_Na': 'Station_Na', 'Structure': 'Structure', 'Gauging_St': 'Gauging_St', 'Controllin': 'Controllin', 'Measuring': 'Measuring', 'Label': 'Label', 'Direction': 'Direction', 'Label2': 'Label2', 'Label_Func': 'Label_Func', 'TM_HW.': 'TM_HW.', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Upper_RentangHW_0429_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_20All_Canal4326_2.set('fieldImages', {'Key': 'TextEdit', 'Bank': 'TextEdit', 'Main_C': 'TextEdit', 'Canal_name': 'TextEdit', 'Canal_type': 'TextEdit', 'length_m': 'TextEdit', 'Group': 'TextEdit', 'Package': 'TextEdit', 'Head_Str': 'TextEdit', 'Q_Div_m3_s': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_LTC_StationTMTCcopy_3.set('fieldImages', {'Canal': 'TextEdit', 'Station_Na': 'TextEdit', 'Structure': 'TextEdit', 'Gauging_St': 'TextEdit', 'Controllin': 'TextEdit', 'Measuring': 'TextEdit', 'Label': 'TextEdit', 'Direction': 'TextEdit', 'Label2': 'TextEdit', 'Label_Func': 'TextEdit', 'TM_HW.': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Upper_RentangHW_0429_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_20All_Canal4326_2.set('fieldLabels', {'Key': 'no label', 'Bank': 'no label', 'Main_C': 'no label', 'Canal_name': 'no label', 'Canal_type': 'no label', 'length_m': 'no label', 'Group': 'no label', 'Package': 'no label', 'Head_Str': 'no label', 'Q_Div_m3_s': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_LTC_StationTMTCcopy_3.set('fieldLabels', {'Canal': 'no label', 'Station_Na': 'inline label - always visible', 'Structure': 'no label', 'Gauging_St': 'no label', 'Controllin': 'no label', 'Measuring': 'no label', 'Label': 'no label', 'Direction': 'no label', 'Label2': 'no label', 'Label_Func': 'no label', 'TM_HW.': 'no label', });
lyr_LTC_StationTMTCcopy_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});