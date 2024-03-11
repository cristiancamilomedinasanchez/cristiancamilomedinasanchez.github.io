import React from 'react'
import img1Whatssap from '../asses/icons/sin-fondo/whatssap-removebg-preview.png'
import img2Whatssap from '../asses/icons/sin-fondo/github-removebg-preview.png'
import img3Whatssap from '../asses/icons/sin-fondo/linkedin-removebg-preview.png'


function Contact() {
  return (
    <div>

      <div className='contact-container'>
        <div className='answer-contact'><h1 >
          You Need Contact to me?</h1>
      <div className='contact-card'>
      <a  href="https://wa.me/3203207924" target="_blank" rel="noopener noreferrer" className='img-contact' ><img src={img1Whatssap} className='img-contactI' /></a>
      <a href='https://github.com/cristiansanchez2715?tab=repositories'className='img-contact'  target="_blank"><img src={img2Whatssap} className='img-contactI' /></a>
      <a href='https://www.linkedin.com/in/cristian-sanchez-09936b263/'className='img-contact'  target="_blank"><img src={img3Whatssap} className='img-contactI' /></a>
      </div>

      <div className='container-doingclick'>
        <h2>Click on One of the Buttons</h2>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact