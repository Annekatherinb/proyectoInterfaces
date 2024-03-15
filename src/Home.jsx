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
          <h1 className="title">Market Keeper Pro</h1>
          <p className="quote">"Optimiza tu negocio, simplifica tu éxito"</p>
          <img src="/home.png" alt="ImageHome" className='imagen'/>
          <div className="content">
            <div className="right">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
              <ul>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
