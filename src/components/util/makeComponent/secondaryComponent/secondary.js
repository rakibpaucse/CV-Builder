import React,{useState} from 'react'
import {  useDispatch , useSelector } from 'react-redux'

import CheckBox from '../../checkBox';
import LineBreak from '../../lineBreak';
import SecComp from './secondaryComponent'
import { addTabValue } from '../../../../store/leftSide/action/actionCreators'
import { Container } from '@material-ui/core'
import  ListItem  from '../listItem'




const Secondary = ({label}) => {
    const [value , setvalue] = useState('')
    const dispatch = useDispatch();
    const fullList = useSelector(state => state[label].items.list)


    const handleChange = val => {
        setvalue(val)        
        dispatch(addTabValue({ oldValue :label , value : val}))
    }

 
    return (
        <div>
            <CheckBox label={value? value: label} handleChange={handleChange}/>
            <LineBreak/>


            <Container maxWidth="sm" >
                {
                     fullList.map(listItem => <ListItem itemData={listItem}/> )
                 }
                <SecComp label={label}/>
            </Container>
            


        </div>
    )
}

export default Secondary
