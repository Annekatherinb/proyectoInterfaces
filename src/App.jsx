import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  
import Login from './Login'
import HomePage from './screems/Home'
import './index.css';
/*
import 'bootstrap/dist/css/bootstrap.min.css'
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Login />
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
  </React.StrictMode>,
)
