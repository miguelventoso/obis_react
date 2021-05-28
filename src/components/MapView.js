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
import Chart from '../components/Chart';

function ShowChart(props) {
  const show = props.show;
  if (show) {
    return <Chart 
              setShowChart={props.setShowChart} 
              selectedIndicator={props.selectedIndicator}
              selectedRegion={props.selectedRegion}
              chartGid={props.chartGid}
            />;
  }
  return<></>;
}

const MapView = (props) => {
  const [selectedRegion, setSelectedRegion] = useState({gid: 0, value: 0});
  const [showChart, setShowChart] = useState(false);
  const [chartGid, setChartGid] = useState([]);
  return(
    <div>
      <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={true} zoomDelta={0.25} zoomSnap={0}>
        <Info 
          selectedIndicator={props.selectedIndicator}
          selectedRegion={selectedRegion}/>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png'
          noWrap= {true}
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
          setShowChart={setShowChart}
          setChartGid={setChartGid}
        /> 
        <SelectUI 
          load={props.load}
          selectedIndicator={props.selectedIndicator}/>
        <Legend
          key={props.selectedIndicator + props.selectedColorPalette}
          colors={props.colors}
          selectedIndicator={props.selectedIndicator}
          selectedColorPalette={props.selectedColorPalette}/>
        <DownloadButtons
          indicators={props.indicators}
          selectedIndicator={props.selectedIndicator}
          regions={props.regions}/>
        <ShowChart 
          show={showChart} 
          setShowChart={setShowChart}
          selectedIndicator={props.selectedIndicator}
          selectedRegion={selectedRegion}
          chartGid={chartGid}/>
      </MapContainer>
      
      
      
    </div>
  );
}


export default MapView;
