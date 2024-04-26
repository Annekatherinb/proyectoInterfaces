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
            
            <nav className="botones">
                <h2 className="cont">{contador}</h2>
                <button onClick={sumar} className="but1">Agregar</button>
                <button onClick={sumar} className="but2">Agregar</button>
                <button onClick={sumar} className="but3">Agregar</button>
                <button onClick={sumar} className="but4">Agregar</button>
                <button onClick={sumar} className="but5">Agregar</button>
                <button onClick={sumar} className="but6">Agregar</button>

                <a href="#"><button onClick={limpiar} className="but7">Limpiar</button></a>
                
            </nav>
        </div>
    );
};

export default contador;
