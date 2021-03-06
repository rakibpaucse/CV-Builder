import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';

import {addInputValue} from '../../store/leftSide/action/actionCreators'
import {  useDispatch , useSelector } from 'react-redux'


const style = {
        width:'90%' ,
        background : '#EAEAEA',
        border:'none',
        padding:20,
        fontSize: 15,
        textAlign : 'center'
    }

const labelStyle = {
    color: 'green',
    fontSize : 15,
    padding: '0px 20px'
}

const TextArea = ({label}) => {
    const dispatch = useDispatch();

    const valueOfDescription = useSelector(({leftReducer}) => leftReducer[label].items.description)
    // const valueOfDescription = useSelector(state => state[label].items.description)

    const onChange = e => {

        dispatch(addInputValue({
            value:e.target.value ,
            path: 'description',
            tab : label
            }))
    }



    return (
        <>
            <Typography variant="overline" display="block" gutterBottom style={labelStyle}>
                DesCriPtion
            </Typography>
            <TextareaAutosize 
            aria-label="minimum height" 
            style={style} rowsMin={10}
            onChange = {onChange}
            value={valueOfDescription}
             placeholder={`Write About Your ${label}...`} />
      </>
    )
}

export default TextArea
