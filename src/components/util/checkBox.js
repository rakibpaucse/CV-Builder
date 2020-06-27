import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    background : '#ddd',
    border : '1px solid #ccc' ,
    '& > *': {
      margin: theme.spacing(1),
    },
    inpBase : {
        background : '#ddd',
        border : '1px solid #ccc'
    }
  },
}));

const CheckBox = ({label , handleChange}) => {

    const classes = useStyles();
    const handleOnchange = e => {
        handleChange(e.target.value) 
    }

    return (

        <div>
           <FormControlLabel
                value="start"
                control={<Checkbox color="primary" />}
                labelPlacement="end"
        />

            <InputBase
                // className={classes.margin}
                defaultValue={label}
                inputProps={{ 'aria-label': 'naked' }}
                onChange={handleOnchange}
                className={classes.inpBase}
            />

        </div>
    )
}

export default CheckBox
