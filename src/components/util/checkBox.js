import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import {  useDispatch , useSelector } from 'react-redux'
import { addInputValue } from '../../store/leftSide/action/actionCreators'
import { camalCaseMaker } from './camelCaseMaker';


const useStyles = makeStyles((theme) => ({

    checkboxHoder : {
      padding :'15px 50px',
      border : '2px splid'
    },
    checkbox : {
        color : '#93d9c1',
        border : '1px solid',
    },
    inpBase : {
        textAlign:'center',
        padding :'0px 20px',
        background : '#EAEAEA',
        border:'1px sold #E0E0E0',
        margin : '10px 20px 10px -90px',
        fontSize : 23,
        letterSpacing: 2,

        [theme.breakpoints.up(1200)]: {
            fontSize : 20,
            margin : '10px 20px 10px -50px',

        }
  },

  mainContainer : {
    display:'grid' ,
    gridTemplateColumns: '50% auto' ,
    textAlign:"center",

    [theme.breakpoints.up(1200)]: {
        gridTemplateColumns: '50% auto' ,
    }
  }
}));

const CheckBox = ({label , handleChange}) => {

    const dispatch = useDispatch();
    const state = useSelector(({leftReducer}) => leftReducer)
    const classes = useStyles();
    const handleOnchange = e => {
        e.target.value ? 
        handleChange(e.target.value) : 
        handleChange('TabName'+ Date.now().toString().substr(9))  

    }

    const handleCheckBox = e => {
        dispatch(addInputValue({
            value:e.target.checked ,
            path: 'shouldShow',
            tab : label
            }))
    }
     console.log(label)
    return (

        <div className={classes.mainContainer} >
           <FormControlLabel
                value="start"
                control={
                    <Checkbox size='medium' 
                    className={classes.checkbox}
                    color='primary' 
                    checked = {state[camalCaseMaker(label)].items.shouldshow}
                    onChange={handleCheckBox}/>
                    }
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
