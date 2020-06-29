import React,{useState} from 'react'
import CheckBox from '../../checkBox';
import LineBreak from '../../lineBreak';
import SecComp from './secondaryComponent'

import { Container } from '@material-ui/core'




const SecondaryComponent = ({label}) => {
    const [value , setvalue] = useState('')

    const handleChange = val => {
        setvalue(val)
        console.log(val);   
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

export default SecondaryComponent
