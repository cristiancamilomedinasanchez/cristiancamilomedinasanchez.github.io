import React, { useState } from 'react';
import contactIMG from '../asses/icons/sin-fondo/contactos_icon_161077-removebg-preview.png';
import correoIMG from '../asses/icons/sin-fondo/correo-removebg-preview.png';
import experienceIMG from '../asses/icons/sin-fondo/experiencia-removebg-preview.png';
import proyectosIMG from '../asses/icons/sin-fondo/trabajos-removebg-preview.png';
import homeIMG from '../asses/icons/sin-fondo/homehd_106102-removebg-preview.png';
import imgLogo from '../asses/LogoCabecera.png'


function BarNav({ setVisibilityGestion, setVisibilityContact, setVisibilityExperience, setVisibilityProyects }) {
  const [visibilityBarnav, setVisibilityBarnav] = useState(false);

  const functionVisibilityBarnav = () => {
    setVisibilityBarnav(!visibilityBarnav);
  };

  const challangeVisibilityContact = () => {
    setVisibilityContact(true);
    setVisibilityExperience(false);
    setVisibilityProyects(false);
    setVisibilityGestion(1);
  };

  const challangeVisibilityExperience = () => {
    setVisibilityContact(false);
    setVisibilityExperience(true);
    setVisibilityProyects(false);
    setVisibilityGestion(2);
  };

  const challangeVisibilityProyects = () => {
    setVisibilityContact(false);
    setVisibilityExperience(false);
    setVisibilityProyects(true);
    setVisibilityGestion(3);
  };

  const showHome = () => {
    setVisibilityGestion(0);
  };

  return (
    <nav className='barnav'>
      <div className='container-theraweb'>
        <img className='img-logo' src={imgLogo} onClick={functionVisibilityBarnav} /><h2 id='thera-web'>Thera Web</h2>
      </div>

      {visibilityBarnav &&
      <div className='container-icons-barnav'>
        <button className='img-barnav-btn' onClick={showHome}><img src={homeIMG} className='img-barnav' /><span className='text-buttons'> Home</span></button>
        <button className='img-barnav-btn' onClick={challangeVisibilityExperience}><img className='img-barnav' src={experienceIMG} /><span className='text-buttons'> Experience</span> </button>
        <button className='img-barnav-btn'><img onClick={challangeVisibilityProyects} className='img-barnav' src={proyectosIMG} /> <span className='text-buttons'> Proyects</span> </button>
        <button className='img-barnav-btn'><img onClick={challangeVisibilityContact} className='img-barnav' src={correoIMG}/><span className='text-buttons'> Contact</span></button>
      </div>
      }
    </nav>
  );
}

export default BarNav;