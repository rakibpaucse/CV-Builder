import React from 'react'
import Main from '../../util/makeComponent/main'


const Awards = () => {
    const data = {
        id : 4 ,
        name : 'Awards',
        showBtn : true ,
        textFields : [ 'Title' , 'Subtitle' ],
        
    }
    
    return (
        <Main data={data}/>
    )
}

export default Awards
