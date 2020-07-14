import React from 'react'
import Main from '../../util/makeComponent/main'

const Certifications = () => {

    const data = {
        id : 5 ,
        name : 'Certifications',
        showBtn : true ,
        textFields : [ 'Name' , 'Authority' ,],
        
    }
    
    return (
        <Main data={data}/>
    )
}

export default Certifications

