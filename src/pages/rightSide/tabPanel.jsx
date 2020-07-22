import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import About from '../../components/rightSide/about/about'
import Action from '../../components/rightSide/action/acton'

import Font from '../../components/rightSide/font/font'
import Setting from '../../components/rightSide/setting/setting'

import Template from '../../components/rightSide/template/template'
import Color from '../../components/rightSide/color/color'


const TabPanel = props => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };


const TabsHolder = ({value}) => {
    return (
        <div>

      <TabPanel value={value} index={0}>
        <Template/>
      </TabPanel>

      <TabPanel value={value} index={1} >
        <Color/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Font/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Action/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <Setting/>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <About/>
      </TabPanel>

            
        </div>
    )
}

export default TabsHolder
