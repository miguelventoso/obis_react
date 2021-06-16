//standard data
import polygonsOr from '../data/polygons/or.json';
import indicatorsOr from '../data/indicators/indicators_or.json';
import colorsOr from '../data/colors/colors_or.json';

import polygonsEez from '../data/polygons/eez_lr_small.json';
import indicatorsEez from '../data/indicators/indicators_eez.json';
import colorsEez from '../data/colors/colors_eez.json';

import colorPalettes from '../data/colors/color_palettes.json';

//decade data

import indicatorsDecadeEez from '../data/indicators/decades/biodiversity_indicators_eez.json'
//import indicatorsDecadeOr from '../data/indicators/decades/biodiversity_indicators_or.json'

//code
const {features: featuresOr} = polygonsOr;
const {features: featuresEez} = polygonsEez;

class LoadDataTask{

    loadGeojson = (setState, type) => {
        switch(type) {
            case 'or': setState(featuresOr); break;
            case 'eez': setState(featuresEez); break;
            default: break;
        }
    }

    loadIndicators = (setState, setStateDecades, type) => {
        switch(type) {
            case 'or': 
                setState(indicatorsOr); 
                //setStateDecades(indicatorsDecadeOr);
                break;
            case 'eez': 
                setState(indicatorsEez); 
                setStateDecades(indicatorsDecadeEez);
                break;
            default: break;
        }
    }

    loadColors = (setState, type) => {
        switch(type) {
            case 'or': setState(colorsOr); break;
            case 'eez': setState(colorsEez); break;
            default: break;
        }
    }

    loadSelectedIndicator = (setState, type) => {
        setState(type);
    }

    loadColorPalettes = (setState, type) => {
        setState(colorPalettes[type]);
    }

}

export default LoadDataTask;