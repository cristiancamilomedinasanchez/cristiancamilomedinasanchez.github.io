import React from 'react'
import imgProyect1 from '../asses/Proyects/bitpaytrading.png'
import imgProyect2 from '../asses/Proyects/chat publico.png'
import imgProyect3 from '../asses/Proyects/menudigital.png'
import imgProyect4 from '../asses/Proyects/qrPlatform.png'
import imgProyect5 from '../asses/Proyects/Cheff-Tweet.png'
import imgProyect6 from '../asses/Proyects/Proyecto_en_construccion.jpg'
import { useState } from 'react'
import imgProyect7 from '../asses/Proyects/thepointofthemascot.png'
import imgProyect8 from '../asses/Proyects/chatAngular.png'

function Proyects() {

const [visibilityDescription, setVisibilityDescription] = useState(false)
const [visibility, setVisibility] = useState(0)

const arrayProyects = [
  {name: "Bit Pay Trading", image: imgProyect1, description: "Platform with user login created to make cryptocurrency purchases."},
  {name: "TwoChat In One", image: imgProyect2, description: "Two versions of the same chat, one using websockets and the other with a database."},
  {name: "Menu Digital", image: imgProyect3, description: "Interactive digital menu created only from the frontend. "},  
  {name: "QR Platform", image: imgProyect4, description: "Platform designed to create your own digital menu and then print it with a QR."},
  {name: "Cheff Tweet", image: imgProyect5, description: "Social network generated to share multiple cooking recipes."},
  {name: "Thera Encrypted", image: imgProyect6, description: "Platform created to encrypt information at a good level of security."}
]

const arrayProyectsAngular =  [
  {name: "The Point Of The Mascot", image: imgProyect1, description: "Online platform for donating food or adopting pets."},
  {name: "Chat Angular", image: imgProyect2, description: "Chat generated in angular using WebSockets."},
  {name: "in Building", image: imgProyect6, description: "In Building "},  
  
]

const challangeVisibility1 = () => {
  setVisibilityDescription(!visibilityDescription)
setVisibility(1)
}


const challangeVisibility2 = () => {
  setVisibilityDescription(!visibilityDescription)
   setVisibility(2)
  }


  
const challangeVisibility3 = () => {
   setVisibilityDescription(!visibilityDescription)

  setVisibility(3)
  }


  
const challangeVisibility4 = () => {
   setVisibilityDescription(!visibilityDescription)
   setVisibility(4)
  }


  
const challangeVisibility5 = () => {
   setVisibilityDescription(!visibilityDescription)
   setVisibility(5)
  }


  
const challangeVisibility6 = () => {
   setVisibilityDescription(!visibilityDescription)
   setVisibility(6)
  }
  
const challangeVisibility7 = () => {
  setVisibilityDescription(!visibilityDescription)
  setVisibility(7)
 }
 
const challangeVisibility8 = () => {
  setVisibilityDescription(!visibilityDescription)
  setVisibility(8)
 }
 
const challangeVisibility9 = () => {
  setVisibilityDescription(!visibilityDescription)
  setVisibility(9)
 }


// const descriptionProyect = (index) => {
// setVisibilityDescription(true)

//   return(
//     <div key={index}>
// <h1>{index}</h1>
// <p>{index.description}</p>
//     </div>
//   )
// }


// // ../asses/Proyects/bitpaytrading.png'
// '../asses/Proyects/chat publico.png'
// '../asses/Proyects/menudigital.png'
// m '../asses/Proyects/qrPlatform.png'
// '../asses/Proyects/Cheff-Tweet.png'
// oyects/Proyecto_en_construccion.jpg'
  return (
    <div className='proyects-container'>
<div className='proyect-title-container'>
<h1>Proyects</h1>
<h2>React JS</h2>
</div>
<div className='proyects-items-container'>
<div className='proyect-item'>
  <div className='proyect-title-and-description'>
  <h2>Bit Pay Trading</h2>
  <div className='description-container'>
  
  </div>
  </div>
  <img  onMouseOver={challangeVisibility1} className='img-proyect' id='proyecto1img' src={imgProyect1} />
</div>

<div className='proyect-item'>
<div className='proyect-title-and-description'>
  <h2>Two Chats in One</h2>
  
  </div>
  <img onMouseOver={challangeVisibility2} className='img-proyect' src={imgProyect2} />
</div>
<div className='proyect-item'>
<div className='proyect-title-and-description'>
  <h2>Menu Digital</h2>
  
  </div>
  <img onMouseOver={challangeVisibility3} className='img-proyect' src={imgProyect3} />
</div>
<div className='proyect-item'>
<div className='proyect-title-and-description'>
  <h2>QR Platform</h2>
  
  </div>
  <img onMouseOver={challangeVisibility4} className='img-proyect' src={imgProyect4} />
</div>
<div className='proyect-item'>
<div className='proyect-title-and-description'>
  <h2>Cheff Tweet</h2>
  
  </div>
  <img onMouseOver={challangeVisibility5} className='img-proyect' src={imgProyect5} />
</div>
<div className='proyect-item'>
<div className='proyect-title-and-description'>
  <h2>In Building</h2>
  
  </div>
  <img onMouseOver={challangeVisibility6} className='img-proyect' src={imgProyect6} />
</div>
</div>

<div className='description-proyects'>
{ visibilityDescription & visibility === 1 &&

<div>
<h1>{arrayProyects[0].name}</h1>
<h2>{arrayProyects[0].description}</h2>
<button className='btn-general'><a target='_blank' href='https://github.com/cristiansanchez2715/BITPAY-FX-TRADING' className='open-proyect'>View Proyect</a></button>
</div> 
  }
  
  { visibilityDescription & visibility === 2 &&

<div>
<h1>{arrayProyects[1].name}</h1>
<h2>{arrayProyects[1].description}</h2>
<button className='btn-general'><a className='open-proyect' target='_blank' href='https://github.com/cristiansanchez2715/Doble-Chat'>View Proyect</a></button>

</div> 
  }



{ visibilityDescription & visibility === 3 &&

<div>
<h1>{arrayProyects[2].name}</h1>
<h2>{arrayProyects[2].description}</h2>
<button className='btn-general'><a className='open-proyect' target='_blank' href='https://github.com/cristiansanchez2715/Menu-Muestra-QR'>View Proyect</a></button>
</div> 
  }



{ visibilityDescription & visibility === 4 &&

<div className='container-inter-desciption'>
<h1>{arrayProyects[3].name}</h1>
<h2>{arrayProyects[3].description}</h2>
<button className='btn-general'><a className='open-proyect' target='_blank' href='https://github.com/cristiansanchez2715/Platform-Qr'>View Proyect</a></button>
</div> 
  }



{ visibilityDescription & visibility === 5 &&

<div>
<h1>{arrayProyects[4].name}</h1>
<h2>{arrayProyects[4].description}</h2>
<button className='btn-general'><a className='open-proyect' target='_blank' href='https://github.com/cristiansanchez2715/Cheff-Tweet'>View Proyect</a></button>

</div> 
  }



{ visibilityDescription & visibility === 6 &&

<div>
<h1>{arrayProyects[5].name}</h1>
<h2>{arrayProyects[5].description}</h2>
</div> 
  }

{ visibilityDescription & visibility === 7 &&

<div>
<h1>{arrayProyectsAngular[0].name}</h1>
<h2>{arrayProyectsAngular[0].description}</h2>
<button className='btn-general'><a target='_blank' href='https://github.com/cristiansanchez2715/ThePointOfTheMascot' className='open-proyect'>View Proyect</a></button>
</div> 
  }
  
  { visibilityDescription & visibility === 8 &&

<div>
<h1>{arrayProyectsAngular[1].name}</h1>
<h2>{arrayProyectsAngular[1].description}</h2>
<button className='btn-general'><a className='open-proyect' target='_blank' href='https://github.com/cristiansanchez2715/Angular-Grupal-Chat'>View Proyect</a></button>

</div> 
  }



{ visibilityDescription & visibility === 9 &&

<div>
<h1>{arrayProyectsAngular[2].name}</h1>
<h2>{arrayProyectsAngular[2].description}</h2>
{/* <button className='btn-general'><a className='open-proyect' target='_blank' href=''>View Proyect</a></button> */}
</div> 
  }

</div>




{/* angular proyects */}


<div className='proyect-title-container' id='angular-proyects-container'>

<h2>Angular</h2>
</div>
<div className='proyects-items-container'>
<div className='proyect-item'>
  <div className='proyect-title-and-description'>
  <h2>The Point Of The Mascot</h2>
  <div className='description-container'>
  
  </div>
  </div>
  <img  onMouseOver={challangeVisibility7} className='img-proyect' id='proyecto1img' src={imgProyect7} />
</div>

<div className='proyect-item'>
<div className='proyect-title-and-description'>
  <h2>Chat Angular</h2>
  
  </div>
  <img onMouseOver={challangeVisibility8} className='img-proyect' src={imgProyect8} />
</div>
<div className='proyect-item'>
<div className='proyect-title-and-description'>
  <h2>In Building</h2>
  
  </div>
  <img onMouseOver={challangeVisibility9} className='img-proyect' src={imgProyect6} />
</div>

</div>

<div className='description-proyects'>




</div>





    </div>
  )
}

export default Proyects