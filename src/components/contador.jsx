import { useState } from "react";
import './contador.css'

const contador = () => {
const [contador, setContador] = useState(0)

const sumar = () =>{
    setContador(contador +1)
}

const limpiar = () =>{
    setContador(0)
}

    return (
        <div className="agregar">
            <h2>{contador}</h2>
            <nav className="botones">
                <button onClick={sumar} className="but1">Agregar</button>
                <button onClick={sumar} id="but2">Agregar</button>
                <button onClick={sumar} id="but3">Agregar</button>
                <button onClick={limpiar} id="but4">Limpiar</button>
            </nav>
        </div>
    );
};

export default contador;
