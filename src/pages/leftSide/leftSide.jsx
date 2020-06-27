import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import info from '../../constant/index'
import Tabpanel from './tabPanel'



const allProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  tab: {
    color : '#3b3938',
    fontWeight : 'bold',
    padding : '10px 0px',
    backgroundColor : '#f5f3f2' ,

    '&:focus' : {
        backgroundColor : '#d1cecd',
        color: '#1d995d',
        fontsize: '30px'
    } ,
    
  },


}));

const LeftSide = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="green" >
        <Tabs
          className = { classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {/* <Tab label="Item One" {...allProps(0)} />
          <Tab label="Item Two" {...allProps(1)} />
          <Tab label="Item Three" {...allProps(2)} />
          <Tab label="Item Four" {...allProps(3)} />
          <Tab label="Item Five" {...allProps(4)} />
          <Tab label="Item Six" {...allProps(5)} />
          <Tab label="Item Seven" {...allProps(6)} /> */}

          {
            info.map( (inf , index) => <Tab className={classes.tab} label={inf.title} {...allProps(index)} />)
          }



        </Tabs>
      </AppBar>

      <Tabpanel value={value} />

    </div>
  );
}


export default LeftSide;