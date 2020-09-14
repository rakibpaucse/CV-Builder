import React from 'react'
import default_temp from '../../../asset/temp_screenShot/default.png'
import { GridList, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    grid : {
        height:300 
    },
    gridListTile : {
        height:"320px !important" 
    }, 
    img: {
        height: 300 , width : 185 , border:'1px solid black'
    }
}))



const Template = () => {
    const classes = useStyles()
    return (
        <div>
            <GridList >
                <GridListTile className={classes.gridListTile}>
                    <img src={default_temp} className={classes.img}/>
                </GridListTile>

                <GridListTile className={classes.gridListTile}>
                    <img src={default_temp} className={classes.img}/>
                </GridListTile>

                <GridListTile className={classes.gridListTile}>
                    <img src={default_temp} className={classes.img}/>
                </GridListTile>
            </GridList>
        </div>
    )
}

export default Template
