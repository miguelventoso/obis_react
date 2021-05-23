import React, { useState, useEffect } from 'react';

import Loading from './Loading';
import MapView from "./MapView";
import Legend from "./Legend";
import LoadGeojsonTask from "../tasks/LoadGeojsonTask";

const position = [32.212993, -4.434736]
const zoom = 3

const Obis = () => {
    
    const [regions, setRegions] = useState([]);
    const [indicators, setIndicators] = useState([]);
    const [colors, setColors] = useState([]);
    const [selectedIndicator, setSelectedIndicator] = useState([]);


    const loadGeojsonTask = new LoadGeojsonTask();
    const load = () => {    
        loadGeojsonTask.loadGeojson(setRegions, 'or');
        loadGeojsonTask.loadIndicators(setIndicators, 'or');
        loadGeojsonTask.loadColors(setColors, 'or');
        loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'entities');
    };

    const setters = (json, type) => {
        switch(json) {
            case 'polygon':
                if(type === 'or') loadGeojsonTask.loadGeojson(setRegions, 'or');
                else loadGeojsonTask.loadGeojson(setRegions, 'eez');
                break;
            case 'indicator':
                if(type === 'or') loadGeojsonTask.loadIndicators(setIndicators, 'or');
                else loadGeojsonTask.loadIndicators(setIndicators, 'eez');
                break;
            case 'color':
                if(type === 'or') loadGeojsonTask.loadColors(setColors, 'or');
                else loadGeojsonTask.loadColors(setColors, 'eez');
                break;
            case 'selectedIndicator':
                if(type === 'entities') loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'entities');
                else if(type === 'redlist') loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'redlist');
                else if(type === 'richness') loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'richness');
                else if(type === 'density') loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'density');
                else if(type === 'shannon') loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'shannon');
                else if(type === 'simpson') loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'simpson');
                else if(type === 'berger_parker') loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'berger_parker');
                else if(type === 'hill_1') loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'hill_1');
                else if(type === 'hill_2') loadGeojsonTask.loadSelectedIndicator(setSelectedIndicator, 'hill_2');
                break;
        }
    }
    
    //Si añadimos el [] además de load, forzamos al useEffect a ejecutarse solo con recargas de página (o sea, una vez)
    useEffect(load, []);
    
    return(
        <div>
            {
            //No data? display loading
            regions.length === 0 ? (
                <Loading/> 
            ) : ( 
                <div>
                    <MapView center={position} zoom={zoom} 
                    regions={regions} indicators={indicators} colors={colors} 
                    load={setters} selectedIndicator={selectedIndicator}
                    />
                </div>
            )}
        </div>
    )

};

export default Obis;