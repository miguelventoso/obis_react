//standard data
import polygonsOr from '../data/polygons/JSON_or_V1.0.json';
import indicatorsOr from '../data/indicators/JSON_indicators_or_V1.0.json';
import colorsOr from '../data/colors/JSON_colors_or_V1.0.json';

import polygonsEez from '../data/polygons/JSON_eez_lr_small_V1.0.json';
import indicatorsEez from '../data/indicators/JSON_indicators_eez_V1.0.json';
import colorsEez from '../data/colors/JSON_colors_eez_V1.0.json';

import colorPalettes from '../data/colors/JSON_color_palettes_V1.0.json';

//decade data

import indicatorsDecadeEez from '../data/indicators/decades/JSON_decade_indicators_eez_V1.0.json'
import indicatorsDecadeOr from '../data/indicators/decades/JSON_decade_indicators_or_V1.0.json'

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
                setStateDecades(indicatorsDecadeOr);
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