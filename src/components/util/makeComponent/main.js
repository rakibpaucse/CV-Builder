import React,{useState} from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import CheckBox from '../checkBox';
import LineBreak from '../lineBreak';
import MainComponent from './mainCoponent';




const useStyles = makeStyles((theme) => ({

container : {  
                padding:0,
            }
  
}));


const Main = ({data}) => {
    
    const classes = useStyles();
    const [value , setvalue] = useState('')

    const handleChange = val => {
        setvalue(val) 
        console.log(val);   
    }

    const TabName = data.name;
    const textFields = data.textFields
    const showBtn = data.showBtn
    

    return (
        <div>
            <CheckBox label={value? value: TabName} handleChange={handleChange}/>
            <LineBreak/>

            <Container maxWidth="sm" >
               <MainComponent   TabName={TabName}  textFields={textFields} showBtn={showBtn}/>
            </Container>
        </div>
    )
}

export default Main
