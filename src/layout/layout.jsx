import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LeftSide from '../pages/leftSide/leftSide'
import ShowCase from '../pages/showCase/showCase'
import RightSide from '../pages/rightSide/rightSide'
import DarkBtn from '../components/util/draggableBtn/darkTheme'

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
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <LeftSide className={classes.paper}/>
                    </Grid>
                    <Grid item xs={6}>
                            <ShowCase className={classes.paper}/>
                    </Grid>
                    <Grid item xs={3}>
                        <RightSide className={classes.paper}/>

                        <DarkBtn/>
                    </Grid>                
                </Grid>
            </div>
    )
}

export default Pages






