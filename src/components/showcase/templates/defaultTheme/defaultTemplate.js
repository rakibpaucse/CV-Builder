import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    List,
    ListItemIcon
    } from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts';
import LanguageIcon from '@material-ui/icons/Language';
import TemplateBody from './templateBody'
import LineBreak from '../../../util/lineBreak';


const useStyles = makeStyles((theme) => ({ 
    root : {
         padding: '10px 0px',
    },
    imgContainer: {
        marginRight:20
    },
    // nameContainer: {
    //     fontSize:30 , 
    //     fontWeight:'bold',
    //     textAlign:'left',
    //     marginBottom:'-15px',
    //     fontFamily: "'Bree Serif', serif",

    //     [theme.breakpoints.up(1200)]: {
    //         marginBottom:'0px',
    //       }  
    // },

    nameContainer: {
        lineHeight : 0 ,
        fontSize:30 , 

        [theme.breakpoints.down(1700)]: {
            fontSize:25 ,
          } ,
          
          [theme.breakpoints.down(1500)]: {
            fontSize:22 ,
          }  ,

        //   [theme.breakpoints.down(1300)]: {
        //     fontSize:17 ,
        //   }  
    },
    img: {
        width: 150 ,
        height:150 ,
        border: '1px solid',

        [theme.breakpoints.down(1700)]: {
            width: 135 ,
            height:135 ,
          },

        [theme.breakpoints.down(1300)]: {
            width: 130 ,
            height:130 ,
        }  

    },
    occuPation:{
        marginBottom:80,

        [theme.breakpoints.down(1700)]: {
            marginBottom:'0px',
          }
    },
    location: {
        textAlign:'center',
    } ,
    iconHolder : {
        width:'95%', 
        justifyContent: 'start',
        fontSize : 14,
        marginTop : 2,

    },
    icon : {
        fill: 'chocolate',
        marginRight : 10 ,
        fontSize : 20,

        [theme.breakpoints.down(1700)]: {
            // paddingleft: '-10px',
            fontSize : 15,
          }
    },


    container : {
        width : '100%',
        display : 'grid',
        height : 150,
        gridTemplateColumns : '14fr 5fr',
        marginBottom : 10
    },

    imgAndName : {
        display : 'flex',
    },

    locationAndContacts : {

    },

    details : {
        fontSize : 16, textAlign : 'right' ,

        [theme.breakpoints.down(1700)]: {
            fontSize : 14
          },

          [theme.breakpoints.down(1300)]: {
            fontSize : 13
          }
    },

    setMargin : {
        marginLeft : 25 ,

        [theme.breakpoints.down(1300)]: {
            marginLeft : 13
          }
    }


 }))    




const DefaultTemplate = ({mainData}) => {
    const classes = useStyles()


    return (
        <div>
            <div className={classes.container}>
                <div className={classes.imgAndName} >
                    <img src={   mainData.profile.photoUrl[1] ==='t' ? 
                                    mainData.profile.photoUrl: 
                                    mainData.profile.photoUrl[1]}  
                            className={classes.img}                     
                        crossorigin/> 

                    <div className={classes.setMargin} >

                        <div > 
                            <p className={classes.nameContainer} >
                                {mainData.profile.firstName} {' '}
                                {mainData.profile.lastName}
                            </p>

                        </div>
                        <div>
                            {mainData.profile.occupation}   
                        </div>
                        
                    </div>
                    
                </div>
                <div className={classes.locationAndContacts} >
                <List >
                {mainData.profile.parmanentAddress && <ListItemIcon className={classes.iconHolder}>
                        <LocationOnIcon className={classes.icon}/>
                        <span className={classes.details} >{mainData.profile.parmanentAddress}</span>
                    </ListItemIcon>}

                    {mainData.profile.currentAddress && <ListItemIcon className={classes.iconHolder}>
                        <LocationOnIcon className={classes.icon}/>
                        <span className={classes.details}>{`Currently ${mainData.profile.currentAddress}`}</span>
                    </ListItemIcon>}

                    {mainData.profile.phoneNumber && <ListItemIcon className={classes.iconHolder}>
                        <PhoneIcon className={classes.icon}/>
                        <span className={classes.details}>{mainData.profile.phoneNumber}</span>
                    </ListItemIcon>}

                    {mainData.profile.email && <ListItemIcon className={classes.iconHolder}>
                        <DraftsIcon className={classes.icon}/>
                        <span className={classes.details}>{mainData.profile.email}</span>
                    </ListItemIcon>}

                    {mainData.profile.website && <ListItemIcon className={classes.iconHolder} >
                        <LanguageIcon className={classes.icon}/>
                        <span className={classes.details}>{mainData.profile.website}</span>
                    </ListItemIcon>}
                </List>
                </div>
            </div>

            <LineBreak/>

            <TemplateBody info ={mainData}/>
        </div>
    )
}

export default DefaultTemplate


 {/* <Container className={classes.root}  >
        <Grid container spacing={0} >
            <Grid container item xs={9}  > 
                <Grid item className={classes.imgContainer} > 
                        <img 
                            src={   mainData.profile.photoUrl[1] ==='t' ? 
                                        mainData.profile.photoUrl: 
                                    mainData.profile.photoUrl[1]}  
                            className={classes.img}                     
                        /> 
                </Grid> 

                <Grid container item xs={7} > 
                    <div className={classes.nameContainer}> 
                        <span style={{fontSize:25}}> {mainData.profile.firstName} {mainData.profile.lastName} </span>
                    </div>         
                    <Grid className={classes.occuPation}>
                        {mainData.profile.occupation}
                    </Grid>
                </Grid> 
            </Grid> 

            <Grid  item xs={3}  className={classes.location}> 
                <List >
                {mainData.profile.parmanentAddress && <ListItemIcon className={classes.iconHolder}>
                        <LocationOnIcon className={classes.icon}/>
                        <span>{mainData.profile.parmanentAddress}</span>
                    </ListItemIcon>}

                    {mainData.profile.currentAddress && <ListItemIcon className={classes.iconHolder}>
                        <LocationOnIcon className={classes.icon}/>
                        <span>{`Currently ${mainData.profile.currentAddress}`}</span>
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
            </Container> */}
