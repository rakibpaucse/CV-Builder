import React,{useState} from 'react'
import CheckBox from '../../util/checkBox';
import LineBreak from '../../util/lineBreak';
import SecComp from './languagesComponent'
import { addTabValue , deleteListValue } from '../../../store/leftSide/action/actionCreators'
import ListItem from '../../util/makeComponent/listItem'



import { Container ,  Grid } from '@material-ui/core'
import {  useDispatch , useSelector } from 'react-redux'

const Languages = () => {

    const [value , setvalue] = useState('')
    const dispatch = useDispatch();
    const label = useSelector( state => Object.keys(state)[8])
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

            
            <Container maxWidth="sm" >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {
                            fullList.map((listItem ,index ) => <ListItem itemData={listItem} index={index} handleDelete={handleDelete}/> )
                        }
                    </Grid>
                </Grid>

                <SecComp label={label}/>
            </Container>

        </div>
    )
}

export default Languages
