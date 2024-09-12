import './App.css'
import { Header } from './components/Header.jsx'
import imagen from  'assets/cara.jpeg'
import { Experiencia } from './components/Experiencia.jsx'
import { Enlace } from './components/Enlace.jsx'
import linkedin from './assets/linkedin-svgrepo-com.svg'
import sobreMiIcon from './assets/profile2.svg'

function App() {
  return(
    <>
      <div className="App">
        <Header></Header>
        <main>
          <section id='perfil' className='Perfil'>
            <div className='imagen'> 
              <img src={imagen} alt="" className='ImagenCara'/>
              {/* Por si quiero crear un botón como de disponible para trabajar */}
            </div>
              <h1 className='Presentacion'>¡Hola! Soy Abraham Lorenzo</h1>

              <h3 className='Profesion'>Desarrollador Web Full Stack</h3>

              <p className='Descripcion'>Recien titulado, <strong className='Profesion'> desarrollador de aplicaciones web full stack</strong>. Apasionado por el desarrollo web full stack, con experiencia en tecnologías como <strong className='Tecnologias'>Express.js</strong> y <strong className='Tecnologias'>React</strong>. Busco aportar soluciones creativas y eficientes en entornos colaborativos. Santa Cruz de Tenerife, España 🇪🇸</p>

            <div className='Redes'>
              <Enlace destino={"LinkedIn"} destinoUrl={"https://www.linkedin.com/in/abraham-lorenzo-webdev/"} icono={linkedin}/>
              <a href=""></a>
            </div>
          </section>
          <section id='experiencia'>
            <div className='experiencia-title'>
              <svg width="35px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H11.2C10.0799 3 9.51984 3 9.09202 3.21799C8.71569 3.40973 8.40973 3.71569 8.21799 4.09202C8 4.51984 8 5.0799 8 6.2V7M9 15V12M15 15V12M3.02721 10.0263C3.38776 10.3719 7.28572 14 12 14C16.7143 14 20.6122 10.3719 20.9728 10.0263M3.02721 10.0263C3 10.493 3 11.0665 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 11.0665 21 10.493 20.9728 10.0263M3.02721 10.0263C3.06233 9.4241 3.14276 8.99959 3.32698 8.63803C3.6146 8.07354 4.07354 7.6146 4.63803 7.32698C5.27976 7 6.11984 7 7.8 7H16.2C17.8802 7 18.7202 7 19.362 7.32698C19.9265 7.6146 20.3854 8.07354 20.673 8.63803C20.8572 8.99959 20.9377 9.4241 20.9728 10.0263" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
              <h2>Experiencia laboral</h2>
            </div>
            <Experiencia
              puesto='Estudiante en prácticas'
              descripcion='Me encargué de implementar buenas prácticas y de ayudar al desarrollo de una API desarrollada en Express.js, y del mantenimiento y correcto funcionamiento de aplicaciones web. Además de colaborar en el desarrollo de una aplicación de móvil mediante el uso de la herramienta Velneo.'
              fecha='2024'
              empresa='E-ASY'
            />
          </section>
          {/* <section id='proyectos'>
          <div className='experiencia-title'>
            <svg width="35px" height="34px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z" fill="#ffffff"/>
            <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z" fill="#ffffff"/>
            <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z" fill="#ffffff"/>
            </svg>
              <h2>Proyectos</h2>
            </div>
            <Proyecto nombre={"Proyecto en curso."} descripcion={"El proyecto está en curso"} imagen={"https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg"}/>
            
          </section> */}
          <section id='sobreMi'>
          <div className='experiencia-title'>
              <img src={sobreMiIcon} alt="" />
              <h2>Sobre mí</h2>
            </div>
            <div className='sobreMi-descripcion'>
                <p>Mi nombre es Abraham Jesús Lorenzo Guerra, recientemente he terminado el CFGS de desarrollo de aplicaciones web en el que he podido desarrollador mis habilidadeds de programación así como mis habilidades blandas.</p>
                <p>Durante mi estancia en el ciclo superior pude aprender a desarrollar aplicaciones web mediante el uso de C# gracias al framework .NET, Java mediante spring boot y a diseñar aplicaciones mediante HTML, CSS y JS. Además de eso para el proyecto final del ciclo usamos React para la parte del front y conectarnos a una API desarrollada en Spring</p>
                <p>Actualmente me encuentro buscando empleo como <strong className='Profesion'>desarrollador web junior full stack</strong></p>
              </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
