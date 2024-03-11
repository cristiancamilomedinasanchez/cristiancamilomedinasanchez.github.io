import React from 'react'
import { useState } from 'react'
import img1HTML from '../asses/tecnologies/sinfondo/HTML-removebg-preview.png'
import img2CSS from '../asses/tecnologies/sinfondo/descarga-removebg-preview.png'
import img3JAVASCRIPT from '../asses/tecnologies/sinfondo/JAVASCRIPT-removebg-preview.png'
import img4REACTJS from '../asses/tecnologies/sinfondo/react_js-removebg-preview.png'
import img5NODEJS from '../asses/tecnologies/sinfondo/node_js-removebg-preview.png'
import img6EXPRESS from '../asses/tecnologies/sinfondo/express_js-removebg-preview.png'
import img7MYSQL from '../asses/tecnologies/sinfondo/mysql-removebg-preview.png'

function FromMe({setVisibilityHome, setVisibilityPresentation}) {
  const [visibilityFullstackPresentation, setVisibilityFullstackPresentation] = useState(false)
  const [visibilityTecnologies, setVisibilityTecnologies] = useState(false)

  // visibility fullstack presentation

const functionVisibilityFullstack = () => {
   return(
    <div className='fullstackPresentation'>
      <h1>Fullstack Process</h1>
      <h2>For other side i am study for become to fullstack developer with teconologies how Node Js, MySQL And Graphql</h2>
       <button onClick={challangeVisibilityTecnologies} className='btn-general'>Tecnologies</button>
    </div>
   )

}

const challangeVisibilityFullstack = () => {
  setVisibilityFullstackPresentation(!visibilityFullstackPresentation)
}

  const functionRETURN = () => {
    setVisibilityHome(true)
    setVisibilityPresentation(false)
  }


  // visibilityTecnologies presentation
  
const challangeVisibilityTecnologies = () => {
  setVisibilityTecnologies(!visibilityTecnologies)
}

const functionTecnologies = () => {
  return(
    
    <div className='container-tecnologies'>
      <div className='container-tecnologies-and-title'>
      <h2 id='title-frontend'>Frontend</h2>
      <div className='container-tecnologies-frontend'>
      <div className='item-tecnologies'><img src={img1HTML} className='img-item-tecnologies' /></div>
      <div className='item-tecnologies'><img src={img2CSS} className='img-item-tecnologies'/></div>
      <div className='item-tecnologies'><img src={img3JAVASCRIPT} className='img-item-tecnologies'/></div>
      <div className='item-tecnologies'><img src={img4REACTJS} className='img-item-tecnologies'/></div>
      </div>
      </div>

<div>
  <div className='container-tecnologies-and-title'>
    <h2 id='title-backend'>Backend</h2>
  </div>
<div className='container-tecnologies-backend'>
      <div className='item-tecnologies'><img src={img5NODEJS} className='img-item-tecnologies'/></div>
      <div className='item-tecnologies'><img src={img6EXPRESS} className='img-item-tecnologies'/></div>
      <div className='item-tecnologies'><img src={img7MYSQL} className='img-item-tecnologies'/></div>
      </div>
    </div>
    </div>
  )
}


  return (
    <div className='fromme-container'>

<div>
  <h1>From Me</h1>
  <h2>
Passionate React.js Developer skilled in transforming designs into responsive web applications. Committed to staying updated on web trends, I bring technical expertise and design sensibility to projects. Thrive in collaborative teams, offering innovative solutions. Let's create remarkable digital experiences together!.</h2>
  <button className='btn-general' onClick={functionRETURN}>Come Back</button>
<button className='btn-general' onClick={challangeVisibilityFullstack}>Fullstack</button>
  </div>

  <div className='fullstack-container'>
{
  visibilityFullstackPresentation && functionVisibilityFullstack()
}

  </div>

  <div className='container-function-visibility-tecnologies'>
   
    {visibilityTecnologies && functionTecnologies()}

  </div>
    
    </div>
  )
}

export default FromMe