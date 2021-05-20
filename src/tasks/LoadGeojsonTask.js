import polygonsOr from '../data/polygons/or.json'
import indicatorsOr from '../data/jsons/indicators_or.json'
import colorsOr from '../data/jsons/colors_or.json'

const {features} = polygonsOr;

class LoadGeojsonTask{

    loadGeojson = (setState) => {
        setState(features);
    }

    loadIndicators = (setState) => {
        setState(indicatorsOr);
    }

    loadColors = (setState) => {
        setState(colorsOr)
    }

}

export default LoadGeojsonTask;