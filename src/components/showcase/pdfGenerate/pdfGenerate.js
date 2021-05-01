import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Card,Container,Button} from '@material-ui/core';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
import { useSelector } from 'react-redux'

import DefaultTemplate from '../templates/defaultTheme/defaultTemplate'



const useStyles = makeStyles((theme) => ({

    card: {
        width : '100%',
    },
    btn : {
        background : '#0e733a' ,
        color :'white'
    }


}))    
 

const PdfGenerate = ({forwardedRef}) => {
    const classes = useStyles()
    const state = useSelector(({leftReducer}) => leftReducer)
    const everyItems = Object.keys(state)
    var mainData = {}
    everyItems.map((item , index) => {
    Object.assign(mainData, {[everyItems[index]] : {...state[item].items}});
    })
    
    const handleClick = () => { 

        window.scrollTo(0,0)
        html2canvas( forwardedRef.current  , {
            scale:1 ,
            useCORS : true,
            logging: true, 
            letterRendering: 1,
            allowTaint: false, 
          })
            .then(canvas => {
            const image = canvas.toDataURL('image/jpeg' , 0.9);
            console.log(image);
            
            const doc = new jsPDF({
              orientation: 'portrait',
              unit: 'px',
              format:  'a4',
            });

           
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();

            const widthRatio = pageWidth / canvas.width;
            const heightRatio = pageHeight / canvas.height;
            const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

            const canvasWidth = canvas.width * ratio;
            const canvasHeight = canvas.height * ratio;

            let marginX = (pageWidth - canvasWidth) / 2;
            let marginY = (pageHeight - canvasHeight) / 2;

            // doc.addImage(image, 'png' , 10,10,400,580);
            doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight, null, 'SLOW');
            doc.save(`RxResume_${Date.now()}.pdf`);

            })


    } 

    return (
               
        <Card className={classes.card}>     
            <Container  ref={forwardedRef} >
                        <DefaultTemplate mainData={mainData}/>
            </Container>


        <div style={{textAlign:'end' , margin:20}}>
            <Button
                variant="contained"
                color="primary"
                className = {classes.btn}
                onClick={handleClick}> 
                DownLoad PDF
            </Button>
        </div>
        </Card>  



    )
}



export default PdfGenerate
