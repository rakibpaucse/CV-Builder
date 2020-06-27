import React,{useState} from 'react'
import CheckBox from '../../util/checkBox'
import LineBreak from '../../util/lineBreak';
import TextArea from '../../util/textArea';

const Objective = () => {

    const [value , setvalue] = useState('')

    const handleChange = val => {
        setvalue(val)
        console.log(val);   
    }

    let tabName = 'Objective';

    return ( 
        <div>
            <CheckBox label={value? value: tabName} handleChange={handleChange}/>

            <LineBreak/>
           
            <TextArea label={tabName} />
        </div>
    )
}

export default Objective
