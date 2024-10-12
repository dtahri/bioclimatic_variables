var wms_layers = [];
var lyr_Soilorganiccarbonatadepthof030cm_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Soil organic carbon at a depth of 0-30 cm",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Soilorganiccarbonatadepthof030cm_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var lyr_CoefficientofvariationofEnhancedVegetationIndex_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Coefficient of variation of Enhanced Vegetation Index",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CoefficientofvariationofEnhancedVegetationIndex_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var lyr_EvennessofEnhancedVegetationIndex_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Evenness of Enhanced Vegetation Index",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/EvennessofEnhancedVegetationIndex_2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var lyr_AridityIndex_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Aridity Index",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AridityIndex_3.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var lyr_PrecipitationofWarmestQuarterBIO18_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitation of Warmest Quarter (BIO18)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PrecipitationofWarmestQuarterBIO18_4.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var lyr_AnnualPrecipitationBIO12_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Annual Precipitation (BIO12)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AnnualPrecipitationBIO12_5.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var lyr_MinTemperatureofColdestMonthBIO6_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Min Temperature of Coldest Month (BIO6)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MinTemperatureofColdestMonthBIO6_6.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var lyr_AnnualMeanTemperatureBIO1_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Annual Mean Temperature (BIO1)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AnnualMeanTemperatureBIO1_7.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var lyr_Elevation_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Elevation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Elevation_8.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-965570.588930, 2150230.837648, 1334599.431512, 4452376.183753]
                            })
                        });var format_Districtboundaries_9 = new ol.format.GeoJSON();
var features_Districtboundaries_9 = format_Districtboundaries_9.readFeatures(json_Districtboundaries_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtboundaries_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Districtboundaries_9.addFeatures(features_Districtboundaries_9);var lyr_Districtboundaries_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districtboundaries_9, 
                style: style_Districtboundaries_9,
                title: '<img src="styles/legend/Districtboundaries_9.png" /> District boundaries'
            });var format_Districtlabels_10 = new ol.format.GeoJSON();
var features_Districtlabels_10 = format_Districtlabels_10.readFeatures(json_Districtlabels_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtlabels_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Districtlabels_10.addFeatures(features_Districtlabels_10);cluster_Districtlabels_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Districtlabels_10
});var lyr_Districtlabels_10 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Districtlabels_10, 
                style: style_Districtlabels_10,
                title: '<img src="styles/legend/Districtlabels_10.png" /> District labels'
            });

lyr_Soilorganiccarbonatadepthof030cm_0.setVisible(true);lyr_CoefficientofvariationofEnhancedVegetationIndex_1.setVisible(true);lyr_EvennessofEnhancedVegetationIndex_2.setVisible(true);lyr_AridityIndex_3.setVisible(true);lyr_PrecipitationofWarmestQuarterBIO18_4.setVisible(true);lyr_AnnualPrecipitationBIO12_5.setVisible(true);lyr_MinTemperatureofColdestMonthBIO6_6.setVisible(true);lyr_AnnualMeanTemperatureBIO1_7.setVisible(true);lyr_Elevation_8.setVisible(true);lyr_Districtboundaries_9.setVisible(true);lyr_Districtlabels_10.setVisible(true);
var layersList = [lyr_Soilorganiccarbonatadepthof030cm_0,lyr_CoefficientofvariationofEnhancedVegetationIndex_1,lyr_EvennessofEnhancedVegetationIndex_2,lyr_AridityIndex_3,lyr_PrecipitationofWarmestQuarterBIO18_4,lyr_AnnualPrecipitationBIO12_5,lyr_MinTemperatureofColdestMonthBIO6_6,lyr_AnnualMeanTemperatureBIO1_7,lyr_Elevation_8,lyr_Districtboundaries_9,lyr_Districtlabels_10];
lyr_Districtboundaries_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_polygo': 'FID_polygo', 'FID_All': 'FID_All', 'Id': 'Id', 'Secteurs': 'Secteurs', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area': 'Area', });
lyr_Districtlabels_10.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Districtboundaries_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_polygo': 'TextEdit', 'FID_All': 'TextEdit', 'Id': 'TextEdit', 'Secteurs': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_Districtlabels_10.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Districtboundaries_9.set('fieldLabels', {'OBJECTID': 'no label', 'FID_polygo': 'no label', 'FID_All': 'no label', 'Id': 'no label', 'Secteurs': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Area': 'no label', });
lyr_Districtlabels_10.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Districtlabels_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});