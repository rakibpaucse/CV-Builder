import React from 'react'
import Grid from '@material-ui/core/Grid';


import TextField from '../../util/textfield'
import LineBreak from '../../util/lineBreak'

const design = {
        padding : '20px 10px',
        background : '#f5f5f5'
        
}

const Profile = () => {
    const tabName = 'profile'
    return (
        <div style={design}>
        <Grid container spacing={3}>
        
          <Grid item xs={12}>  
              <TextField label='Photo Url'  tab = {tabName}/>
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
