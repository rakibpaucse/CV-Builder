import React,{useState} from 'react'
import CheckBox from '../../util/checkBox';
import LineBreak from '../../util/lineBreak';
import SecComp from './languagesComponent'

import { Container } from '@material-ui/core'

const Languages = () => {

    const [value , setvalue] = useState('')

    const handleChange = val => {
        setvalue(val)
        console.log(val);    
    }

    const label = 'Language'

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
