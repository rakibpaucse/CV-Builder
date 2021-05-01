import React,{createRef } from 'react'
import GeneratePdf from '../../components/showcase/pdfGenerate/pdfGenerate'



const ShowCase = () => {
const reff = createRef()

    return (
        <div style={{padding: '10px 20px'}}>
            <GeneratePdf forwardedRef={reff} />
        </div>
    )
} 

export default ShowCase
