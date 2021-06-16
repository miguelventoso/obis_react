import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        zIndex: 80000,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        paddingLeft: 5,
        
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    ui: {
        position: 'relative',
        textAlign: 'center',
    }
}));

function displayHelp(type) {
    switch(type) {
        case 'entities':
            return 'Number of total marine entities registered on each region';
        case 'redlist':
            return 'Percentage of endangered marine species registered on each region';
        case 'richness':
            return 'Number of total marine species registered on each region';
        case 'density':
            return 'Number of total marine entities divided by polygon surface (square km)';
        case 'shannon':
            return 'Difficulty of predicting succesfully the species of a new sample in the region. High difficulty means more species have similar numbers of individuals, making it harder to predict the species of a new sample and resulting in higher biodiversity.';
        case 'simpson':
            return 'Probability of two random entities taken from a region belonging to the same species';
        case 'berger_parker':
            return 'Probability that a randomly taken sample belongs to the most abundant species in that region';
        case 'hill_1':
            return 'Series of indicators commonly used in scientific researches as a unified diversity concept';
        case 'hill_2':
            return 'Series of indicators commonly used in scientific researches as a unified diversity concept';
        default:
            return;
    }
}



const SelectUI = (props) => {
    const classes = useStyles();
    var text = displayHelp(props.selectedIndicator);
    if (text === undefined) text = '';
    return (
        <div className={classes.ui}>
            <FormControl className={classes.formControl}>
                <b>Polygon Type</b>
                    <NativeSelect
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
                    <option value="or">Ocean Regions</option>
                    <option value="eez">EEZ</option>
                </NativeSelect>
                
            </FormControl>
            <Tooltip title={text}>
                <FormControl className={classes.formControl}>
                    <b>Indicator Type</b>
                        <NativeSelect
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
                    </NativeSelect>
                </FormControl>
            </Tooltip>
            <FormControl className={classes.formControl}>
                <b>Color Palette</b>
                    <NativeSelect
                    variant="outlined"
                    onChange={(e) => {
                        props.load('colorPalette', e.target.value);}}
                    inputProps={{
                        id: "colors",
                    }}
                    size="small"
                    >
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="green_red">Green to Red</option>
                </NativeSelect>
            </FormControl>
            
        </div>
    );
}

export default SelectUI;