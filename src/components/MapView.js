import React, {useState} from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Legend from './Legend';
import Info from './Info';
import CustomGeojson from '../entities/CustomGeojson';
import SelectUI from './SelectUI';
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
              chartData={props.chartData}
              setChartData={props.setChartData}
            />;
  }
  return<></>;
}

const MapView = (props) => {
  const [showChart, setShowChart] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState({gid: 0, value: 0});
  const [chartGid, setChartGid] = useState([]);
  return(
    <div>
      <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={true} zoomDelta={0.25} zoomSnap={0}>
        <Info 
          selectedIndicator={props.selectedIndicator}
          selectedRegion={selectedRegion}/>
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
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png'
          noWrap= {true}
          minZoom= {2}
        />
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
          chartData={props.chartData}
          setChartData={props.setChartData}
          chartGid={chartGid}/>
      </MapContainer>
    </div>
  );
}


export default MapView;
