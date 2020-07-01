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

const TextArea = ({label}) => {
    const dispatch = useDispatch();

    const valueOfDescription = useSelector(state => state[label].items.description)

    const onChange = e => {

        dispatch(addInputValue({
            value:e.target.value ,
            path: 'description',
            tab : label
            }))
    }



    return (
        <>
            <Typography variant="overline" display="block" gutterBottom>
                DesCriPtion
            </Typography>
            <TextareaAutosize 
            aria-label="minimum height" 
            style={style} rowsMin={12}
            onChange = {onChange}
            value={valueOfDescription}
             placeholder={`Write About Your ${label}...`} />
      </>
    )
}

export default TextArea
