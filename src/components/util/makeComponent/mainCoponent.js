import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Textfield from '../textfield';
import TextArea from '../textArea'
import { Button } from '@material-ui/core';

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
  gridRoot : {
     flexGrow:1
  }
}));

const WorkComponent = ({TabName  , textFields , showBtn}) => {
    const classes = useStyles();
const tab = TabName

    const CollapseComponents = []
    const UnCollapseComponents = []

     textFields.map( tf => 
        {  
               
                if (typeof(tf) === 'object')
                {
                    let divValue = 12 /  tf.length;
                    tf.map( field =>  CollapseComponents.push(<Grid item xs={divValue}>
                                                                <Textfield label={field} tab={tab} />
                                                            </Grid>))


                } else {
                    UnCollapseComponents.push(<Grid item xs={12}>
                                                    <Textfield label={tf} tab={tab} />
                                                </Grid> )
                }
       })


    return (

    <div className={classes.root}>
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>{`Add ${TabName}`}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                <div className={classes.gridRoot}>
                    <Grid container spacing={3}>

                        {UnCollapseComponents } { CollapseComponents}

                        <Grid item xs={12}>
                            <TextArea label={TabName}/>
                        </Grid>  
                    </Grid>

                            {
                                showBtn &&  <Button variant="contained" color="primary" href="#contained-buttons">
                                                    Link
                                            </Button>
                            }
                </div>
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
}

export default WorkComponent
