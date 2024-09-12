import './Enlace.css'

export function Enlace({ destino, destinoUrl, icono })
{
    return(
        <a href={destinoUrl} className='enlace-content'>
            <img src={icono} className='enlace-icono'/>
            {destino}
        </a>
    )
}