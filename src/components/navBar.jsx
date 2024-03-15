import React from 'react';
import './navBar.css'
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function NavBar() {
  return (
    <div className='navbar'>
        <img src='' alt='' className='logo'></img>
        <ul>
            <li>Home</li>
            <li>Inventario</li>
            <li>Métricas</li>
        </ul>
        <div className='search'>
            <input type='text' placeholder='Search'></input>
            <img src='' alt=''></img>
        </div>
    </div>
  );
}

export default NavBar;