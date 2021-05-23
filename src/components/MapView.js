import React, {useState} from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Legend from './Legend'
import Info from './Info'
import CustomGeojson from '../entities/CustomGeojson'
import SelectPolygons from './SelectPolygons';
import Bounds from '../entities/Bounds'



const MapView = (props) => {
  
  const [selectedRegion, setSelectedRegion] = useState({gid: 0, value: 0});
  return(
    <div>
      <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={true} zoomDelta={0.25} zoomSnap={0}>
        <Info 
          selectedRegion={selectedRegion}/>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
          noWrap= {true}
          minZoom= {2}
        />
        <CustomGeojson
          key={props.regions + props.selectedIndicator}
          regions={props.regions}
          indicators={props.indicators}
          colors={props.colors}
          setSelectedRegion={setSelectedRegion}
          selectedIndicator={props.selectedIndicator}
        /> 
        <SelectPolygons load={props.load}/>
        <Legend
          key={props.selectedIndicator}
          colors={props.colors}
          selectedIndicator={props.selectedIndicator}/>
        
      </MapContainer>
    </div>
  );
}


export default MapView;
