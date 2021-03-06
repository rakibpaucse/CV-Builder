import React,{useState} from 'react'
import {ExpansionPanel , Typography } from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import {  IconButton , Grid } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import {  useDispatch , useSelector } from 'react-redux'
import { addlistItem } from '../../../../store/leftSide/action/actionCreators'
import { resetObj } from '../../../../store/leftSide/action/actionCreators'

import Textfield from '../../textfield';



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
    grid:{
        display : 'flex',
        justifyContent : 'space-Around'
        },
    iconbtn:{
    
        },
    icon:{
            fill : '#1a8cc4' , 
            fontSize : 35
        }
}));

const SecondaryComponent = ({label}) => {
    const [isExpand , setIsExpand] = useState(false)
    const classes = useStyles();
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
            >
                        <Typography className={classes.heading}>{`Add ${label}`}</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
                  
                    <Grid container spacing={3} style={{flexGrow : 1}}>
                        <Grid item xs={10}>
                            <Textfield label={label} tab={label} placeholder={label}/>
                        </Grid>
                        <Grid item xs={2} className={classes.grid}>
                            <IconButton className={classes.iconbtn}>
                                <AddBoxIcon className={classes.icon} onClick={() => {  setIsExpand(false) ; handleClick()} }/>
                            </IconButton>

                        </Grid>
                    </Grid>
                
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
           
    )
}

export default SecondaryComponent
