import { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';
import React from 'react';

function areEqual(prev, next) {
    return prev.chartGid === next.chartGid;
}

const Chart = React.memo((props) => {
    const [chartData, setChartData] = useState({});
    console.log(props);
    const chart = () => {
        
        setChartData({
            labels: ['1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
            datasets: [
                {
                    label: 'Data by decades',
                    data: [1,2,3,4,5,6,7,8,9,10,11,12,13],
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
    return(
        <div style={{
            position: "absolute", zIndex:9000000, height: "35vh", width: "25vw", backgroundColor: "white", 
            top: "1.5%", right:"1%", borderRadius:5, paddingLeft:10, paddingRight:10, opacity: 0.8}}>
            <div>
                <button type={"button"} style={{position: "relative", left: "90%", backgroundColor:"transparent", border: "none", padding: "10px"}} onClick={showOff}>X</button>
                <Line data={chartData} options={{
                responsive: true
                }}/>
            </div>
        </div>
    );
}, areEqual);

export default Chart;