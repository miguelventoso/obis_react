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
    
    const loadGeojsonTask = new LoadGeojsonTask();
    const load = () => {    
        loadGeojsonTask.loadGeojson(setRegions, 'or');
        loadGeojsonTask.loadIndicators(setIndicators, 'or');
        loadGeojsonTask.loadColors(setColors, 'or');
    };

    const setters = (json, type) => {
        switch(json) {
            case 'polygon':
                if(type === 'or') loadGeojsonTask.loadGeojson(setRegions, 'or');
                else loadGeojsonTask.loadGeojson(setRegions, 'eez');
                break;
            case 'indicator':
                if(type === 'or') loadGeojsonTask.loadGeojson(setIndicators, 'or');
                else loadGeojsonTask.loadGeojson(setIndicators, 'eez');
                break;
            case 'color':
                if(type === 'or') loadGeojsonTask.loadGeojson(setColors, 'or');
                else loadGeojsonTask.loadGeojson(setColors, 'eez');
                break;
        }
    }
    
    //Si añadimos el [] además de load, forzamos al useEffect a ejecutarse solo con recargas de página (o sea, una vez)
    useEffect(load);
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
                    load={setters}
                    />
                </div>
            )}
        </div>
    )

};

export default Obis;