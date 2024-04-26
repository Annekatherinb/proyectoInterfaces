import React from 'react';
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleNavigate = (path) => {
    navigate(path); // Navega a la ruta especificada
  };

  return (
    <div className='navbar'>
        <nav className='bar'>
          <img src='logotipo.png' alt='' className='logo'></img>
          <img src='carrito-de-compras.png' alt='' className='carro'></img>
          <img src='work-from-home.png' alt='' className='casa'></img>
          <img src='usuario.png' alt='' className='usuario'></img>
          <img src='portapapeles.png' alt='' className='check'></img>
        
          <ul>
            <li><Link to='/home'>Home</Link></li> {/* Utiliza Link para dirigir a la página principal */}
            <li onClick={() => handleNavigate('/Markt')}>Inventario</li> {/* Usa la función de navegación para dirigir a la página de inventario */}
            <li>Usuario</li> {/* Utiliza Link para dirigir a la página de usuario */}
            <li>Metricas</li>
          </ul>
        </nav>
        <div className='search'>
            <input type='text' placeholder='Search'></input>
            <img src='/' alt=''></img>
        </div>
    </div>
  );
}

export default NavBar;