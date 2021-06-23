import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
        position: 'absolute',
        bottom: '0vh',
        left: '50%',
        transform: 'translate(-50%, 0)',
        zIndex: 90000,
    },
    button: {
        backgroundColor: '#e6e6e6'
    }
}));

function download(props, fileName, polygons) {
    return function () {
        var jsonStr;
        if(polygons)jsonStr = JSON.stringify(props.regions);
        else {
            let selectedIndicator = props.selectedIndicator;
            let json = [];
            for(let i=0; i<props.indicators.length; i++) {
                json.push({
                    gid: props.indicators[i].gid,
                    [selectedIndicator]: props.indicators[i][selectedIndicator]
                })
            }
            jsonStr = JSON.stringify(json);
        }
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
        element.setAttribute('download', fileName);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }
    
}

const DownloadButtons = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" startIcon={<CloudDownloadIcon />} onClick={download(props, 'polygons.geojson', true)} className={classes.button}>Polygons</Button>
      <Button variant="contained" startIcon={<CloudDownloadIcon />} onClick={download(props, 'indicator.json', false)} className={classes.button}>Indicator</Button>
    </div>
  );
};

export default DownloadButtons;