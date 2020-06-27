import React from 'react'
import Main from '../../util/makeComponent/main'

const Certifications = () => {

    const data = {
        name : 'Certification',
        showBtn : true ,
        textFields : [ 'Name' , 'Authority' ,],
        
    }
    
    return (
        <Main data={data}/>
    )
}

export default Certifications

