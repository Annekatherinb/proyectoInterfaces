import React from 'react';
import './Home.css';
import Sidebar from './components/sideBar.jsx';
import NavBar from './components/navBar.jsx';

function HomePage() {
  return (
    <div>
      <div className='navbar'>
        <NavBar />
      </div>
      
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className='content'>
          <h1>MARKET-KEEPER PRO</h1>
          {/* Otro contenido */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
