import React,{useState} from 'react'
import ColoPicker from './colorPickerBuilder'
import LineBreak from '../../util/lineBreak'
import {setTheColor} from '../../../store/rightSide/action/actionCreators'

import {useDispatch} from 'react-redux'

const Color = () => {

    const dispatch = useDispatch()
    const [mainColor, setMainColor] = useState('#f39c12');
    const [secColor, setSecColor] = useState('#fff');

    const catchMainColor = (val) => {
console.log(val);

         setMainColor(val)

            dispatch(setTheColor({
                mainColor :val,
                SecondaryColor : secColor
            }))
        } 


    const catchSecColor = (val) => {
console.log(val);

        setSecColor(val)

        dispatch(setTheColor({
            mainColor :mainColor,
            SecondaryColor : val
        }))
    
    } 
  
    // console.log(mainColor , secColor);
           

    
    
    return (
        <>
        <ColoPicker label='Primary' catchColor = {catchMainColor} name='mainColor'/>
        <LineBreak/> <br/> <br/>
        <ColoPicker label='Secondary' catchColor = {catchSecColor} name='SecondaryColor'/>
        </>
    )
}

export default Color
