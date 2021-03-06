import React from 'react'
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux'
import {setTheFont} from '../../../store/rightSide/action/actionCreators'

const useStyles = makeStyles(theme => ({
    list : {
        fontSize : 20,
        padding : '15px',

        '& > *' : {
            marginBottom : 15,
            border : '2px solid #008080',
            padding : '5px 15px',
            textAlign:'center',
            cursor : 'pointer'
        }
    },
    listItem : {

    }
}))

const Font = () => {

    const dispatch = useDispatch()
    const handleClick = e => {
        dispatch(setTheFont(e.target.innerText))
    }
    const classes = useStyles()
    return (
        <div>
            <List className={classes.list}>
                <ListItem onClick={handleClick}>
                    'Bree Serif', serif
                </ListItem>
                <ListItem onClick={handleClick}>
                    'Dosis', sans-serif
                </ListItem>
                <ListItem onClick={handleClick}>
                    'Playfair Display', serif
                </ListItem>
                <ListItem onClick={handleClick}>
                    'Roboto Condensed', sans-serif
                </ListItem>
                <ListItem onClick={handleClick}>
                    'Roboto Mono', monospace
                </ListItem>
                <ListItem onClick={handleClick}>
                    'Roboto Slab', serif
                </ListItem>
                <ListItem onClick={handleClick}>
                    'Teko', sans-serif
                </ListItem>
                <ListItem onClick={handleClick}>
                    'Teko', sans-serif 
                </ListItem>
                <ListItem onClick={handleClick}>
                    Varela Round
                </ListItem>
            </List>
        </div>
    )
}

export default Font
