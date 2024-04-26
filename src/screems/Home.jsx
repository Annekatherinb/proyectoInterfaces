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
          <div className="contenedor">
            <p>Market Keeper</p>
                    <ul>
                <li>Pro</li>
                <li>Seguridad</li>
                <li>Confianza</li>
                        <li>Tecnologia</li>
            </ul>
          </div>
          <p className="quote">"Optimiza tu negocio, simplifica tu éxito"</p>
          <img src="/home.png" alt="ImageHome" className='imagen'/>
          <thead className='tabla'>
            <tr>
              <th scope='col'> API de Caja Registradora </th>
              <th scope='col'> Gestión Dinámica de Precios </th>
            </tr>
          </thead>
          <tbody className='ta'>
            <tr>
              <th scope='row'>Sistemas de Inventario en Tiempo Real</th>
              <td>Base de Datos de Proveedores</td>
            </tr>
            <tr>
              <th scope='row'> Motor de Facturación Detallada</th>
              <td> Registro Detallado de Movimientos Financieros </td>
            </tr>
            <tr>
              <th scope='row'>Módulo de Recepción de Productos</th>
              <td>Análisis Estadístico Avanzado</td>
            </tr>
            <tr>
              <th scope='row'>Interfaz Gráfica de Usuario (GUI) Optimizado</th>
              <td>Historial de Ventas en Base de Datos Segura</td>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
