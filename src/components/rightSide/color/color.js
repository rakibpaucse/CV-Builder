import React,{useState} from 'react'
import ColoPicker from './colorPickerBuilder'
import LineBreak from '../../util/lineBreak'
import {setTheColor} from '../../../store/rightSide/action/actionCreators'

import {useDispatch ,useSelector} from 'react-redux'

const Color = () => {

    const dispatch = useDispatch() 
    const firstColor = useSelector(({rightReducer}) => rightReducer.color.mainColor)
    const [mainColor, setMainColor] = useState(firstColor);
    const [secColor, setSecColor] = useState('#fff');

    const catchMainColor = (val) => {
         setMainColor(val)

            dispatch(setTheColor({
                mainColor :val,
                SecondaryColor : secColor
            }))
        } 


    const catchSecColor = (val) => {
        if(secColor != val){
        setSecColor(val)
        dispatch(setTheColor({
            mainColor :mainColor,
            SecondaryColor : val
        }))
        }
    
    } 
           

    
    
    return (
        <>
        <ColoPicker label='Primary' catchColor = {catchMainColor} name='mainColor'/>
        <LineBreak/> <br/> <br/>
        <ColoPicker label='Secondary' catchColor = {catchSecColor} name='SecondaryColor'/>
        </>
    )
}

export default Color
