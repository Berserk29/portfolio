import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './helper/i18next'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './section/errorPage/errorPage.component'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
        <App />
    </ErrorBoundary>
  </React.StrictMode>
)
