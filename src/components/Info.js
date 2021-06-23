import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import Style from '../entities/Style'


const Info = (props) => {

    const map = useMap();
    const style = new Style();
    const measure = style.measureUnits(props.selectedIndicator);

    useEffect(() => {

        const info = L.control({position: 'bottomright'});
        const div = L.DomUtil.create('div', 'info container');

        info.onAdd = function (map) {
            this.update();
            return div;
        };

        info.update = function (props) {
            div.innerHTML = '<h4>Detailed Results:</h4>' +  (props ? '<b/>Result: ' 
            + style.formatNumberWithCommas(props.selectedRegion.value) + measure +
            '</b><br/>Region GID: ' + props.selectedRegion.gid +         
            '<br/>Indicator: ' + props.selectedIndicator 
                    : 'Select a region');
        };

        info.addTo(map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const info = document.getElementsByClassName('info container')[0];
        
        if(info) {
            if(props.selectedRegion.gid === 0) {
                info.innerHTML = '<h4>Select a region</h4>';
            }
            else{
                info.innerHTML = '<h4>Detailed Results:</h4>' +  (props ? '<b/>Result: ' + 
                style.formatNumberWithCommas(props.selectedRegion.value) + measure +
                '</b><br/>Region GID: ' + props.selectedRegion.gid +    
                '<br/>Indicator: ' + props.selectedIndicator 
                    
                    : 'Select a region');
            }
            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);
    return null;
}

export default Info;