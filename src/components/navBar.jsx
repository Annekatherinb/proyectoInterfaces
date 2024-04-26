import React from 'react';
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div className='navbar'>
        <nav className='bar'>
          <img src='logotipo.png' alt='' className='logo'></img>
          <img src='carrito-de-compras.png' alt='' className='carro'></img>
          <img src='work-from-home.png' alt='' className='casa'></img>
          <img src='usuario.png' alt='' className='usuario'></img>
          <img src='portapapeles.png' alt='' className='check'></img>
        
          <ul>
              <li>Home</li>
              <li>Inventario</li>
              <li>Usuario</li>
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