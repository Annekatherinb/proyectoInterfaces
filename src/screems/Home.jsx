import React from 'react';
import './Home.css';
import Sidebar from '../components/sideBar.jsx';
import NavBar from '../components/navBar.jsx';

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
          <div id='right'>
            <ul>
              <li> API de Caja Registradora </li>
              <li> Gestión Dinámica de Precios </li>
            </ul>
            <ul>
              <li> Sistemas de Inventario en Tiempo Real </li>
              <li> Base de Datos de Proveedores </li>
            </ul>
            <ul>
              <li> Motor de Facturación Detallada </li>
              <li> Registro Detallado de Movimientos Financieros </li>
            </ul>
            <ul>
              <li> Módulo de Recepción de Productos </li>
              <li> Análisis Estadístico Avanzado </li>
            </ul>
            <ul>
              <li> Interfaz Gráfica de Usuario (GUI) Optimizado </li>
              <li> Historial de Ventas en Base de Datos Segura </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
