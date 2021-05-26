import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

const Info = (props) => {

    const map = useMap();

    useEffect(() => {

        const info = L.control({position: 'bottomright'});
        const div = L.DomUtil.create('div', 'info container');

        info.onAdd = function (map) {
            this.update();
            return div;
        };

        info.update = function (props) {
            div.innerHTML = '<h4>Result of indicator</h4>' +  (props ? '<b>Indicator: ' + props.selectedIndicator + '</b><br />' +
                'Region: ' + props.selectedRegion.gid + '<br />Value: ' + props.selectedRegion.value
                : 'Select a region');
        };

        info.addTo(map);
        
    }, [map]);

    useEffect(() => {
        const info = document.getElementsByClassName('info container')[0];
        
        if(info) {
            if(props.selectedRegion.gid === 0) {
                info.innerHTML = '<h4>Select a region</h4>';
            }
            else{
                info.innerHTML = '<h4>Result of indicator</h4>' +  (props ? '<b>Indicator: ' + props.selectedIndicator + '</b><br />' +
                    'Region: ' + props.selectedRegion.gid + '<br />Value: ' + props.selectedRegion.value
                    : 'Select a region');
            }
            
        }

    }, [props]);
    return null;
}

export default Info;