import React from 'react'
import aboutMeImg from '../asses/not-found/Imagen_de_WhatsApp_2024-04-01_a_las_10.58.40_bea98c0e-removebg-preview.png'
function AboutMe() {
  return (
    //column
    <div className='aboutme-container'> 
        

        <div className='presentation-aboutme'>
<h1>Acerca de mi</h1>
<button><a target='_blank' href='https://flowcv.com/resume/7ldnues3cl'>Donwload CV</a></button>
        </div>
        
{/* ROW  */}
<div className='container-information-aboutme'>

<div className='container-img-me'>
    <img src={aboutMeImg} className='img-aboutme' />
</div>

<div className='information-aboutme'>
<h2 style={{color: "#FFA500"}}>Cristian Camilo Medina Sanchez</h2>
<p>
Con más de un año y medio de experiencia, mi perfil se destaca por una sólida base en el desarrollo fullstack, empleando con destreza tecnologías como JavaScript, AngularJS, Node.js y React.js. Mi enfoque positivo y habilidad analítica orientada a objetos me permiten abordar proyectos con una visión integral y eficiente. He creado aplicaciones web completas, desde la implementación de REST APIs hasta la gestión de WebSocket y encriptado para una comunicación segura. Además, poseo experiencia en el diseño responsivo, optimizando la experiencia del usuario a través de CSS y HTML. La gestión de versiones con Git y GitHub forma parte fundamental de mi flujo de trabajo, asegurando la colaboración efectiva en equipos. Mi manejo de herramientas como Express.js y Multer garantizan la eficiencia en el desarrollo de aplicaciones robustas. La implementación de sistemas de login de usuarios es parte esencial de mis habilidades. Con un nivel medio de inglés, estoy comprometido a seguir creciendo y enfrentando nuevos desafíos en el fascinante mundo del desarrollo de software.
</p>
</div>
</div>

            </div>
  )
}

export default AboutMe