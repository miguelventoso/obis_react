import { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';
import React from 'react';
import Style from '../entities/Style'

//import data from '../data/indicators/decades/total_entities_decade_or.json';

function areEqual(prev, next) {
    return prev.chartGid === next.chartGid ;
}

const Chart = React.memo((props) => {
    var data = props.chartData;
    const [chartData, setChartData] = useState({});
    const decades = ['1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];
    var arr = [];
    for(var i=0; i<data.length; i++) {
        if(data[i].gid === props.chartGid){
            console.log(data[i]);
            for(var j=0; j<decades.length; j++) {
                if(data[i].decade === 1900 + j*10) {
                    arr[j] = data[i][props.selectedIndicator];
                }
            }
        } 
    }
    for(var i=0; i<decades.length; i++) {
        if(arr[i] === undefined) arr[i] = 0;
    }

    const style = new Style();
    const measure = style.measureUnits(props.selectedIndicator);
    const result = style.formatNumberWithCommas(props.selectedRegion.value);

    const chart = () => {
        setChartData({
            labels: decades,
            datasets: [
                {
                    label: 'Data by decades',
                    data: arr,
                    backgroundColor: ['rgba(75, 192, 192, 0.6)'],
                    borderWidth: 4,
                    
                    
                }
            ]
        })
        
    }
    useEffect(() => {
        
        chart();
    }, [props.chartGid]);
    function showOff() {
        props.setShowChart(false);
    }
    const options={
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
    };
    return(
        <div style={{
            position: "absolute", zIndex:9000000, height: "40vh", width: "25vw", backgroundColor: "white", 
            top: "1.5%", right:"1%", borderRadius:15, paddingLeft:10, paddingRight:10, opacity: 0.8}}>
            <div>
                
                <button type={"button"} style={{position: "relative", left: "90%", backgroundColor:"transparent", border: "none", padding: "10px", fontSize: 13}} onClick={showOff}>X</button>
                <b style={{display: 'flex',  justifyContent:'center', alignItems:'center', fontSize: 20}}>Total results: {result} {measure}</b>
                <b style={{display: 'flex',  justifyContent:'left', alignItems:'left', fontSize: 13}}>Results split by decades:</b>
                <Line data={chartData} options={options}/>
            </div>
        </div>
    );
}, areEqual);

export default Chart;