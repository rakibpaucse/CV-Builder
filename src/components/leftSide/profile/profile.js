import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import BackupIcon from '@material-ui/icons/Backup';

import { useDispatch } from 'react-redux'
import {addInputValue} from '../../../store/leftSide/action/actionCreators'

import TextField from '../../util/textfield'
import LineBreak from '../../util/lineBreak'

import ImagePreview from '../../showcase/pdfGenerate/imagePreview'


const tabPanelDesign = {
        padding : '20px 10px',
        background : '#f5f5f5'
        
}

const Profile = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const tabName = 'profile'

    return (
        <div style={tabPanelDesign}>
        <Grid container spacing={3}>
                            
          <Grid item xs={12} 
                style={{  display: 'grid',
                          gridTemplateColumns: '10fr 4fr' ,
                          gridGap: 10,
                        
                        }}
                >  

                <TextField label='Photo Url'  tab = {tabName} /> 

                    <Button
                    size="small"
                        style={{fontSize:15 , marginTop:35 }}
                        variant="outlined"
                        color="primary"
                        onClick={() => setOpen(true)}
                        startIcon={<BackupIcon style={{fontSize:22}}/>}
                    >
                        Photo
                    </Button>

                <DropzoneDialog
                            acceptedFiles={['image/*']}
                            cancelButtonText={"cancel"}
                            submitButtonText={"UpLoad Your Photo"}
                            maxFileSize={5000000}
                            filesLimit={1}
                            open={open}
                            onClose={() => setOpen(false)}

                            onSave={(files) => {

                                         const reader = new FileReader();
                                         reader.onload = () =>{
                                           if(reader.readyState === 2){
                                            dispatch(addInputValue({
                                                value: [files[0] , reader.result] ,
                                                path: 'Photo Url',
                                                tab : 'profile'
                                                }))  
                                           }
                                     }
                                         reader.readAsDataURL(files[0])
                                                                                                  
                                setOpen(false);
                            }}

                            showPreviews={true}
                            showFileNamesInPreview={true}
                />

          </Grid>

          <LineBreak />
          <Grid item xs={6}> 
              <TextField label='First Name'  tab = {tabName}/>
          </Grid>
          <Grid item xs={6}> 
              <TextField label='Last Name'  tab = {tabName}/>
          </Grid>
          <Grid item xs={10}> 
              <TextField label='Occupation'  tab = {tabName}/>
          </Grid>

          <LineBreak/>

          <Grid item xs={12}>  
              <TextField label='Parmanent Address'  tab = {tabName}/>
          </Grid>
          <Grid item xs={12}>
              <TextField label='Current Address '  tab = {tabName}/>
          </Grid>

          <LineBreak/>

          <Grid item xs={12}>
              <TextField label='Phone Number'  tab = {tabName}/>
          </Grid>
          <Grid item xs={12}>
              <TextField label='Website'  tab = {tabName}/>
          </Grid>
          <Grid item xs={12}>
              <TextField label='Email'  tab = {tabName}/>
          </Grid>

          </Grid>
        </div>
    )
}

export default Profile
