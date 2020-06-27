import React,{useState} from 'react'
import CheckBox from '../util/checkBox'

const Objective = () => {

    const [value , setvalue] = useState('')

    const handleChange = val => {
        setvalue(val)
        console.log(val);   
    }

    return ( 
        <div>
            <CheckBox label={value? value: 'Objective'} handleChange={handleChange}/>
        </div>
    )
}

export default Objective
