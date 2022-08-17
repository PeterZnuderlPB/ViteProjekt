import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cards from './Cards'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cards count={3} />
  </React.StrictMode>
)
