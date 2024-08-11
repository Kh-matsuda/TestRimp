var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
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
                interactive: true,
    title: '20.All_Canal(4326)<br />\
    <img src="styles/legend/20All_Canal4326_2_0.png" /> Main Canal<br />\
    <img src="styles/legend/20All_Canal4326_2_1.png" /> Secondary Canal<br />'
        });
var format_29All_NEW_Tblock_3 = new ol.format.GeoJSON();
var features_29All_NEW_Tblock_3 = format_29All_NEW_Tblock_3.readFeatures(json_29All_NEW_Tblock_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_29All_NEW_Tblock_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_29All_NEW_Tblock_3.addFeatures(features_29All_NEW_Tblock_3);
var lyr_29All_NEW_Tblock_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_29All_NEW_Tblock_3, 
                style: style_29All_NEW_Tblock_3,
                popuplayertitle: "29.All_NEW_Tblock",
                interactive: true,
    title: '29.All_NEW_Tblock<br />\
    <img src="styles/legend/29All_NEW_Tblock_3_0.png" /> Left<br />\
    <img src="styles/legend/29All_NEW_Tblock_3_1.png" /> Right<br />'
        });
var format_34All_NEW_Offtake_4 = new ol.format.GeoJSON();
var features_34All_NEW_Offtake_4 = format_34All_NEW_Offtake_4.readFeatures(json_34All_NEW_Offtake_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34All_NEW_Offtake_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34All_NEW_Offtake_4.addFeatures(features_34All_NEW_Offtake_4);
var lyr_34All_NEW_Offtake_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34All_NEW_Offtake_4, 
                style: style_34All_NEW_Offtake_4,
                popuplayertitle: "34.All_NEW_Offtake",
                interactive: true,
                title: '34.All_NEW_Offtake'
            });
var format_LTC_StationTMTCcopy_5 = new ol.format.GeoJSON();
var features_LTC_StationTMTCcopy_5 = format_LTC_StationTMTCcopy_5.readFeatures(json_LTC_StationTMTCcopy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LTC_StationTMTCcopy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LTC_StationTMTCcopy_5.addFeatures(features_LTC_StationTMTCcopy_5);
var lyr_LTC_StationTMTCcopy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LTC_StationTMTCcopy_5, 
                style: style_LTC_StationTMTCcopy_5,
                popuplayertitle: "LTC_Station (TMTC) copy",
                interactive: true,
                title: 'LTC_Station (TMTC) copy'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Upper_RentangHW_0429_1.setVisible(true);lyr_20All_Canal4326_2.setVisible(true);lyr_29All_NEW_Tblock_3.setVisible(true);lyr_34All_NEW_Offtake_4.setVisible(true);lyr_LTC_StationTMTCcopy_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Upper_RentangHW_0429_1,lyr_20All_Canal4326_2,lyr_29All_NEW_Tblock_3,lyr_34All_NEW_Offtake_4,lyr_LTC_StationTMTCcopy_5];
