import { useMap, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Style from '../entities/Style'
import L from "leaflet";
import React from 'react';

//el memo rerenderiza si las anteriores props y las siguientes son distintas, es decir, si se ha cambiado alguna de las props
const CustomGeojson = React.memo((props) => {

    const map = useMap();

    const polyognStyle = () => {
        return {
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
  
    function highlightFeature(e) {
        props.setSelectedRegion({
            gid: e.target.feature.properties.gid,
            value: props.indicators[e.target.feature.properties.gid-1][props.selectedIndicator]
        });
        var layer = e.target;
        layer.setStyle({
            weight: 5,
            color: '#000',
            dashArray: '',
            fillOpacity: 0.7
        });
        
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        
    }
    
    function resetHighlight(e) {
        e.target.setStyle(polyognStyle());
    }
    
    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }
  
    function onEachRegionClosure(indicators, colors) {
      const style = new Style();
      return function onEachRegion(region, layer) {
        const gid = region.properties.gid;
        layer.bindPopup("<b>Region: </b>" + gid + "<br/><b>Value: </b>" + indicators[gid-1][props.selectedIndicator]);
        layer.options.fillColor = style.getColor(indicators[gid-1][props.selectedIndicator], colors[props.selectedIndicator]);
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
      }
    }
    return(
        <GeoJSON 
            data={props.regions} 
            onEachFeature={onEachRegionClosure(props.indicators, props.colors, map)}
            style={polyognStyle}/>
    );
});


export default CustomGeojson;