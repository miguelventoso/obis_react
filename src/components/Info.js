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
            div.innerHTML = '<h4>Resultado del indicador</h4>' +  (props ?
            '<b>Zona: ' + props.selectedRegion.gid + '</b><br />Valor: ' + props.selectedRegion.value
            : 'Selecciona una región');
        };

        info.addTo(map);
        
    }, [map]);

    useEffect(() => {
        const info = document.getElementsByClassName('info container')[0];
        
        if(info) {
            if(props.selectedRegion.gid === 0) {
                info.innerHTML = '<h4>Selecciona una región</h4>';
            }
            else{
                info.innerHTML = '<h4>Resultado del indicador</h4>' +  (props ?
                    '<b>Zona: ' + props.selectedRegion.gid + '</b><br />Valor: ' + props.selectedRegion.value
                    : 'Selecciona una región');
            }
            
        }

    }, [props]);
    return null;
}

export default Info;