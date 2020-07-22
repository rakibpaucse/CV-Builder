import React,{useState} from 'react'
import { SketchPicker } from "react-color";
import { Box } from '@material-ui/core';

const Color = () => {
    const [color, setColor] = useState();
    const handleChange = color => setColor(color.hex);
    return (
        <div>
            Choose A Color From The Color Picker.  
            <SketchPicker color={color} onChangeComplete={handleChange} />
            You Have Choosed <Box bgcolor={color} p={4}>  </Box>
        </div>
    )
}

export default Color
