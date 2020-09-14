import React from 'react'
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux'
import {setTheLang} from '../../../store/rightSide/action/actionCreators'

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
        textAlign : 'center'
    }
}))

const Language = () => {

    const dispatch = useDispatch()
    const handleClick = e => {
        dispatch(setTheLang(e.target.innerText))
    }
    const classes = useStyles()
    return (
        <div>
            <List className={classes.list}>
                <ListItem onClick={handleClick}>
                     Select English
                </ListItem>
                <ListItem onClick={handleClick}>
                    বাংলা নির্বাচন করুন
                </ListItem>
                <ListItem onClick={handleClick}>
                    हिंदी का चयन करें
                </ListItem>
                <ListItem onClick={handleClick}>
                    حدد اللغة العربية   
                </ListItem>
                <ListItem onClick={handleClick}>
                        选择中文 正确地
                </ListItem>
                <ListItem onClick={handleClick}>
                        Deutsch auswählen
                </ListItem>
                <ListItem onClick={handleClick}>
                    नेपाली छान्नुहोस्
                </ListItem>
                <ListItem onClick={handleClick}>
                    اردو منتخب کریں 
                </ListItem>
                <ListItem onClick={handleClick}>
                    ગુજરાતી પસંદ કરો
                </ListItem>
            </List>
        </div>
    )
}

export default Language




