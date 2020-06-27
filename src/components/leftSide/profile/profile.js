import React from 'react'
import Grid from '@material-ui/core/Grid';


import TextField from '../../util/textfield'
import LineBreak from '../../util/lineBreak'

const design = {
        padding : '20px 10px',
        background : '#f5f5f5'
        
}

const Profile = () => {
    return (
        <div style={design}>
        <Grid container spacing={3}>
        
          <Grid item xs={12}>  
              <TextField label='Photo Url' placeholder=' https://randomPhoto.me' />
          </Grid>

          <LineBreak />

          <Grid item xs={6}> 
              <TextField label='First Name' placeholder=' Nazrul ' />
          </Grid>
          <Grid item xs={6}> 
              <TextField label='Last Name' placeholder=' Islam ' />
          </Grid>
          <Grid item xs={10}> 
              <TextField label='Occupation' placeholder=' Student ' />
          </Grid>

          <LineBreak/>

          <Grid item xs={12}>  
              <TextField label='Parmanent Address' placeholder=' Noakhali , Chottogram' />
          </Grid>
          <Grid item xs={12}>
              <TextField label='Current Address ' placeholder=' Dhaka Cantonment' />
          </Grid>

          <LineBreak/>

          <Grid item xs={12}>
              <TextField label='Phone Number' placeholder=' 01521333799 ' />
          </Grid>
          <Grid item xs={12}>
              <TextField label='Website' placeholder=' https://www.ami.me' />
          </Grid>
          <Grid item xs={12}>
              <TextField label='Email' placeholder=' rakibpaucse@gmail.com' />
          </Grid>

          </Grid>
        </div>
    )
}

export default Profile
