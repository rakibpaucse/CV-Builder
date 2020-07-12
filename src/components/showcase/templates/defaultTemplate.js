import React,{useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    Typography,
    Container,
    Grid
    } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

        card: {
            width : '90%',
            // height : '90vh',
            // padding : 10
        },
    
    
}))    




const DefaultTemplate = ({mainData}) => {

    const classes = useStyles()


    // const handleImgLink = () => {const reader = new FileReader()
    //     reader.onload = () =>{ if(reader.readyState === 2){setImgLink(reader.result)} }
    // reader.readAsDataURL(mainData.profile.photoUrl[0])}

    return (
        <div>
                    <Container style={{ padding: '10px 0px'}}  >
                        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '90vh' }} > */}

        <Grid container spacing={2} >
           

                <Grid container item xs={9} > 

                    <Grid item style={{marginRight:20}} > 
                                <img 
                                    src={   mainData.profile.photoUrl[1] =='t' ? 
                                                mainData.profile.photoUrl: 
                                            mainData.profile.photoUrl[1]}  
                                    style={{width: 150 , height:150 , border: '1px solid'}}                       
                                /> 
                    </Grid> 

                    <Grid container item xs={7} > 
                        <Grid item xs={12} style={{fontSize:25 , fontWeight:'bold', textAlign:'left', marginBottom:'-15px'}}> 
                            <span> {mainData.profile.firstName} </span>
                            <span> {mainData.profile.lastName} </span>
                        </Grid>         
                        {/* <Grid item xs={6}> {mainData.profile.lastName} </Grid>  */}
                            <Grid style={{marginBottom:80 , color:'#ccc'}}>
                                {mainData.profile.occupation}
                            </Grid>
                    </Grid> 

                </Grid> 

                <Grid container item xs={3} style={{background:'lightblue'}}> 

                        {/* <Grid item xs={6}> {mainData.profile.firstName} </Grid>               */}
                        {/* <Grid item xs={6}> {mainData.profile.lastName} </Grid>  */}


                </Grid> 
            </Grid> 
       

                        
                        
                        {/* </Typography> */}
                        </Container>
        </div>
    )
}

export default DefaultTemplate


