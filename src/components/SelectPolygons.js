import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        zIndex: 80000,
        backgroundColor: 'white',
        
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    ui: {
        backgroundColor: 'white',
        position: 'relative',
        right: '20%',
        left: '10%',
    }
}));

export default function SelectPolygons(props) {
    const classes = useStyles();

    return (
        <div className={classes.ui}>
            <FormControl className={classes.formControl}>
                <InputLabel>Polygon Type</InputLabel>
                    <Select
                    native
                    variant="outlined"
                    onChange={(e) => {
                        props.load('polygon', e.target.value);
                        props.load('indicator', e.target.value);
                        props.load('color', e.target.value);}}
                    inputProps={{
                        id: "polygons",
                    }}
                    size="small"
                    >
                    <option value="or">Or</option>
                    <option value="eez">Eez</option>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Indicator Type</InputLabel>
                    <Select
                    native
                    variant="outlined"
                    onChange={(e) => {
                        props.load('selectedIndicator', e.target.value);}}
                    inputProps={{
                        id: "indicators",
                    }}
                    size="small"
                    >
                    <option value="entities">Total Entities</option>
                    <option value="redlist">Redlist Species</option>
                    <option value="richness">Richness</option>
                    <option value="density">Density</option>
                    <option value="shannon">Shannon Indicator</option>
                    <option value="simpson">Simpson Indicator</option>
                    <option value="berger_parker">Berger-Parker Indicator</option>
                    <option value="hill_1">Hill 1 Indicator</option>
                    <option value="hill_2">Hill 2 Indicator</option>
                </Select>
            </FormControl>
        </div>
    );
}