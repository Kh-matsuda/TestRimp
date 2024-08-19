var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Update24081929all_new_tblock_1 = new ol.format.GeoJSON();
var features_Update24081929all_new_tblock_1 = format_Update24081929all_new_tblock_1.readFeatures(json_Update24081929all_new_tblock_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update24081929all_new_tblock_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update24081929all_new_tblock_1.addFeatures(features_Update24081929all_new_tblock_1);
var lyr_Update24081929all_new_tblock_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update24081929all_new_tblock_1, 
                style: style_Update24081929all_new_tblock_1,
                popuplayertitle: "Update240819 — 29all_new_tblock",
                interactive: true,
                title: '<img src="styles/legend/Update24081929all_new_tblock_1.png" /> Update240819 — 29all_new_tblock'
            });
var format_Update240819update240819__Tblock_onlyABD_2 = new ol.format.GeoJSON();
var features_Update240819update240819__Tblock_onlyABD_2 = format_Update240819update240819__Tblock_onlyABD_2.readFeatures(json_Update240819update240819__Tblock_onlyABD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update240819update240819__Tblock_onlyABD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update240819update240819__Tblock_onlyABD_2.addFeatures(features_Update240819update240819__Tblock_onlyABD_2);
var lyr_Update240819update240819__Tblock_onlyABD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update240819update240819__Tblock_onlyABD_2, 
                style: style_Update240819update240819__Tblock_onlyABD_2,
                popuplayertitle: "Update240819 — update240819__Tblock_onlyABD",
                interactive: true,
                title: '<img src="styles/legend/Update240819update240819__Tblock_onlyABD_2.png" /> Update240819 — update240819__Tblock_onlyABD'
            });
var format_Update240819update240819__Tblock_onlySHP_3 = new ol.format.GeoJSON();
var features_Update240819update240819__Tblock_onlySHP_3 = format_Update240819update240819__Tblock_onlySHP_3.readFeatures(json_Update240819update240819__Tblock_onlySHP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update240819update240819__Tblock_onlySHP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update240819update240819__Tblock_onlySHP_3.addFeatures(features_Update240819update240819__Tblock_onlySHP_3);
var lyr_Update240819update240819__Tblock_onlySHP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update240819update240819__Tblock_onlySHP_3, 
                style: style_Update240819update240819__Tblock_onlySHP_3,
                popuplayertitle: "Update240819 — update240819__Tblock_onlySHP",
                interactive: true,
                title: '<img src="styles/legend/Update240819update240819__Tblock_onlySHP_3.png" /> Update240819 — update240819__Tblock_onlySHP'
            });
var format_Update240819testplandischarge_4 = new ol.format.GeoJSON();
var features_Update240819testplandischarge_4 = format_Update240819testplandischarge_4.readFeatures(json_Update240819testplandischarge_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update240819testplandischarge_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update240819testplandischarge_4.addFeatures(features_Update240819testplandischarge_4);
var lyr_Update240819testplandischarge_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update240819testplandischarge_4, 
                style: style_Update240819testplandischarge_4,
                popuplayertitle: "Update240819 — testplandischarge",
                interactive: true,
                title: '<img src="styles/legend/Update240819testplandischarge_4.png" /> Update240819 — testplandischarge'
            });
var format_Update24081920all_canal_5 = new ol.format.GeoJSON();
var features_Update24081920all_canal_5 = format_Update24081920all_canal_5.readFeatures(json_Update24081920all_canal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update24081920all_canal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update24081920all_canal_5.addFeatures(features_Update24081920all_canal_5);
var lyr_Update24081920all_canal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update24081920all_canal_5, 
                style: style_Update24081920all_canal_5,
                popuplayertitle: "Update240819 — 20all_canal",
                interactive: false,
                title: '<img src="styles/legend/Update24081920all_canal_5.png" /> Update240819 — 20all_canal'
            });
