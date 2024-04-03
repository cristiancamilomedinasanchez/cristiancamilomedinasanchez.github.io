import React from 'react'
import { useState } from 'react'
import imgProyect1 from '../asses/Proyects/mcdonalds.png'
import imgProyect2 from '../asses/Proyects/rockclothes.png'
import imgProyect3 from '../asses/Proyects/amfind.png'
import imgProyect4 from '../asses/Proyects/gym.png'
import { useEffect } from 'react'


function Proyects() {

  const [visibilityProyect1, setVisibilityProyect1] = useState(false)
  
  const [visibilityProyect2, setVisibilityProyect2] = useState(false)
  
  const [visibilityProyect3, setVisibilityProyect3] = useState(false)
  
  const [visibilityProyect4, setVisibilityProyect4] = useState(false)


  const functionVisibility = (setState, state) => {
    setState(!state)
  }

  

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div className='container-title-proyects'>
        <h1>Proyectos</h1>
      </div>
    <div className='container-proyects'>
     
      
<div className='proyect' >
<button className='button-proyect'><a href='https://cristiansanchez2715.github.io' target='_blank'>View</a></button>

 {!visibilityProyect1 && <div className='container-proyect' onMouseDown={() => functionVisibility(setVisibilityProyect1, visibilityProyect1)}>
 
  <img src={imgProyect1} className='img-proyect' />      
        </div>}
  {visibilityProyect1 && <div className={`content-proyect ${visibilityProyect1 ? 'visible' : ''}`} id='mcdonalds'  onMouseDown={() => functionVisibility(setVisibilityProyect1, visibilityProyect1)} >
  
<h2>Mcdonalds Menu En Tiempo Real</h2>
<p>Menu Hecho Con websockets establece una comunicacion en tiempo real cliente-cocina.</p>
</div>}
</div>

<div className='proyect' >
<button className='button-proyect'><a href='https://cristiancamilomedinasanchez1.github.io/' target='_blank'>View</a></button>
  
{!visibilityProyect2 && <div className='container-proyect' onMouseDown={() => functionVisibility(setVisibilityProyect2, visibilityProyect2) }>
  <img src={imgProyect2} className='img-proyect' />      
        </div>}

{visibilityProyect2 && <div className={`content-proyect ${visibilityProyect2 ? 'visible' : ''}`} id='ecommerce' onMouseDown={() => functionVisibility(setVisibilityProyect2, visibilityProyect2) }>

<h2>Ecommerce Rock And Roll</h2>
<p>Ecommerce hecho con productos de rock tanto para hombre como para mujer (solo frontend).</p>
</div>}
</div>

<div className='proyect' >
<button className='button-proyect'><a href='https://cristiancamilomedinasanchez3.github.io/' target='_blank'>View</a></button>

{!visibilityProyect3 && <div className='container-proyect' onMouseDown={() => functionVisibility(setVisibilityProyect3, visibilityProyect3)}>
  <img src={imgProyect3} className='img-proyect' />      
        </div>}

{visibilityProyect3 && <div className={`content-proyect ${visibilityProyect3 ? 'visible' : ''}`} id='beachChat' onMouseDown={() => functionVisibility(setVisibilityProyect3, visibilityProyect3)}>
<h2>Beach Chat</h2>
<p>Chat en tiempo real creado usando websockets con estilo playero..</p>
</div>}
</div>

<div className='proyect' >
<button className='button-proyect'><a href='https://cristiancamilomedinasanchez2.github.io/' target='_blank'>View</a></button>

{!visibilityProyect4 && <div className='container-proyect' onMouseDown={() => functionVisibility(setVisibilityProyect4, visibilityProyect4)}>
  <img src={imgProyect4} className='img-proyect' />      
        </div>}


{visibilityProyect4 && <div className={`content-proyect ${visibilityProyect4 ? 'visible' : ''}`} id='gymSistem' onMouseDown={() => functionVisibility(setVisibilityProyect4, visibilityProyect4)}>
<h2>Gym Sistem</h2>
<p>Sistema de reserva para gimnasio usando los dias de lunes a viernes usando React Js (solo frontend).</p>
</div>}
</div>
</div>
    </div>
  )
}

export default Proyects