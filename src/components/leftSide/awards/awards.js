import React from 'react'
import Main from '../../util/makeComponent/main'


const Awards = () => {
    const data = {
        name : 'Honors & Awards',
        showBtn : true ,
        textFields : [ 'Title' , 'Subtitle' ],
        
    }
    
    return (
        <Main data={data}/>
    )
}

export default Awards
