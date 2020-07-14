import React,{useState} from 'react'
import {  useDispatch , useSelector } from 'react-redux'

import CheckBox from '../../checkBox';
import LineBreak from '../../lineBreak';
import SecComp from './secondaryComponent'
import { addTabValue , deleteListValue} from '../../../../store/leftSide/action/actionCreators'
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

    const handleDelete = index => {
        const newList = fullList.splice(index , 1 )
        dispatch(deleteListValue({ tab : label , list : fullList}))
    }

  
    return (
        <div>
            <CheckBox label={value? value: label} handleChange={handleChange}/>
            <LineBreak/>
            <br/>


            <Container maxWidth="sm" >
                {
                     fullList.map((listItem ,index ) => <ListItem itemData={listItem} index={index} handleDelete={handleDelete}/> )
                 }
                <SecComp label={label}/>
            </Container>
            


        </div>
    )
}

export default Secondary
