import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import GlobalStyles from './globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
)
