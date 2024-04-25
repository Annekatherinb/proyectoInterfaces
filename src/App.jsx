import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  
import Login from './Login'
import HomePage from './screems/Home'
import Market from './Markets'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <HomePage />
        <Routes>
          
          
        
        </Routes>
      </Router>
  </React.StrictMode>,
)

