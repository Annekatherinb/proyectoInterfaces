import React from 'react';
import "./Markets.css";
import NavBar from './components/navBar.jsx';
import Productos from './components/Productos.jsx';
import invent from './data/invent.js';

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
            
                <nav className='imagenes'>
                    < img src='huevo-duro.png' alt='' className='huevo'></img>
                    < img src='leche.png' alt='' className='leche'></img>
                    < img src='cereales.png' alt='' className='cereales'></img>
                    < img src='aceite-de-girasol.png' alt='' className='aceite'></img>
                    < img src='harina.png' alt='' className='harina'></img>
                    < img src='azucar.png' alt='' className='azucar'></img>
                </nav>
            </div>
            

        </div>
    )
}

export default Markets