import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Profile from '../../components/leftSide/profile'
import Objective from '../../components/leftSide/objective'
import Work from '../../components/leftSide/work'


import Education from '../../components/leftSide/education'
import Awards from '../../components/leftSide/awards'
import Certifications from '../../components/leftSide/certifications'


import Skills from '../../components/leftSide/skills'
import Hobbies from '../../components/leftSide/hobbies'
import Languages from '../../components/leftSide/languages'


import References from '../../components/leftSide/references'
import Extras from '../../components/leftSide/extras'



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
        <Profile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Objective/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Work/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Education/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Awards/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Certifications/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Skills/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Hobbies/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Languages/>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <References/>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Extras/>
      </TabPanel>
            
        </div>
    )
}

export default TabsHolder