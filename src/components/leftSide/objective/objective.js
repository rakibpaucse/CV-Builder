import React from 'react'
import Main from '../../util/makeComponent/main'

const Objective = () => {

    
    const data = {
        name : 'Objective',
        showBtn : false ,
        textFields : [ 'Objective header' ],     
    }

    return ( 
            <Main data={data}/> 
    )
}

export default Objective
