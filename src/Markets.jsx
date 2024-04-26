import React from 'react';
import "./Markets.css";
import NavBar from './components/navBar.jsx';
import Productos from './components/Productos.jsx';
import invent from './data/invent.js';
import Contador from './components/contador.jsx';

function Markets(){
    const inventList = invent.map(v => {
        return <Productos titulo={v.name} descripcion={v.description} />
    })

    return(
        <div className='Market'>
            <div className='navbarmarkets'>
                <NavBar />
            </div>

            <div className='container'>
                {inventList}
            </div>

            <div>
                <Contador />

            </div>

        </div>
    )
}

export default Markets