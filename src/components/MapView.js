import React, {useState} from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Legend from './Legend';
import Info from './Info';
import CustomGeojson from '../entities/CustomGeojson';
import SelectUI from './SelectUI';
import Bounds from '../entities/Bounds';
import { CRS } from 'leaflet';
import DownloadButtons from './DownloadButtons';



const MapView = (props) => {
  const [selectedRegion, setSelectedRegion] = useState({gid: 0, value: 0});
  return(
    <div>
      <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={true} zoomDelta={0.25} zoomSnap={0}>
        <Info 
          selectedIndicator={props.selectedIndicator}
          selectedRegion={selectedRegion}/>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
          noWrap= {false}
          minZoom= {2}
        />
        <CustomGeojson
          key={props.regions + props.selectedIndicator + props.selectedColorPalette}
          regions={props.regions}
          indicators={props.indicators}
          colors={props.colors}
          setSelectedRegion={setSelectedRegion}
          selectedIndicator={props.selectedIndicator}
          selectedColorPalette={props.selectedColorPalette}
        /> 
        <SelectUI 
          load={props.load}
          selectedIndicator={props.selectedIndicator}/>
        <Legend
          key={props.selectedIndicator + props.selectedColorPalette}
          colors={props.colors}
          selectedIndicator={props.selectedIndicator}
          selectedColorPalette={props.selectedColorPalette}/>
      </MapContainer>
      <DownloadButtons
        indicators={props.indicators}
        selectedIndicator={props.selectedIndicator}
        regions={props.regions}/>
      
    </div>
  );
}


export default MapView;
