import React, { useState, useEffect } from 'react';

import Loading from './Loading';
import MapView from "./MapView";
import LoadDataTask from "../tasks/LoadDataTask";

const position = [32.212993, -4.434736]
const zoom = 3

const Obis = () => {
    
    const [regions, setRegions] = useState([]);
    const [indicators, setIndicators] = useState([]);
    const [colors, setColors] = useState([]);
    const [selectedIndicator, setSelectedIndicator] = useState([]);
    const [selectedColorPalette, setSelectedColorPalette] = useState([]);


    const LoadData = new LoadDataTask();
    const load = () => {    
        LoadData.loadGeojson(setRegions, 'or');
        LoadData.loadIndicators(setIndicators, 'or');
        LoadData.loadColors(setColors, 'or');
        LoadData.loadSelectedIndicator(setSelectedIndicator, 'entities');
        LoadData.loadColorPalettes(setSelectedColorPalette, 'blue');
    };

    const setters = (json, type) => {
        switch(json) {
            case 'polygon':
                LoadData.loadGeojson(setRegions, type);
                break;
            case 'indicator':
                LoadData.loadIndicators(setIndicators, type);
                break;
            case 'color':
                LoadData.loadColors(setColors, type);
                break;
            case 'selectedIndicator':
                LoadData.loadSelectedIndicator(setSelectedIndicator, type);
                break;
            case 'colorPalette':
                LoadData.loadColorPalettes(setSelectedColorPalette, type);
                break;
            default:
                break;
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(load, []);
    
    return(
        <div>
            {
            //No data? display loading
            (regions.length === 0 ||indicators.length === 0 || colors.length === 0) ? (
                <Loading/> 
            ) : ( 
                <div>
                    <MapView center={position} zoom={zoom} 
                    regions={regions} indicators={indicators} colors={colors} 
                    load={setters} selectedIndicator={selectedIndicator} selectedColorPalette={selectedColorPalette}
                    />
                </div>
            )}
        </div>
    )

};

export default Obis;