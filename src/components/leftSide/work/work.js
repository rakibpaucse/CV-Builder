// import React,{useState} from 'react'
// import { Container } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';

// import CheckBox from '../../util/checkBox';
// import LineBreak from '../../util/lineBreak';
// import WorkComponent from './workComponent';




// const useStyles = makeStyles((theme) => ({

// container : {  
//                 padding:0,
//             }
  
// }));


// const Work = () => {
//     const classes = useStyles();
//     const [value , setvalue] = useState('')

//     const handleChange = val => {
//         setvalue(val)
//         console.log(val);   
//     }
//     const tabName = 'Work Experience'
//     return (
//         <div>
//             <CheckBox label={value? value: tabName} handleChange={handleChange}/>
//             <LineBreak/>

//             <Container maxWidth="sm" >
//                <WorkComponent label={`Add ${tabName}`} />
//             </Container>
//         </div>
//     )
// }

// export default Work












import React from 'react'
import Main from '../../util/makeComponent/main'

const Work = () => {

    const data = {
        name : 'Work Experience',
        showBtn : true ,
        textFields : [ 'Name' , 'Role' , [  'Start Date ' , 'End Date']],
        
    }
    
    return (
        <Main data={data}/>
    )
}

export default Work
