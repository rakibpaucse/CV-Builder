import React,{useState ,useEffect} from 'react'
import { ChromePicker } from "react-color";
import { Card } from '@material-ui/core';


const ColorPickerBuilder = ({label , catchColor , name }) => {
    const [mainColor, setMainColor] = useState();

    useEffect( () => catchColor(mainColor) , [mainColor])

    const handleChange = color => setMainColor(color.hex);
    

    return (
        <Card style={{minWidth:300 , textAlign:'center'}}>
                    
                    <p style={{margin:'10px 0'}}> Choose A  
                        <span style={{color:'#df143c'}}> {label} </span>
                        Color From The Color Picker. 
                    </p>
                    <div  style={{
                            display:'flex',
                            justifyContent:'center',
                            margin: '15px 0',
                        }}>
                        <ChromePicker  
                        color={mainColor} 
                        onChangeComplete={handleChange} 
                    /></div>

                <p style={{marginBottom:10}}>
                        You Have Choosed 
                            <span  
                                style={{width:'15%' ,height: 30 , 
                                        backgroundColor:`${mainColor}` ,
                                        border:'1px solid',
                                        margin:'20px' ,
                                        padding:'6px 20px'}}> 
                                        &nbsp;&nbsp; 
                            </span>
                    </p> 

                </Card>
    )
}

export default ColorPickerBuilder
