import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import HomePage from './Home.jsx' 
import Markets from './Markets.jsx'
import barra from './components/sideBar.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Markets/>
    </BrowserRouter>
  </React.StrictMode>,
)

