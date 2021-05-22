import { useMap, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Style from '../entities/Style'
import L from "leaflet";
import React, { useEffect } from 'react';

const areEqual = (prev, next) => {
    //rerenderiza si las anteriores props y las siguientes son distintas, se marca aquí
    return(prev.regions === next.regions && prev.indicators === next.indicators && prev.colors === next.colors);
}

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
            value: props.indicators[e.target.feature.properties.gid-1].shannon_indicator
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
        layer.bindPopup("<b>Region: </b>" + gid + "<br/><b>Value: </b>" + indicators[gid-1].shannon_indicator);
        layer.options.fillColor = style.getColor(indicators[gid-1].shannon_indicator, colors.shannon);
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
}, areEqual);


export default CustomGeojson;