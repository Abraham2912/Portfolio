import './Proyecto.css'

export function Proyecto({ nombre, descripcion, imagen}){
    return(
        <div className="proyectos-content">
            <div className="proyecto-imagen">
                <img src={imagen} alt="" />
            </div>
            <div className="proyecto-descripcion">
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}