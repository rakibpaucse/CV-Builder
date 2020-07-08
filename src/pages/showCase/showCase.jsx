import React,{createRef } from 'react'
import GeneratePdf from '../../components/showcase/pdfGenerate/pdfGenerate'



const ShowCase = () => {
const reff = createRef()
    return (<GeneratePdf forwardedRef={reff}/>)
}

export default ShowCase
