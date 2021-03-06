import React,{useState} from 'react'
import {ExpansionPanel , Typography , Grid } from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import {  useDispatch , useSelector } from 'react-redux'
import { addlistItem ,
         addRatingValue,
         resetObj
    } from '../../../store/leftSide/action/actionCreators'


import Textfield from '../../util/textfield';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '108%',
        marginLeft : '-12px'
        },
    heading: {
        margin: '0 auto',
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
        color:'#df143c'
        },
    label: {
        color: 'green',
        marginBottom : 25
    },
    container : {
        justifyContent : 'center',
        paddingLeft: 18
    } ,
    icon:{
        backgroundColor : '#1a8cc4'
    }

}));

const LanguagesComponent = ({label}) => {
    const [isExpand , setIsExpand] = useState(false)
    const classes = useStyles();
    const [ratingValue, setRatingValue] = useState(2);
    const dispatch = useDispatch();
    const stateLabelValue = useSelector(({leftReducer}) => leftReducer[label].items)


    const handleClick = () => {
        dispatch(addlistItem({item : stateLabelValue , tab : label}))
        dispatch (resetObj({tab: label}))
    }

    return (
        <div className={classes.root}>
            <ExpansionPanel 
                expanded={isExpand} 
                >
            <ExpansionPanelSummary
                onClick={() => setIsExpand(prv => !prv)}  
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{borderBottom: '1.5px solid darkgray'}}
            >
                        <Typography className={classes.heading}>{`Add ${label}`}</Typography>
            </ExpansionPanelSummary>


            <ExpansionPanelDetails>
                <Grid container spacing={3}>



                    <Grid item xs={12}>
                        <Textfield label='Language Name' tab={label}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Textfield label='Level' tab={label}/>
                    </Grid>
                    <Grid container spacing={3} style={{flexGrow : 1}} className={classes.container}>
                        <Grid item xs={5}>
                                <Typography variant='h6' className={classes.label} > Rate Yourself   </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Rating 
                            name="simple-controlled"
                            value={ratingValue} 
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                                dispatch(addRatingValue({ path : 'rating' , tab: 'languages', value:{newValue}}))
                                }}/>
                         </Grid>
                    </Grid>

                    <Grid item xs={10} style={{textAlign:'center'}}>
                    <Button
                                variant="contained"
                                color="primary"
                                className={classes.icon}
                                onClick={() => { setIsExpand(false) ; handleClick() }}
                            >
                                Include
                     </Button>
                        {/* <IconButton >
                                <AddBoxIcon className={classes.icon} onClick={() => { setIsExpand(false) ; handleClick() }}/>
                        </IconButton> */}
                    </Grid>
                </Grid>
 
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
           
    )   
}

export default LanguagesComponent
