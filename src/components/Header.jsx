import './Header.css'

export function Header ({})
{
    return(
        <header>
            <a href="#experiencia" className='Header-Enlace'>Experiencia</a>
            {/* <a href="#proyectos" className='Header-Enlace'>Proyectos</a> */}
            <a href="#sobreMi" className='Header-Enlace'>Sobre mí</a>
            {/* <a href="" className='Header-Enlace'>Contacto</a> */}
        </header>
    )
}