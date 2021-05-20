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
    
    /*const [data, setData] = useState({ 
        regions: '',
        indicator: '',
        color: ''
    })*/

    const load = () => {
        const loadGeojsonTask = new LoadGeojsonTask();
        loadGeojsonTask.loadGeojson(setRegions);
        loadGeojsonTask.loadIndicators(setIndicators);
        loadGeojsonTask.loadColors(setColors);
    };

    
    
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
                    <MapView center={position} zoom={zoom} regions={regions} indicators={indicators} colors={colors} />
                    <Legend/>
                </div>
            )}
        </div>
    )

};

export default Obis;