import React,{useState} from 'react'
import { Fab  } from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Draggable from 'react-draggable';


const DraggbleTheme = () => {

    const [dark, setDark] = useState(true);
    const [position, setPosition] = useState({x: 250, y: 52});

    const onControlledDrag = (e, position) => {
        const {x, y} = position;
        setPosition({x: x, y: y})
      };

    const handleChange = (e) => {
      setDark(prev => !prev)
console.log(dark);

    if(dark) {
        document.querySelector('body').style.background = '#3e3d3c'
        document.querySelector('body').style.color = 'white'

        // document.querySelector('body').style.filter = 'invert(1) hue-rotate(180deg)'
    }else{
        document.querySelector('body').style.background = 'white'
        document.querySelector('body').style.color = 'black'

        // document.querySelector('body').style.filter = 'invert(1) hue-rotate(180deg)'
    }

      
    };


    return (
        <div>
            <Draggable
                position={position}
                bounds="body"
                onDrag={onControlledDrag}
                scale={0.9}
                // style={{background:'red'}}
            >

                    <Fab style={dark ? {background:'black'} : {background:'#ddd'} }  onClick={handleChange}>
                        { dark ? 
                                <Brightness3Icon style={{color:'#ddd'}} /> 
                                : <WbSunnyIcon style={{color:'black'}} />}
                    </Fab> 
            </Draggable>
        </div>
    )
}

export default DraggbleTheme
