import React from 'react'
import {ExpansionPanel , Typography } from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import {  IconButton , Grid} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

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
        fontSize:'38px'
        }
}));

const SecondaryComponent = ({label}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <ExpansionPanel>

            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                        <Typography className={classes.heading}>{`Add ${label}`}</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
                  
                    <Grid container spacing={3} style={{flexGrow : 1}}>
                        <Grid item xs={10}>
                            <Textfield label={label} />
                        </Grid>
                        <Grid item xs={2} className={classes.grid}>
                            <IconButton className={classes.iconbtn}>
                                <AddBoxIcon className={classes.icon} />
                            </IconButton>
                        </Grid>
                    </Grid>
                
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
           
    )
}

export default SecondaryComponent
