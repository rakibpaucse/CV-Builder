import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useDispatch , useSelector} from 'react-redux'
import {addInputValue} from '../../store/leftSide/action/actionCreators'
import {camalCaseMaker} from '../util/camelCaseMaker'

import {Button , IconButton} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({

  text : {
      width : '90%' , 
      padding : '10px',
  } ,
  input: {
    margin: theme.spacing(1),
    width : '90%' , 
    padding : '10px',

  },
  label:{
        color: 'green',
        fontSize : 25,
        textAlign : 'center',
        padding: '0px 20px'
  }

}));

const Textfield = ({label , placeholder , tab }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const stateLabelValue = useSelector(state => state[camalCaseMaker(tab)].items[camalCaseMaker(label)])


    const onChange = e => {

        dispatch(addInputValue({
            value:e.target.value ,
            path: e.target.attributes.placeholder.value,
            tab : tab
            }))
    }


   return (
        <div>
                <TextField
                    className={classes.input}
                    id="input-with-icon-textfield"
                    placeholder={label}
                    onChange = {onChange}
                    label={label}   
                    value={stateLabelValue}             
                    InputLabelProps={{
                        className: classes.label 
                      }}
                    InputProps={{
                    startAdornment: (
                      <>
                        <InputAdornment position="start">
                            <SubdirectoryArrowRightIcon style={{fill:'currentColor'}}/>
                        </InputAdornment>
                        {/* <InputAdornment position="end" >
                             <PhotoCamera />
                        </InputAdornment> */}
                      </>
                    ),
                }} />
            {/* <TextField className={classes.text}  label={label} placeholder={placeholder} variant="outlined" /> */}
        </div>
    )
}

export default Textfield



{/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
<label htmlFor="icon-button-file">
  <IconButton color="primary" aria-label="upload picture" component="span">
    <PhotoCamera />
  </IconButton> */}