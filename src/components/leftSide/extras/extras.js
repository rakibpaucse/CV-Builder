import React from 'react'
import Main from '../../util/makeComponent/main'


const Extras = () => {
    const data = {
        id : 10 ,
        name : 'Extra_curriculam',
        showBtn : true ,
        textFields : [ 'Curriculam Name ' , 'Curriculam Details' ],
        
    }
    
    return (
        <Main data={data}/>
    )
}
export default Extras