var format_Update24081934all_new_offtake_6 = new ol.format.GeoJSON();
var features_Update24081934all_new_offtake_6 = format_Update24081934all_new_offtake_6.readFeatures(json_Update24081934all_new_offtake_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update24081934all_new_offtake_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update24081934all_new_offtake_6.addFeatures(features_Update24081934all_new_offtake_6);
var lyr_Update24081934all_new_offtake_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update24081934all_new_offtake_6, 
                style: style_Update24081934all_new_offtake_6,
                popuplayertitle: "Update240819 — 34all_new_offtake",
                interactive: true,
                title: '<img src="styles/legend/Update24081934all_new_offtake_6.png" /> Update240819 — 34all_new_offtake'
            });
var format_Update240819update240819__34all_new_offtake_CheckGate_7 = new ol.format.GeoJSON();
var features_Update240819update240819__34all_new_offtake_CheckGate_7 = format_Update240819update240819__34all_new_offtake_CheckGate_7.readFeatures(json_Update240819update240819__34all_new_offtake_CheckGate_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update240819update240819__34all_new_offtake_CheckGate_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update240819update240819__34all_new_offtake_CheckGate_7.addFeatures(features_Update240819update240819__34all_new_offtake_CheckGate_7);
var lyr_Update240819update240819__34all_new_offtake_CheckGate_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update240819update240819__34all_new_offtake_CheckGate_7, 
                style: style_Update240819update240819__34all_new_offtake_CheckGate_7,
                popuplayertitle: "Update240819 — update240819__34all_new_offtake_CheckGate",
                interactive: true,
                title: '<img src="styles/legend/Update240819update240819__34all_new_offtake_CheckGate_7.png" /> Update240819 — update240819__34all_new_offtake_CheckGate'
            });
var format_Update240819arrow_pointtopolygon_8 = new ol.format.GeoJSON();
var features_Update240819arrow_pointtopolygon_8 = format_Update240819arrow_pointtopolygon_8.readFeatures(json_Update240819arrow_pointtopolygon_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update240819arrow_pointtopolygon_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update240819arrow_pointtopolygon_8.addFeatures(features_Update240819arrow_pointtopolygon_8);
var lyr_Update240819arrow_pointtopolygon_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update240819arrow_pointtopolygon_8, 
                style: style_Update240819arrow_pointtopolygon_8,
                popuplayertitle: "Update240819 — arrow_pointtopolygon",
                interactive: false,
                title: '<img src="styles/legend/Update240819arrow_pointtopolygon_8.png" /> Update240819 — arrow_pointtopolygon'
            });
var group_Geopackage240819 = new ol.layer.Group({
                                layers: [lyr_Update24081929all_new_tblock_1,lyr_Update240819update240819__Tblock_onlyABD_2,lyr_Update240819update240819__Tblock_onlySHP_3,lyr_Update240819testplandischarge_4,lyr_Update24081920all_canal_5,lyr_Update24081934all_new_offtake_6,lyr_Update240819update240819__34all_new_offtake_CheckGate_7,lyr_Update240819arrow_pointtopolygon_8,],
                                fold: "open",
                                title: "Geopackage240819"});

