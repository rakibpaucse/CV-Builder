import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Button } from '@material-ui/core';
import {setTheAction} from '../../store/rightSide/action/actionCreators'
import { resetStore , demoStore} from '../../store/leftSide/action/actionCreators'
import {  useDispatch  } from 'react-redux'

const useStyles = makeStyles((theme) => ({ 
    card: {
        padding : '25px 36px',
        marginBottom : 10,
        background : '#f5f5f5'
    },
    content: {
        fontSize : 12
    },
    btn : {
        padding : '5px 10px',
        fontSize : 10,
        background : '#4682b4',
        color : '#fff'

    }
}))


const MakeCard = ({heading , content , btn , value , action='null'}) => {
    const classes = useStyles()
    const dispatch = useDispatch();


    const handleClick = () => {

        if(typeof(value) == 'boolean'){
            
            dispatch(setTheAction({action:action , value: !value}))

            action == 'getDemoData' ? 
            dispatch(demoStore()) : dispatch(resetStore())
            
        }else{
            window.location.href = value;
        }
    }

    return (
        <Card className = {classes.card}>
            <Typography variant='h6' gutterBottom style={{color:'#4682b4'}}>{heading}</Typography>
            <p className={classes.content}>
                {content}
            </p>

            <Button className={classes.btn} onClick={handleClick}> 
                {btn} 
            </Button>
        </Card>
    )
}

export default MakeCard
