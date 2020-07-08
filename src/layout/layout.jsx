import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { PDFViewer } from '@react-pdf/renderer';

// import { LeftSide, ShowCase , RightSide } from '../pages/pages'
import LeftSide from '../pages/leftSide/leftSide'
import ShowCase from '../pages/showCase/showCase'
import RightSide from '../pages/rightSide/rightSide'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const Pages = () => {

    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <LeftSide className={classes.paper}>xs=12</LeftSide>
                    </Grid>
                    <Grid item xs={6}>
                            <ShowCase className={classes.paper}>xs=6</ShowCase>
                    </Grid>
                    <Grid item xs={3}>
                        <RightSide className={classes.paper}>xs=6</RightSide>
                    </Grid>                
                </Grid>
            </div>
    )
}

export default Pages






