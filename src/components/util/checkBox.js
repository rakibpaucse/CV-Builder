import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    checkboxHoder : {
      padding :'15px 50px',
    },
    checkbox : {
      fontSize : '56rem',
      
    },
    inpBase : {
        textAlign:'center',
        padding :'0px 20px',
        background : '#EAEAEA',
        border:'1px sold #E0E0E0',
        margin : '10px 20px 10px -90px',
        fontSize : 25,
        letterSpacing: 2
    
  },
}));

const CheckBox = ({label , handleChange}) => {

    const classes = useStyles();
    const handleOnchange = e => {
        handleChange(e.target.value) 
    }

    return (

        <div style={{display:'grid' , gridTemplateColumns: '50% auto' , textAlign:"center"}}>
           <FormControlLabel
                value="start"
                control={<Checkbox className={classes.checkbox} color="primary" />}
                labelPlacement="end"
                className={classes.checkboxHoder}
        />

            <InputBase
                
                defaultValue={label}
                inputProps={{ 'aria-label': 'naked' }}
                onChange={handleOnchange}
                className={classes.inpBase}
            />

        </div>
    )
}

export default CheckBox
