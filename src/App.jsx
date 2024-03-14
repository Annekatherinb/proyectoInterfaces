import React from 'react';
import { Route, Routes } from 'react-router-dom'  
import Login from './Login'
import HomePage from './Home'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
    </Routes>

  )
}

export default App
