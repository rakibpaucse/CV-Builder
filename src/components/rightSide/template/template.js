import React from 'react'
import default_temp from '../../../asset/temp_screenShot/default.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grid : {
        height:300 ,
        
    },
    gridListTile : {
        height:"320px !important" 
    }, 
    img: {
        height: 300 ,
        Width : 185 ,
         border:'1px solid black', 
         margin : '0px 10px 10px 0px',
         flex : 1,

        [theme.breakpoints.up(1200)]: {
            height : 210, 
            width : 122
        }
    }
}))


const Template = () => {
    const classes = useStyles()
    return (
        <div style={{display:'flex', flexWrap:'wrap' }} >
            {/* <GridList >
                <GridListTile className={classes.gridListTile}>
                    <img src={default_temp} className={classes.img} alt='Demo Img' />
                </GridListTile>

                <GridListTile className={classes.gridListTile}>
                    <img src={default_temp} className={classes.img} alt='Demo Img'/>
                </GridListTile>

                <GridListTile className={classes.gridListTile}>
                    <img src={default_temp} className={classes.img} alt='Demo Img'/>
                </GridListTile>
            </GridList> */}


            <div><img src={default_temp} className={classes.img} alt='Demo Img' /></div>
            <div><img src={default_temp} className={classes.img} alt='Demo Img' /></div>
            <div><img src={default_temp} className={classes.img} alt='Demo Img' /></div>

        </div>
    )
}

export default Template
