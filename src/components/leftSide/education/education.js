import React from 'react'
import Main from '../../util/makeComponent/main'

const Education = () => {
    const data = {
        name : 'Education',
        showBtn : true ,
        textFields : [ 'Institution Name' , 'major' , 'Grade', [  'Start Date ' , 'End Date']],
        
    }
    
    return (
        <Main data={data}/>
    )
}

export default Education
