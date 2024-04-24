import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  
import Login from './Login'
import HomePage from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>

  )
}

export default App
