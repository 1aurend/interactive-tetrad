import React from 'react'
import ReactDOM from 'react-dom'
import Store from './data/Store'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import './index.css'
import './fonts/KohinoorDevanagari-Bold.woff'
import './fonts/KohinoorDevanagari-Bold.ttf'
import './fonts/KohinoorDevanagari-Bold.otf'
import './fonts/KohinoorDevanagari-Regular.woff'
import './fonts/KohinoorDevanagari-Regular.ttf'
import './fonts/KohinoorDevanagari-Regular.otf'
import './fonts/KohinoorDevanagari-Regular.woff'
import './fonts/KohinoorDevanagari-Regular.ttf'
import './fonts/KohinoorDevanagari-Medium.otf'
import './fonts/KohinoorDevanagari-Medium.woff'
import './fonts/KohinoorDevanagari-Medium.ttf'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Store />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
