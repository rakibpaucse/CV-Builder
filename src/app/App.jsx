import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core'
import theme from '../themeProvider/themeProvider'

import Layout from '../layout/layout'

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider >
  )
}

export default App
