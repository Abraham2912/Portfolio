import './Experiencia.css'

export function Experiencia ({ puesto, descripcion, fecha, empresa})
{
    return(
        <div className='experiencia-content'>
            <span className='marcador'>•</span>
            <div className='experiencia-puesto'>
                <h3 className='Profesion'>{puesto}</h3>
                <h4>{empresa}</h4>
                <p>{fecha}</p>
            </div>

            <div className='experiencia-descripcion'>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}