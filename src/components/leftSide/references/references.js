import React from 'react'
import Main from '../../util/makeComponent/main'

const References = () => {
    const data = {
        name : 'References',
        showBtn : true ,
        textFields : [ 'Name' , 'Position' , 'Phone Number ' , ' Email Address' ],
        
    }
    
    return (
        <Main data={data}/>
    )
}

export default References
