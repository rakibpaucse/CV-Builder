import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Textfield from '../../util/textfield';
import TextArea from '../../util/textArea'

const useStyles = makeStyles((theme) => ({
  root: {
        width: '108%',
        marginLeft : '-12px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  gridRoot : {
     flexGrow:1
  }
}));

const WorkComponent = ({label}) => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>{label}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography component={'div'}>
                <div className={classes.gridRoot}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Textfield label='Name'/>
                        </Grid> 

                        <Grid item xs={12}>
                            <Textfield label='Role'/>
                        </Grid> 

                        {/* <Grid item xs={12}> */}

                            <Grid item xs={6}>
                                <Textfield label='Start Date'/>
                            </Grid> 
                            <Grid item xs={6}>
                                <Textfield label='End Date'/>   
                            </Grid> 
                            
                        {/* </Grid>  */}

                        <Grid item xs={12}>
                            <TextArea label='DesCription'/>
                        </Grid>  
                    </Grid>
                </div>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
}

export default WorkComponent
