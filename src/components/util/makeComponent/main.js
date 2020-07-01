import React,{useState} from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import CheckBox from '../checkBox';
import LineBreak from '../lineBreak';
import MainComponent from './mainCoponent';

import { addTabValue } from '../../../store/leftSide/action/actionCreators'
import {  useDispatch , useSelector } from 'react-redux'





const Main = ({data}) => {

    const id = data.id
    const TabName = data.name;
    const textFields = data.textFields
    const showBtn = data.showBtn
    
    const [value , setvalue] = useState('')
    const dispatch = useDispatch();
    const label = useSelector( state => Object.keys(state)[id])

    const handleChange = val => {
        setvalue(val) 
        dispatch(addTabValue({ oldValue :label , value : val}))

    }

 
    

    return (
        <div>
            <CheckBox label={value? value: TabName} handleChange={handleChange}/>
            <LineBreak/>

            <Container maxWidth="sm" >
               <MainComponent  id={id} TabName={label}  textFields={textFields} showBtn={showBtn}/>
            </Container>
        </div>
    )
}

export default Main
