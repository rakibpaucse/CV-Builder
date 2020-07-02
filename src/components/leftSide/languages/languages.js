import React,{useState} from 'react'
import CheckBox from '../../util/checkBox';
import LineBreak from '../../util/lineBreak';
import SecComp from './languagesComponent'
import { addTabValue } from '../../../store/leftSide/action/actionCreators'


import { Container } from '@material-ui/core'
import {  useDispatch , useSelector } from 'react-redux'

const Languages = () => {

    const [value , setvalue] = useState('')
    const dispatch = useDispatch();
    const label = useSelector( state => Object.keys(state)[8])

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

export default Languages
