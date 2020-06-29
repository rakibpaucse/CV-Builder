import React from 'react'
import {ExpansionPanel , Typography , Grid} from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

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
    }

}));

const LanguagesComponent = ({label}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <ExpansionPanel>

            <ExpansionPanelSummary
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
                        <Textfield label='Language Name'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Textfield label='Level'/>
                    </Grid>
                    <Grid container spacing={3} style={{flexGrow : 1}} className={classes.container}>
                        <Grid item xs={5}>
                                <Typography variant='h6' className={classes.label} > Rate Yourself :  </Typography>
                        </Grid>
                        <Grid item xs={6}>
                                <Rating name="size-medium"  defaultValue={2} style={{textAlign:'center' , marginTop:5}}/> 
                         </Grid>
                    </Grid>
                </Grid>
 
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
           
    )   
}

export default LanguagesComponent
