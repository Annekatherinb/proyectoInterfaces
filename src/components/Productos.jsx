import "./Productos.css"

function Productos({titulo = "Sin definir", 
descripcion = "Sin definir",
imagen = ""}){
    
    return (
        <div className="Productos">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    );

}

export default Productos;