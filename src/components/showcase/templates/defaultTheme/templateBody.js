import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    Container,
    Button,
    Grid,
    Box,
    Typography,
    List,
    ListItem
    } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    list : {
        background:'linear-gradient(90deg, rgb(249, 241, 234) 0%, rgb(252, 248, 244) 33%, rgb(255, 255, 255) 100%)',
        borderRadius : 10
    },
    listHead : {
        fontSize : 18 ,
       borderBottom : '2px solid #fff'
    }
    
}))


const TemplateBody = ({info}) => {
    const classes = useStyles()

    const objective = Object.keys(info)[1]
    const work_experience = Object.keys(info)[2]
    const education = Object.keys(info)[3]
    const awards = Object.keys(info)[4]

    const certifications = Object.keys(info)[5]
    const skill = Object.keys(info)[6]
    const hobby = Object.keys(info)[7]
    const languages = Object.keys(info)[8]

    const references = Object.keys(info)[9]
    const extra_curriculam = Object.keys(info)[10]

    const labelStyle = {
        fontSize: 25,
        color : '#f39c12' ,
        textDecoration: 'underline overline' ,
        margin : '10px 0px 5px'
    }

    return (
        <Grid container spacing={0} >

            { info[objective].shouldshow && 
                <Grid  item xs={12} > 
                    <Typography style={labelStyle}> {objective} </Typography>
                   {info[objective].objectiveHeader && 
                        <List  className={classes.list}> 
                            <ListItem  className={classes.listHead}> {info[objective].objectiveHeader} </ListItem>
                            <ListItem> {info[objective].description} </ListItem>
                        </List>
                    }
                </Grid>
            }

            { info[work_experience].shouldshow && 
                <Grid  item xs={12} > 
                    <Typography style={labelStyle}> {work_experience} </Typography>

                    {(info[work_experience].list.length > 0) && 
                        <List  className={classes.list}> 
                            {
                                info.work_experience.list.map( item => 
                                    <ListItem> 
                                        <ListItem> {item.orgName} </ListItem>
                                        <ListItem> {item.role} </ListItem>
                                        <ListItem> {item.description} </ListItem>
                                    </ListItem>)
                            }
                        </List>
                    }
                  {/* <Box> {
                       info.work_experience.list.map( item => <li> { item.orgName} </li>)
                   }</Box> */}
                </Grid>
            }
            { info.education.shouldshow && 
                <Grid  item xs={12} > 
                    <Typography style={labelStyle}> Education </Typography>
                   
                </Grid>
            }



                    {/* Six in partiton  */}



            { info.awards.shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> Honours & Awards </Typography>
                   
                </Grid>
            }
            { info.certifications.shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> Certifications </Typography>
                   
                </Grid>
            }
            { info.skill.shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> skill </Typography>
                   
                </Grid>
            }
            { info.hobby.shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> hobby </Typography>
                   
                </Grid>
            }
            { info.references.shouldshow && 
                <Grid container item xs={12} > 
                    <Typography style={labelStyle}> References </Typography>
                           
                </Grid>
            }
            { info.languages.shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> Languages </Typography>
                   
                </Grid>
            }
            { info.extra_curriculam.shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> Extra Curriculam Activities </Typography>
                   
                </Grid>
            }
        </Grid>
    )
}

export default TemplateBody
