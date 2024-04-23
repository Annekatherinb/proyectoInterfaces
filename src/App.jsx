import React from 'react';
import { Route, Routes } from 'react-router-dom'  
import Login from './Login'
import HomePage from './Home'
import Markets from './Markets'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/markets" element={<Markets />} />
    </Routes>

  )
}

export default App
