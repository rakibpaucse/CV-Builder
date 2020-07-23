import React,{useState} from 'react'
import { Container } from '@material-ui/core'
import {  useDispatch , useSelector } from 'react-redux'

import CheckBox from '../checkBox';
import LineBreak from '../lineBreak';
import MainComponent from './mainCoponent';
import { addTabValue , deleteListValue } from '../../../store/leftSide/action/actionCreators'
import ListItem from './listItem';





const Main = ({data}) => {

    const id = data.id
    const TabName = data.name;
    const textFields = data.textFields
    const showBtn = data.showBtn
    
    const [value , setvalue] = useState('')
    const dispatch = useDispatch();
    const label = useSelector( ({leftReducer}) => Object.keys(leftReducer)[id])
    const fullList = useSelector( ({leftReducer}) => leftReducer[label].items.list)

    const handleChange = val => {
        setvalue(val) 
        dispatch(addTabValue({ oldValue :label , value : val}))

    }

    const handleDelete = index => {
        const newList = fullList.splice(index , 1 )
        // console.log(' index :' , index)
        // console.log(' new list :' , newList)
        dispatch(deleteListValue({ tab : label , list : fullList}))
    }

  
     

    return (
        <div>

            <CheckBox label={value? value: TabName} handleChange={handleChange}/>
            <LineBreak/>
                <br/>
            <Container maxWidth="sm" >
                {
                    showBtn && fullList.map((listItem , index) => <ListItem itemData={listItem} index={index} handleDelete={handleDelete}/> )
                }

               <MainComponent  id={id} TabName={label}  textFields={textFields} showBtn={showBtn}/>
            </Container>
        </div>
    )
}

export default Main
