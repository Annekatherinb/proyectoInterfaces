import React from 'react';
import './menu.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function menu (){
    return(
        <div>
            <input type="checkbox" className="checkbox__hack" id="checkbox__hack" />
            <label htmlFor="checkbox__hack" className="checkbox-hack__label"></label>
            <nav className="nav--top">
                <ul className="menu-lateral nav--top__list">
                    <li className="menu-lateral__item"><a href="#logo">01. Logo</a></li>
                    <li className="menu-lateral__item"><a href="#colores">02. Colores</a></li>
                    <li className="menu-lateral__item"><a href="#tipografia">03. Tipografía</a></li>
                    <li className="menu-lateral__item"><a href="#botones">04. Botones</a></li>
                    <li className="menu-lateral__item"><a href="#grilla">05. Grilla base</a></li>
                    <li className="menu-lateral__item"><a href="#imagenes">06. Imágenes</a></li>
                    <li className="menu-lateral__item"><a href="#transiciones">07. Transiciones</a></li>
                    <li className="menu-lateral__item"><a href="#animaciones">08. Animaciones</a></li>
                    <li className="menu-lateral__item"><a href="#iconos">09. Iconos</a></li>
                    <li className="menu-lateral__item"><a href="#listas">10. Listas</a></li>
                    <li className="menu-lateral__item"><a href="#tablas">11. Tablas</a></li>
                    <li className="menu-lateral__item"><a href="#formularios">12. Formularios</a></li>
                </ul>
            </nav>
        </div>
    )
}
