import polygonsOr from '../data/polygons/or.json'
import indicatorsOr from '../data/jsons/indicators_or.json'
import colorsOr from '../data/jsons/colors_or.json'

import polygonsEez from '../data/polygons/eez_lr_small.json'
import indicatorsEez from '../data/jsons/indicators_eez.json'
import colorsEez from '../data/jsons/colors_eez.json'

const {features: featuresOr} = polygonsOr;
const {features: featuresEez} = polygonsEez;

class LoadGeojsonTask{

    loadGeojson = (setState, type) => {
        switch(type) {
            case 'or':
                setState(featuresOr);
                break;
            case 'eez':
                setState(featuresEez);
                break;
        }
        
    }

    loadIndicators = (setState, type) => {
        switch(type) {
            case 'or':
                setState(indicatorsOr);
                break;
            case 'eez':
                setState(indicatorsEez);
                break;
        }
    }

    loadColors = (setState, type) => {
        switch(type) {
            case 'or':
                setState(colorsOr);
                break;
            case 'eez':
                setState(colorsEez);
                break;
        }
    }

    loadSelectedIndicator = (setState, type) => {
        setState(type);
    }

}

export default LoadGeojsonTask;