import React,{useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    Typography,
    Container,
    Grid,
    List,
    ListItemIcon
    } from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({ 
    root : {
         padding: '10px 0px'
    },
    imgContainer: {
        marginRight:20
    },
    nameContainer: {
        fontSize:30 , 
        fontWeight:'bold',
        textAlign:'left',
        marginBottom:'-15px',
        fontFamily: "'Bree Serif', serif",
        
    },
    img: {
        width: 150 ,
        height:150 ,
        border: '1px solid'
    },
    occuPation:{
        marginBottom:80
    },
    location: {
        textAlign:'center'
    } ,
    iconHolder : {
        width:'95%', 
        justifyContent: 'start',
        fontSize : 14,
        marginTop : 10
    },
    icon : {
        fill: '#ee8f2f',
        marginRight : 10 ,
        fontSize : 20,
    }


 }))    



const DefaultTemplate = ({mainData}) => {

    const classes = useStyles()


    // const handleImgLink = () => {const reader = new FileReader()
    //     reader.onload = () =>{ if(reader.readyState === 2){setImgLink(reader.result)} }
    // reader.readAsDataURL(mainData.profile.photoUrl[0])}

    return (
        <div>
            <Container className={classes.root}  >
        <Grid container spacing={2} >
            <Grid container item xs={9} > 
                <Grid item className={classes.imgContainer} > 
                        <img 
                            src={   mainData.profile.photoUrl[1] =='t' ? 
                                        mainData.profile.photoUrl: 
                                    mainData.profile.photoUrl[1]}  
                            className={classes.img}                     
                        /> 
                </Grid> 

                <Grid container item xs={7} > 
                    <Grid item xs={12} className={classes.nameContainer}> 
                        <span> {mainData.profile.firstName} </span>
                        <span> {mainData.profile.lastName} </span>
                    </Grid>         
                    <Grid className={classes.occuPation}>
                        {mainData.profile.occupation}
                    </Grid>
                </Grid> 
            </Grid> 

            <Grid  item xs={3} className={classes.location}> 
                <List >
                {mainData.profile.parmanentAddress && <ListItemIcon className={classes.iconHolder}>
                        <LocationOnIcon className={classes.icon}/>
                        <span>{mainData.profile.parmanentAddress}</span>
                    </ListItemIcon>}

                    {mainData.profile.phoneNumber && <ListItemIcon className={classes.iconHolder}>
                        <PhoneIcon className={classes.icon}/>
                        <span>{mainData.profile.phoneNumber}</span>
                    </ListItemIcon>}

                    {mainData.profile.email && <ListItemIcon className={classes.iconHolder}>
                        <DraftsIcon className={classes.icon}/>
                        <span>{mainData.profile.email}</span>
                    </ListItemIcon>}

                    {mainData.profile.website && <ListItemIcon className={classes.iconHolder} >
                        <LanguageIcon className={classes.icon}/>
                        <span>{mainData.profile.website}</span>
                    </ListItemIcon>}
                </List>
            </Grid> 
            
        </Grid> 
            </Container>
        </div>
    )
}

export default DefaultTemplate


