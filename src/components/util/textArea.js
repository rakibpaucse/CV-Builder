import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';

const style = {
        width:'90%' ,
        background : '#EAEAEA',
        border:'none',
        padding:20,
        fontSize: 15,
        textAlign : 'center'
    }

const TextArea = ({label}) => {
    return (
        <>
            <Typography variant="overline" display="block" gutterBottom>
                DesCription
            </Typography>
            <TextareaAutosize aria-label="minimum height" style={style} rowsMin={12} placeholder={`Write About Your ${label}...`} />
      </>
    )
}

export default TextArea
