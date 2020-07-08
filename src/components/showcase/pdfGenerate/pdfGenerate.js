import React,{useState} from 'react'
import {
    Card,
    Typography,
    Container,
    Grid
    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
import { useSelector } from 'react-redux'
import info from '../../../constant/jsonFile'



const useStyles = makeStyles((theme) => ({

    card: {
        width : '90%',
        // height : '90vh',
        padding : 10
    },


}))


const PdfGenerate = ({forwardedRef}) => {
    const [imgLink , setImgLink ] = useState()
    const classes = useStyles()
    const state = useSelector(state => state)
    const everyItems = Object.keys(info)
    var mainData = {}
    everyItems.map((item , index) => {
    Object.assign(mainData, {[everyItems[index]] : {...state[item].items}});
    })
    
    
    const handleClick = () => {
        html2canvas( forwardedRef.current  , {
            scale: 5,
            useCORS: true,
            allowTaint: true,
          }).then(canvas => {
            const image = canvas.toDataURL('image/jpeg', 90 / 100);
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

        doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight, null, 'SLOW');
        doc.save(`RxResume_${Date.now()}.pdf`);


            })
    } 

    const imgHandler = () => {

        const reader = new FileReader()
        reader.onload = () =>{
            if(reader.readyState === 2){
              setImgLink(reader.result)
            }
          }
        reader.readAsDataURL(mainData.profile.photoUrl)
    }
console.log(mainData.profile.photoUrl);

    return (
               
        <Card className={classes.card}>  

        <Container maxWidth="sm" ref={forwardedRef} >
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '90vh' }} >

          <Grid container spacing={3}>
             <Grid item xs={12}> 
                <Grid item xs={6}> 
                    {mainData.profile.firstName}
                </Grid>              
                <Grid item xs={6}> 
                    {mainData.profile.lastName}
                </Grid> 
             </Grid> 
             <Grid item xs={6}> 
                    { mainData.profile.photoUrl  &&    <img src={imgLink}  style={{width: 150 , height:150 , border: '1px solid'}} onChange={imgHandler}/> }
            </Grid> 
          </Grid>
        
          </Typography>
        </Container>

            <button onClick={handleClick}> CLICK HERE</button>

        </Card>  
    
    )
}

export default PdfGenerate
