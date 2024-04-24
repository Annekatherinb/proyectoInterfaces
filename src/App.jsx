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
        <Login />
        <Routes>
          
          
          <Route path="/market" element={<Market />} />
        </Routes>
      </Router>
  </React.StrictMode>,
)

export default App
