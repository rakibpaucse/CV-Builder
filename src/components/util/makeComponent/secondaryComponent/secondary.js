import React,{useState} from 'react'
import CheckBox from '../../checkBox';
import LineBreak from '../../lineBreak';
import SecComp from './secondaryComponent'
import { addTabValue } from '../../../../store/leftSide/action/actionCreators'
import {  useDispatch } from 'react-redux'

import { Container } from '@material-ui/core'




const Secondary = ({label}) => {
    const [value , setvalue] = useState('')
    const dispatch = useDispatch();
     
    const handleChange = val => {
        setvalue(val)        
        dispatch(addTabValue({ oldValue :label , value : val}))
    }


    return (
        <div>
            <CheckBox label={value? value: label} handleChange={handleChange}/>
            <LineBreak/>


            <Container maxWidth="sm" >
                <SecComp label={label}/>
            </Container>
            


        </div>
    )
}

export default Secondary
