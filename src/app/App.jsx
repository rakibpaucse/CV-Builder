import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core'
import theme from '../themeProvider/themeProvider'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from '../layout/layout'

const App = () => {
  return (
    <Router basename='CV-Builder'>
    <ThemeProvider theme={theme} >
      <Layout/>
    </ThemeProvider >
    </Router>
  )
}

export default App
