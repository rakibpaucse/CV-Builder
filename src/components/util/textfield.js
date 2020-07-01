import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useDispatch } from 'react-redux'
import {addInputValue} from '../../store/leftSide/action/actionCreators'

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
    
    const onChange = e => {

        dispatch(addInputValue({
            value:e.target.value ,
            path: e.target.attributes.placeholder.value,
            tab : tab
            }))
    }
//labels[0].textContent


   return (
        <div>
                <TextField
                    className={classes.input}
                    id="input-with-icon-textfield"
                    // onBlur = {onChange}
                    placeholder={label}
                    onChange = {onChange}
                    label={label}                
                    InputLabelProps={{
                        className: classes.label 
                      }}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SubdirectoryArrowRightIcon style={{fill:'currentColor'}}/>
                        </InputAdornment>
                    ),
                }} />
            {/* <TextField className={classes.text}  label={label} placeholder={placeholder} variant="outlined" /> */}
        </div>
    )
}

export default Textfield