lyr_Upper_RentangHW_0429_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_20All_Canal4326_2.set('fieldAliases', {'Key': 'Key', 'Bank': 'Bank', 'Main_C': 'Main_C', 'Canal_name': 'Canal_name', 'Canal_type': 'Canal_type', 'length_m': 'length_m', 'Group': 'Group', 'Package': 'Package', 'Head_Str': 'Head_Str', 'Q_Div_m3_s': 'Q_Div_m3_s', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_29All_NEW_Tblock_3.set('fieldAliases', {'Key': 'Key', 'TB_name': 'TB_name', 'Canal_Name': 'Canal_Name', 'SArea_cad': 'SArea_cad', 'SArea_Ha': 'SArea_Ha', 'Str_name': 'Str_name', 'Exist_gol': 'Exist_gol', 'Prop_gol': 'Prop_gol', 'Group': 'Group', 'Package': 'Package', 'II_2_Pack': 'II_2_Pack', 'Comment': 'Comment', 'bank': 'bank', 'TO_JOIN': 'TO_JOIN', 'P3A_1': 'P3A_1', 'P3A_2': 'P3A_2', 'P3A_3': 'P3A_3', 'p3a_count': 'p3a_count', 'cont_exist': 'cont_exist', 'nam_in_con': 'nam_in_con', });
lyr_34All_NEW_Offtake_4.set('fieldAliases', {'Key': 'Key', 'Str_name': 'Str_name', 'Bank': 'Bank', 'Canal_name': 'Canal_name', 'X': 'X', 'Y': 'Y', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Group': 'Group', 'Package': 'Package', 'II_2_Pack': 'II_2_Pack', 'NOTE': 'NOTE', 'Prev_nam': 'Prev_nam', 'inv_r': 'inv_r', 'aftr_con': 'aftr_con', 'Source': 'Source', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_LTC_StationTMTCcopy_5.set('fieldAliases', {'Canal': 'Canal', 'Station_Na': 'Station_Na', 'Structure': 'Structure', 'Gauging_St': 'Gauging_St', 'Controllin': 'Controllin', 'Measuring': 'Measuring', 'Label': 'Label', 'Direction': 'Direction', 'Label2': 'Label2', 'Label_Func': 'Label_Func', 'TM_HW.': 'TM_HW.', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Upper_RentangHW_0429_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_20All_Canal4326_2.set('fieldImages', {'Key': 'TextEdit', 'Bank': 'TextEdit', 'Main_C': 'TextEdit', 'Canal_name': 'TextEdit', 'Canal_type': 'TextEdit', 'length_m': 'TextEdit', 'Group': 'TextEdit', 'Package': 'TextEdit', 'Head_Str': 'TextEdit', 'Q_Div_m3_s': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_29All_NEW_Tblock_3.set('fieldImages', {'Key': '', 'TB_name': '', 'Canal_Name': '', 'SArea_cad': '', 'SArea_Ha': '', 'Str_name': '', 'Exist_gol': '', 'Prop_gol': '', 'Group': '', 'Package': '', 'II_2_Pack': '', 'Comment': '', 'bank': '', 'TO_JOIN': '', 'P3A_1': '', 'P3A_2': '', 'P3A_3': '', 'p3a_count': '', 'cont_exist': '', 'nam_in_con': '', });
lyr_34All_NEW_Offtake_4.set('fieldImages', {'Key': 'TextEdit', 'Str_name': 'TextEdit', 'Bank': 'TextEdit', 'Canal_name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Group': 'TextEdit', 'Package': 'TextEdit', 'II_2_Pack': 'TextEdit', 'NOTE': 'TextEdit', 'Prev_nam': 'TextEdit', 'inv_r': 'TextEdit', 'aftr_con': 'TextEdit', 'Source': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_LTC_StationTMTCcopy_5.set('fieldImages', {'Canal': 'TextEdit', 'Station_Na': 'TextEdit', 'Structure': 'TextEdit', 'Gauging_St': 'TextEdit', 'Controllin': 'TextEdit', 'Measuring': 'TextEdit', 'Label': 'TextEdit', 'Direction': 'TextEdit', 'Label2': 'TextEdit', 'Label_Func': 'TextEdit', 'TM_HW.': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Upper_RentangHW_0429_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_20All_Canal4326_2.set('fieldLabels', {'Key': 'hidden field', 'Bank': 'hidden field', 'Main_C': 'hidden field', 'Canal_name': 'no label', 'Canal_type': 'hidden field', 'length_m': 'hidden field', 'Group': 'hidden field', 'Package': 'hidden field', 'Head_Str': 'hidden field', 'Q_Div_m3_s': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_29All_NEW_Tblock_3.set('fieldLabels', {'Key': 'hidden field', 'TB_name': 'no label', 'Canal_Name': 'hidden field', 'SArea_cad': 'hidden field', 'SArea_Ha': 'no label', 'Str_name': 'hidden field', 'Exist_gol': 'hidden field', 'Prop_gol': 'hidden field', 'Group': 'hidden field', 'Package': 'hidden field', 'II_2_Pack': 'hidden field', 'Comment': 'hidden field', 'bank': 'hidden field', 'TO_JOIN': 'hidden field', 'P3A_1': 'hidden field', 'P3A_2': 'hidden field', 'P3A_3': 'hidden field', 'p3a_count': 'hidden field', 'cont_exist': 'hidden field', 'nam_in_con': 'hidden field', });
lyr_34All_NEW_Offtake_4.set('fieldLabels', {'Key': 'hidden field', 'Str_name': 'header label - visible with data', 'Bank': 'hidden field', 'Canal_name': 'no label', 'X': 'hidden field', 'Y': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Group': 'hidden field', 'Package': 'hidden field', 'II_2_Pack': 'hidden field', 'NOTE': 'hidden field', 'Prev_nam': 'hidden field', 'inv_r': 'hidden field', 'aftr_con': 'hidden field', 'Source': 'hidden field', });
lyr_LTC_StationTMTCcopy_5.set('fieldLabels', {'Canal': 'hidden field', 'Station_Na': 'header label - always visible', 'Structure': 'no label', 'Gauging_St': 'hidden field', 'Controllin': 'hidden field', 'Measuring': 'hidden field', 'Label': 'hidden field', 'Direction': 'hidden field', 'Label2': 'inline label - always visible', 'Label_Func': 'no label', 'TM_HW.': 'hidden field', });
lyr_LTC_StationTMTCcopy_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});