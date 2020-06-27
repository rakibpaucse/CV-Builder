import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import InputAdornment from '@material-ui/core/InputAdornment';

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

const Textfield = ({label , placeholder}) => {
    const classes = useStyles();
 
    return (
        <div>
                <TextField
                    className={classes.input}
                    id="input-with-icon-textfield"
                    label={label}
                    placeholder={placeholder}
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



