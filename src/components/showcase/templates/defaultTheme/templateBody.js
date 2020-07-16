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
        borderRadius : 10,
        padding : 0
    },
    listHead : {
        fontSize : 18 ,
       borderBottom : '2px solid #fff',
    },
    secContainer : {
        display : 'flex',
        flexWrap : 'wrap'
    },
    secItem : {
         background:'#3db6ba' ,
         padding: '5px 15px',
         borderRadius: 20,
         fontSize: 12,
         margin : '0px 3px 3px 0px'
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
        fontSize: 22,
        color : '#f39c12' ,
        textDecoration: 'underline overline' ,
        margin : '10px 0px 5px'
    }

    return (
        <Grid container spacing={0} >

            { info[objective].shouldshow && 
                <Grid  item xs={12} > 
                    <Typography style={labelStyle}> {objective.toUpperCase()} </Typography>
                   { (info[objective].objectiveHeader || info[objective].description) && 
                        <List  className={classes.list}> 

                            {info[objective].objectiveHeader &&
                            <ListItem  className={classes.listHead}> {info[objective].objectiveHeader} </ListItem>}
                            <ListItem > {info[objective].description} </ListItem>

                        </List>
                    }
                </Grid>
            }

            { info[work_experience].shouldshow && 
                <Grid  item xs={12} > 
                    <Typography style={labelStyle}> {work_experience.toUpperCase()} </Typography>

                    {(info[work_experience].list.length > 0) && 
                        <List  className={classes.list}> 
                            {
                                info.work_experience.list.map( item => 
                                    <ListItem style={{borderBottom:'2px solid #fff' , padding : '0px 5px'}}> 
                                        <ListItem> {item.orgName} </ListItem>
                                        <ListItem> {item.role} </ListItem>
                                        <ListItem> {'('}{item.startDate} {'-'} {item.endDate}{')'} </ListItem>
                                        <ListItem> {item.description} </ListItem>
                                    </ListItem>)
                            }
                        </List>
                    }
                </Grid>
            }
            { info[education].shouldshow && 
                <Grid  item xs={12} > 
                    <Typography style={labelStyle}> {education.toUpperCase()} </Typography>
                    {(info[education].list.length > 0) && 
                        <List  className={classes.list}> 
                            {
                                info[education].list.map( item => 
                                    <ListItem style={{borderBottom:'2px solid #fff' , padding : '0px 5px'}}> 
                                        <ListItem> {item.institutionName} </ListItem>
                                        <ListItem> {item.major}{`(${item.grade})`} </ListItem>
                                        { (item.startDate && item.endDate) && <ListItem> {`(${item.startDate} - ${item.endDate})`} </ListItem>}
                                        <ListItem> {item.description} </ListItem>
                                    </ListItem>)
                            }
                        </List>
                    }
                </Grid>
            }



                    {/* Six in partiton  */}



            { info[awards].shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> {`Honours & ${awards}`.toUpperCase()} </Typography>

                    {(info[awards].list.length > 0) && 
                        <List  className={classes.list}> 
                            {
                                info[awards].list.map( item => 
                                    <ListItem style={{borderBottom:'2px solid #fff' , padding : '0px 5px'}}> 
                                        <ListItem> {item.title} </ListItem>
                                        { item.subtitle && <ListItem> {item.subtitle} </ListItem>}
                                        <ListItem> {item.description} </ListItem>
                                    </ListItem>)
                            }
                        </List>
                    }

                </Grid>
            }
            { info[certifications].shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> {certifications.toUpperCase()} </Typography>

                    {(info[certifications].list.length > 0) && 
                        <List  className={classes.list}> 
                            {
                                info[certifications].list.map( item => 
                                    <ListItem style={{borderBottom:'2px solid #fff' , padding : '0px 5px'}}> 
                                        <ListItem> {item.name} </ListItem>
                                        { item.authority && <ListItem> {item.authority} </ListItem>}
                                        <ListItem> {item.description} </ListItem>
                                    </ListItem>)
                            }
                        </List>
                    }

                </Grid>
            }
            { info[skill].shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> {skill.toUpperCase()} </Typography>
                   
                    {(info[skill].list.length > 0) && 
                        <Container  className={classes.secContainer}> 
                            {
                                info[skill].list.map( item => 
                                        <span className={classes.secItem}>{item[skill]}</span>
                                    )
                            }
                        </Container>
                    }

                </Grid>
            }
            { info[hobby].shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> {hobby.toUpperCase()} </Typography>

                    {(info[hobby].list.length > 0) && 
                        <Container  className={classes.secContainer}> 
                            {
                                info[hobby].list.map( item => 
                                        <span className={classes.secItem}>{item[hobby]}</span>
                                    )
                            }
                        </Container>
                    }

                </Grid>
            }
            { info[references].shouldshow && 
                <Grid container item xs={12} > 
                    <Typography style={labelStyle}> {references.toUpperCase()} </Typography>
                           
                </Grid>
            }
            { info[languages].shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> {languages.toUpperCase()} </Typography>
                   
                </Grid>
            }
            { info[extra_curriculam].shouldshow && 
                <Grid container item xs={6} > 
                    <Typography style={labelStyle}> { `${extra_curriculam} Activities`.toUpperCase() }</Typography>
                   
                </Grid>
            }
        </Grid>
    )
}

export default TemplateBody