lyr_GoogleSatelite_0.setVisible(true);lyr_Update24081929all_new_tblock_1.setVisible(true);lyr_Update240819update240819__Tblock_onlyABD_2.setVisible(true);lyr_Update240819update240819__Tblock_onlySHP_3.setVisible(true);lyr_Update240819testplandischarge_4.setVisible(true);lyr_Update24081920all_canal_5.setVisible(false);lyr_Update24081934all_new_offtake_6.setVisible(true);lyr_Update240819update240819__34all_new_offtake_CheckGate_7.setVisible(true);lyr_Update240819arrow_pointtopolygon_8.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,group_Geopackage240819];
lyr_Update24081929all_new_tblock_1.set('fieldAliases', {'fid': 'fid', 'Key': 'Key', 'TB_name': 'TB_name', 'Canal_Name': 'Canal_Name', 'SArea_cad': 'SArea_cad', 'SArea_Ha': 'SArea_Ha', 'Str_name': 'Str_name', 'Exist_gol': 'Exist_gol', 'Prop_gol': 'Prop_gol', 'Group': 'Group', 'Package': 'Package', 'II_2_Pack': 'II_2_Pack', 'Comment': 'Comment', 'bank': 'bank', 'cont_exist': 'cont_exist', 'nam_in_con': 'nam_in_con', 'nam_Asbuit': 'nam_Asbuit', 'NOTEforNAM': 'NOTEforNAM', 'note': 'note', 'Offtak_key': 'Offtak_key', });
lyr_Update240819update240819__Tblock_onlyABD_2.set('fieldAliases', {'fid': 'fid', 'Key': 'Key', 'TB_name': 'TB_name', 'Canal_Name': 'Canal_Name', 'SArea_cad': 'SArea_cad', 'SArea_Ha': 'SArea_Ha', 'Str_name': 'Str_name', 'Exist_gol': 'Exist_gol', 'Prop_gol': 'Prop_gol', 'Group': 'Group', 'Package': 'Package', 'II_2_Pack': 'II_2_Pack', 'Comment': 'Comment', 'bank': 'bank', 'cont_exist': 'cont_exist', 'nam_in_con': 'nam_in_con', 'nam_Asbuit': 'nam_Asbuit', 'NOTEforNAM': 'NOTEforNAM', 'note': 'note', 'Offtak_key': 'Offtak_key', });
lyr_Update240819update240819__Tblock_onlySHP_3.set('fieldAliases', {'fid': 'fid', 'Key': 'Key', 'TB_name': 'TB_name', 'Canal_Name': 'Canal_Name', 'SArea_cad': 'SArea_cad', 'SArea_Ha': 'SArea_Ha', 'Str_name': 'Str_name', 'Exist_gol': 'Exist_gol', 'Prop_gol': 'Prop_gol', 'Group': 'Group', 'Package': 'Package', 'II_2_Pack': 'II_2_Pack', 'Comment': 'Comment', 'bank': 'bank', 'cont_exist': 'cont_exist', 'nam_in_con': 'nam_in_con', 'nam_Asbuit': 'nam_Asbuit', 'NOTEforNAM': 'NOTEforNAM', 'note': 'note', 'Offtak_key': 'Offtak_key', });
lyr_Update240819testplandischarge_4.set('fieldAliases', {'fid': 'fid', 'Canal_name': 'Canal_name', 'Area(ha)': 'Area(ha)', 'Nov_1-5': 'Nov_1-5', 'Nov_6-10': 'Nov_6-10', 'Nov_11-15': 'Nov_11-15', 'Nov_16-20': 'Nov_16-20', 'Nov_21-25': 'Nov_21-25', 'Nov_26-30': 'Nov_26-30', 'Dec_1-5': 'Dec_1-5', 'Dec_6-10': 'Dec_6-10', 'Dec_11-15': 'Dec_11-15', 'Dec_16-20': 'Dec_16-20', 'Dec_21-25': 'Dec_21-25', 'Dec_26-31': 'Dec_26-31', 'Jan_1-5': 'Jan_1-5', 'Jan_6-10': 'Jan_6-10', 'Jan_11-15': 'Jan_11-15', 'Jan_16-20': 'Jan_16-20', 'Jan_21-25': 'Jan_21-25', 'Jan_26-31': 'Jan_26-31', 'Feb_1-5': 'Feb_1-5', 'Feb_6-10': 'Feb_6-10', 'Feb_11-15': 'Feb_11-15', 'Feb_16-20': 'Feb_16-20', 'Feb_21-25': 'Feb_21-25', 'Feb_26-28': 'Feb_26-28', 'Mar_1-5': 'Mar_1-5', 'Mar_6-10': 'Mar_6-10', 'Mar_11-15': 'Mar_11-15', 'Mar_16-20': 'Mar_16-20', 'Mar_21-25': 'Mar_21-25', 'Mar_26-31': 'Mar_26-31', 'Apr_1-5': 'Apr_1-5', 'Apr_6-10': 'Apr_6-10', 'Apr_11-15': 'Apr_11-15', 'Apr_16-20': 'Apr_16-20', 'Apr_21-25': 'Apr_21-25', 'Apr_26-30': 'Apr_26-30', 'May_1-5': 'May_1-5', 'May_6-10': 'May_6-10', 'May_11-15': 'May_11-15', 'May_16-20': 'May_16-20', 'May_21-25': 'May_21-25', 'May_26-31': 'May_26-31', 'Jun_1-5': 'Jun_1-5', 'Jun_6-10': 'Jun_6-10', 'Jun_11-15': 'Jun_11-15', 'Jun_16-20': 'Jun_16-20', 'Jun_21-25': 'Jun_21-25', 'Jun_26-30': 'Jun_26-30', 'Jul_1-5': 'Jul_1-5', 'Jul_6-10': 'Jul_6-10', 'Jul_11-15': 'Jul_11-15', 'Jul_16-20': 'Jul_16-20', 'Jul_21-25': 'Jul_21-25', 'Jul_25-31': 'Jul_25-31', 'Aug_1-5': 'Aug_1-5', 'Aug_6-10': 'Aug_6-10', 'Aug_11-15': 'Aug_11-15', 'Aug_16-20': 'Aug_16-20', 'Aug_21-25': 'Aug_21-25', 'Aug_26-31': 'Aug_26-31', 'Sep_1-5': 'Sep_1-5', 'Sep_6-10': 'Sep_6-10', 'Sep_11-15': 'Sep_11-15', 'Sep_16-20': 'Sep_16-20', 'Sep_21-25': 'Sep_21-25', 'Sep_26-30': 'Sep_26-30', 'Oct_1-5': 'Oct_1-5', 'Oct_6-10': 'Oct_6-10', 'Oct_11-15': 'Oct_11-15', 'Oct_16-20': 'Oct_16-20', 'Oct_21-25': 'Oct_21-25', 'Oct_26-31': 'Oct_26-31', });
lyr_Update24081920all_canal_5.set('fieldAliases', {'fid': 'fid', 'Key': 'Key', 'Bank': 'Bank', 'Canal_name': 'Canal_name', 'Canal_type': 'Canal_type', 'length_m': 'length_m', 'Group': 'Group', 'Package': 'Package', 'Head_Str': 'Head_Str', 'Q_Div_m3_s': 'Q_Div_m3_s', 'Head_Canal': 'Head_Canal', });
lyr_Update24081934all_new_offtake_6.set('fieldAliases', {'fid': 'fid', 'Key': 'Key', 'Str_name': 'Str_name', 'Bank': 'Bank', 'Canal_name': 'Canal_name', 'X': 'X', 'Y': 'Y', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Group': 'Group', 'Package': 'Package', 'II_2_Pack': 'II_2_Pack', 'NOTE': 'NOTE', 'Prev_nam': 'Prev_nam', 'inv_r': 'inv_r', 'aftr_con': 'aftr_con', 'Source': 'Source', 'check_gate': 'check_gate', });
lyr_Update240819update240819__34all_new_offtake_CheckGate_7.set('fieldAliases', {'fid': 'fid', 'Key': 'Key', 'Str_name': 'Str_name', 'Bank': 'Bank', 'Canal_name': 'Canal_name', 'X': 'X', 'Y': 'Y', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Group': 'Group', 'Package': 'Package', 'II_2_Pack': 'II_2_Pack', 'NOTE': 'NOTE', 'Prev_nam': 'Prev_nam', 'inv_r': 'inv_r', 'aftr_con': 'aftr_con', 'Source': 'Source', 'check_gate': 'check_gate', });
lyr_Update240819arrow_pointtopolygon_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Key': 'Key', });
lyr_Update24081929all_new_tblock_1.set('fieldImages', {'fid': '', 'Key': '', 'TB_name': '', 'Canal_Name': '', 'SArea_cad': '', 'SArea_Ha': '', 'Str_name': '', 'Exist_gol': '', 'Prop_gol': '', 'Group': '', 'Package': '', 'II_2_Pack': '', 'Comment': '', 'bank': '', 'cont_exist': '', 'nam_in_con': '', 'nam_Asbuit': '', 'NOTEforNAM': '', 'note': '', 'Offtak_key': '', });
lyr_Update240819update240819__Tblock_onlyABD_2.set('fieldImages', {'fid': '', 'Key': '', 'TB_name': '', 'Canal_Name': '', 'SArea_cad': '', 'SArea_Ha': '', 'Str_name': '', 'Exist_gol': '', 'Prop_gol': '', 'Group': '', 'Package': '', 'II_2_Pack': '', 'Comment': '', 'bank': '', 'cont_exist': '', 'nam_in_con': '', 'nam_Asbuit': '', 'NOTEforNAM': '', 'note': '', 'Offtak_key': '', });
lyr_Update240819update240819__Tblock_onlySHP_3.set('fieldImages', {'fid': '', 'Key': '', 'TB_name': '', 'Canal_Name': '', 'SArea_cad': '', 'SArea_Ha': '', 'Str_name': '', 'Exist_gol': '', 'Prop_gol': '', 'Group': '', 'Package': '', 'II_2_Pack': '', 'Comment': '', 'bank': '', 'cont_exist': '', 'nam_in_con': '', 'nam_Asbuit': '', 'NOTEforNAM': '', 'note': '', 'Offtak_key': '', });
lyr_Update240819testplandischarge_4.set('fieldImages', {'fid': '', 'Canal_name': 'TextEdit', 'Area(ha)': '', 'Nov_1-5': '', 'Nov_6-10': '', 'Nov_11-15': '', 'Nov_16-20': '', 'Nov_21-25': '', 'Nov_26-30': '', 'Dec_1-5': '', 'Dec_6-10': '', 'Dec_11-15': '', 'Dec_16-20': '', 'Dec_21-25': '', 'Dec_26-31': '', 'Jan_1-5': '', 'Jan_6-10': '', 'Jan_11-15': '', 'Jan_16-20': '', 'Jan_21-25': '', 'Jan_26-31': '', 'Feb_1-5': '', 'Feb_6-10': '', 'Feb_11-15': '', 'Feb_16-20': '', 'Feb_21-25': '', 'Feb_26-28': '', 'Mar_1-5': '', 'Mar_6-10': '', 'Mar_11-15': '', 'Mar_16-20': '', 'Mar_21-25': '', 'Mar_26-31': '', 'Apr_1-5': '', 'Apr_6-10': '', 'Apr_11-15': '', 'Apr_16-20': '', 'Apr_21-25': '', 'Apr_26-30': '', 'May_1-5': '', 'May_6-10': '', 'May_11-15': '', 'May_16-20': '', 'May_21-25': '', 'May_26-31': '', 'Jun_1-5': '', 'Jun_6-10': '', 'Jun_11-15': '', 'Jun_16-20': '', 'Jun_21-25': '', 'Jun_26-30': '', 'Jul_1-5': '', 'Jul_6-10': '', 'Jul_11-15': '', 'Jul_16-20': '', 'Jul_21-25': '', 'Jul_25-31': '', 'Aug_1-5': '', 'Aug_6-10': '', 'Aug_11-15': '', 'Aug_16-20': '', 'Aug_21-25': '', 'Aug_26-31': '', 'Sep_1-5': '', 'Sep_6-10': '', 'Sep_11-15': '', 'Sep_16-20': '', 'Sep_21-25': '', 'Sep_26-30': '', 'Oct_1-5': '', 'Oct_6-10': '', 'Oct_11-15': '', 'Oct_16-20': '', 'Oct_21-25': '', 'Oct_26-31': '', });
lyr_Update24081920all_canal_5.set('fieldImages', {'fid': '', 'Key': '', 'Bank': '', 'Canal_name': 'TextEdit', 'Canal_type': '', 'length_m': '', 'Group': '', 'Package': '', 'Head_Str': '', 'Q_Div_m3_s': '', 'Head_Canal': '', });
lyr_Update24081934all_new_offtake_6.set('fieldImages', {'fid': '', 'Key': 'TextEdit', 'Str_name': 'TextEdit', 'Bank': 'TextEdit', 'Canal_name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Group': 'TextEdit', 'Package': 'TextEdit', 'II_2_Pack': 'TextEdit', 'NOTE': 'TextEdit', 'Prev_nam': 'TextEdit', 'inv_r': 'TextEdit', 'aftr_con': 'TextEdit', 'Source': 'TextEdit', 'check_gate': 'TextEdit', });
lyr_Update240819update240819__34all_new_offtake_CheckGate_7.set('fieldImages', {'fid': '', 'Key': '', 'Str_name': '', 'Bank': '', 'Canal_name': '', 'X': '', 'Y': '', 'Latitude': '', 'Longitude': '', 'Group': '', 'Package': '', 'II_2_Pack': '', 'NOTE': '', 'Prev_nam': '', 'inv_r': '', 'aftr_con': '', 'Source': '', 'check_gate': '', });
lyr_Update240819arrow_pointtopolygon_8.set('fieldImages', {'fid': '', 'id': '', 'Key': '', });
lyr_Update24081929all_new_tblock_1.set('fieldLabels', {'fid': 'no label', 'Key': 'no label', 'TB_name': 'inline label - always visible', 'Canal_Name': 'inline label - always visible', 'SArea_cad': 'no label', 'SArea_Ha': 'inline label - always visible', 'Str_name': 'no label', 'Exist_gol': 'no label', 'Prop_gol': 'inline label - always visible', 'Group': 'no label', 'Package': 'no label', 'II_2_Pack': 'no label', 'Comment': 'no label', 'bank': 'no label', 'cont_exist': 'no label', 'nam_in_con': 'no label', 'nam_Asbuit': 'no label', 'NOTEforNAM': 'no label', 'note': 'inline label - always visible', 'Offtak_key': 'no label', });
lyr_Update240819update240819__Tblock_onlyABD_2.set('fieldLabels', {'fid': 'no label', 'Key': 'no label', 'TB_name': 'inline label - always visible', 'Canal_Name': 'inline label - always visible', 'SArea_cad': 'no label', 'SArea_Ha': 'inline label - always visible', 'Str_name': 'inline label - always visible', 'Exist_gol': 'no label', 'Prop_gol': 'inline label - always visible', 'Group': 'no label', 'Package': 'no label', 'II_2_Pack': 'no label', 'Comment': 'no label', 'bank': 'no label', 'cont_exist': 'no label', 'nam_in_con': 'no label', 'nam_Asbuit': 'no label', 'NOTEforNAM': 'no label', 'note': 'inline label - always visible', 'Offtak_key': 'no label', });
lyr_Update240819update240819__Tblock_onlySHP_3.set('fieldLabels', {'fid': 'no label', 'Key': 'no label', 'TB_name': 'no label', 'Canal_Name': 'no label', 'SArea_cad': 'no label', 'SArea_Ha': 'no label', 'Str_name': 'no label', 'Exist_gol': 'no label', 'Prop_gol': 'no label', 'Group': 'no label', 'Package': 'no label', 'II_2_Pack': 'no label', 'Comment': 'no label', 'bank': 'no label', 'cont_exist': 'no label', 'nam_in_con': 'no label', 'nam_Asbuit': 'no label', 'NOTEforNAM': 'no label', 'note': 'no label', 'Offtak_key': 'no label', });
lyr_Update240819testplandischarge_4.set('fieldLabels', {'fid': 'no label', 'Canal_name': 'no label', 'Area(ha)': 'no label', 'Nov_1-5': 'no label', 'Nov_6-10': 'inline label - always visible', 'Nov_11-15': 'inline label - always visible', 'Nov_16-20': 'inline label - always visible', 'Nov_21-25': 'inline label - always visible', 'Nov_26-30': 'inline label - always visible', 'Dec_1-5': 'inline label - always visible', 'Dec_6-10': 'inline label - always visible', 'Dec_11-15': 'inline label - always visible', 'Dec_16-20': 'inline label - always visible', 'Dec_21-25': 'inline label - always visible', 'Dec_26-31': 'inline label - always visible', 'Jan_1-5': 'inline label - always visible', 'Jan_6-10': 'inline label - always visible', 'Jan_11-15': 'inline label - always visible', 'Jan_16-20': 'inline label - always visible', 'Jan_21-25': 'inline label - always visible', 'Jan_26-31': 'inline label - always visible', 'Feb_1-5': 'inline label - always visible', 'Feb_6-10': 'inline label - always visible', 'Feb_11-15': 'inline label - always visible', 'Feb_16-20': 'inline label - always visible', 'Feb_21-25': 'inline label - always visible', 'Feb_26-28': 'inline label - always visible', 'Mar_1-5': 'inline label - always visible', 'Mar_6-10': 'inline label - always visible', 'Mar_11-15': 'inline label - always visible', 'Mar_16-20': 'inline label - always visible', 'Mar_21-25': 'inline label - always visible', 'Mar_26-31': 'inline label - always visible', 'Apr_1-5': 'inline label - always visible', 'Apr_6-10': 'inline label - always visible', 'Apr_11-15': 'inline label - always visible', 'Apr_16-20': 'inline label - always visible', 'Apr_21-25': 'inline label - always visible', 'Apr_26-30': 'inline label - always visible', 'May_1-5': 'inline label - always visible', 'May_6-10': 'inline label - always visible', 'May_11-15': 'inline label - always visible', 'May_16-20': 'inline label - always visible', 'May_21-25': 'inline label - always visible', 'May_26-31': 'inline label - always visible', 'Jun_1-5': 'inline label - always visible', 'Jun_6-10': 'inline label - always visible', 'Jun_11-15': 'inline label - always visible', 'Jun_16-20': 'inline label - always visible', 'Jun_21-25': 'inline label - always visible', 'Jun_26-30': 'inline label - always visible', 'Jul_1-5': 'inline label - always visible', 'Jul_6-10': 'inline label - always visible', 'Jul_11-15': 'inline label - always visible', 'Jul_16-20': 'inline label - always visible', 'Jul_21-25': 'inline label - always visible', 'Jul_25-31': 'inline label - always visible', 'Aug_1-5': 'inline label - always visible', 'Aug_6-10': 'inline label - always visible', 'Aug_11-15': 'inline label - always visible', 'Aug_16-20': 'inline label - always visible', 'Aug_21-25': 'inline label - always visible', 'Aug_26-31': 'inline label - always visible', 'Sep_1-5': 'inline label - always visible', 'Sep_6-10': 'inline label - always visible', 'Sep_11-15': 'inline label - always visible', 'Sep_16-20': 'inline label - always visible', 'Sep_21-25': 'inline label - always visible', 'Sep_26-30': 'inline label - always visible', 'Oct_1-5': 'inline label - always visible', 'Oct_6-10': 'inline label - always visible', 'Oct_11-15': 'inline label - always visible', 'Oct_16-20': 'inline label - always visible', 'Oct_21-25': 'inline label - always visible', 'Oct_26-31': 'inline label - always visible', });
lyr_Update24081920all_canal_5.set('fieldLabels', {'fid': 'no label', 'Key': 'no label', 'Bank': 'no label', 'Canal_name': 'no label', 'Canal_type': 'no label', 'length_m': 'no label', 'Group': 'no label', 'Package': 'no label', 'Head_Str': 'no label', 'Q_Div_m3_s': 'no label', 'Head_Canal': 'no label', });
lyr_Update24081934all_new_offtake_6.set('fieldLabels', {'fid': 'no label', 'Key': 'no label', 'Str_name': 'inline label - always visible', 'Bank': 'inline label - always visible', 'Canal_name': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Group': 'no label', 'Package': 'no label', 'II_2_Pack': 'no label', 'NOTE': 'no label', 'Prev_nam': 'no label', 'inv_r': 'no label', 'aftr_con': 'no label', 'Source': 'no label', 'check_gate': 'inline label - always visible', });
lyr_Update240819update240819__34all_new_offtake_CheckGate_7.set('fieldLabels', {'fid': 'no label', 'Key': 'no label', 'Str_name': 'inline label - always visible', 'Bank': 'no label', 'Canal_name': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Group': 'no label', 'Package': 'no label', 'II_2_Pack': 'no label', 'NOTE': 'no label', 'Prev_nam': 'no label', 'inv_r': 'no label', 'aftr_con': 'no label', 'Source': 'no label', 'check_gate': 'no label', });
lyr_Update240819arrow_pointtopolygon_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Key': 'no label', });
lyr_Update240819arrow_pointtopolygon_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});