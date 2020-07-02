import React,{useState} from 'react'
import { Container } from '@material-ui/core'
import {  useDispatch , useSelector } from 'react-redux'

import CheckBox from '../checkBox';
import LineBreak from '../lineBreak';
import MainComponent from './mainCoponent';
import { addTabValue } from '../../../store/leftSide/action/actionCreators'
import ListItem from './listItem';





const Main = ({data}) => {

    const id = data.id
    const TabName = data.name;
    const textFields = data.textFields
    const showBtn = data.showBtn
    
    const [value , setvalue] = useState('')
    const dispatch = useDispatch();
    const label = useSelector( state => Object.keys(state)[id])
    const fullList = useSelector( state => state[label].items.list)

    const handleChange = val => {
        setvalue(val) 
        dispatch(addTabValue({ oldValue :label , value : val}))

    }

    // console.log(fullList)
     

    return (
        <div>


            <CheckBox label={value? value: TabName} handleChange={handleChange}/>
            <LineBreak/>

            <Container maxWidth="sm" >
                {
                    showBtn && fullList.map(listItem => <ListItem itemData={listItem}/> )
                 }

               <MainComponent  id={id} TabName={label}  textFields={textFields} showBtn={showBtn}/>
            </Container>
        </div>
    )
}

export default Main
