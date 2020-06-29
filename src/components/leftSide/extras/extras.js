import React from 'react'
import Main from '../../util/makeComponent/main'


const Extras = () => {
    const data = {
        name : 'Extra Curriculam Activities ',
        showBtn : true ,
        textFields : [ 'Curriculam Name ' , 'Curriculam Details' ],
        
    }
    
    return (
        <Main data={data}/>
    )
}
export default Extras
