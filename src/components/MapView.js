import React, {useState, useEffect, useRef, createRef} from 'react';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Legend from './Legend'
import Info from './Info'
import Style from '../entities/Style'
import CustomGeojson from './CustomGeojson'
import L, {CRS} from "leaflet";
import SelectPolygons from './SelectPolygons';

const Bounds = () => {
  var map = useMap();
  var bounds = L.latLngBounds([[-350, 350], [350, -350]]);
  map.setMaxBounds(bounds);
  map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
  });
  return <></>
}

const MapView = (props) => {
  
  const [selectedRegion, setSelectedRegion] = useState({gid: 0, value: 0});
  
  return(
    <div>
      <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={true} zoomDelta={0.25} zoomSnap={0}>
        <Bounds/>
        <Info 
          selectedRegion={selectedRegion}/>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
          noWrap= {true}
          minZoom= {2}
        />
        <CustomGeojson
          regions={props.regions}
          indicators={props.indicators}
          colors={props.colors}
          setSelectedRegion={setSelectedRegion}
        /> 
        <SelectPolygons load={props.load} load={props.load}/>
        <Legend
          indicator={props.indicators}
          colors={props.colors}/>
        
      </MapContainer>
    </div>
  );
}


export default MapView;
