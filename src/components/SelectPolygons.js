import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={classes.ui}>
        <FormControl className={classes.formControl}>
            <InputLabel>Tipo</InputLabel>
                <Select
                native
                variant="outlined"
                onChange={(e) => {
                    props.load('polygon', e.target.value);
                    props.load('indicator', e.target.value);
                    props.load('color', e.target.value);}}
                inputProps={{
                    name: "tipo",
                    id: "tipo",
                }}
                size="small"
                >
                <option value="or">Or</option>
                <option value="eez">Eez</option>
            </Select>
        </FormControl>
        </div>
    );
}