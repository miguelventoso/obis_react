import L from "leaflet";
import {useMap} from 'react-leaflet';

const Bounds = () => {
    var map = useMap();
    var bounds = L.latLngBounds([[-350, 350], [350, -350]]);
    map.setMaxBounds(bounds);
    map.on('drag', function() {
      map.panInsideBounds(bounds, { animate: false });
    });
    return <></>
}

export default Bounds;