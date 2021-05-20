import React, {useState, useEffect, useRef} from 'react';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

function onEachRegionClosure(indicators, colors) {
  return function onEachRegion(region, layer) {
    const gid = region.properties.gid;
    layer.bindPopup("<b>Region: </b>" + gid + "<br/><b>Value: </b>" + indicators[gid-1].shannon_indicator);
    layer.options.fillColor = getColor(indicators[gid-1].shannon_indicator, colors.shannon);
  }
}

function getColor(d, colors) {
  return d > colors[6] ? '#800026' :
      d > colors[5]  ? '#BD0026' :
      d > colors[4]  ? '#E31A1C' :
      d > colors[3]  ? '#FC4E2A' :
      d > colors[2]   ? '#FD8D3C' :
      d > colors[1] ? '#FEB24C' :
      d > colors[0]   ? '#FED976' :
                  '#FFEDA0';
}

const polyognStyle = () => {
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    fillOpacity: 0.7
  };
}

const MapView = (props) => {
  return(
    <div>
      <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
        />
        <GeoJSON 
          data={props.regions} 
          onEachFeature={onEachRegionClosure(props.indicators, props.colors)}
          style={polyognStyle}/>
      </MapContainer>
    </div>
  );
}


export default MapView;
