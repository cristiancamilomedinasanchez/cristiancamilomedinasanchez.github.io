import logo from './logo.svg';
import './App.css';
import React from 'react';
import Inicio from './components/Inicio';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Proyects from './components/Proyects';
import Contacto from './components/Contacto';
import imgLogo from './asses/LogoCabecera.png'



function App() {
  return (
    <div className="App">
      <nav className='barnav'>
        <div className='container-barnavlogo'>
          <div className='container-barnavlogo-items'>
          <h1 className='thera-web-title'>Thera Web</h1>
          <img src={imgLogo} className='img-barnav' />
          </div>
        </div>
        <div className='items-barnav-container'>
        <a href='#inicio' className='itembarnav'>INICIO</a>
        
        <a href='#aboutme' className='itembarnav'>ABOUT ME</a>
        
        <a href='#skills' className='itembarnav'>SKILLS</a>
        
        <a href='#proyects' className='itembarnav'>PROYECTS</a>
        
        <a href='#contacto' className='itembarnav'>CONTACT</a>
        </div>
      </nav>
      <React.Fragment>
        <div id='inicio' className='container-seccion'>
        <Inicio />
        </div>
        <div id='aboutme' className='container-seccion'>
        <AboutMe />
        </div>
        <div id='skills' className='container-seccion'>
        <Skills />
        </div>
        <div id='proyects' className='container-seccion'>
        <Proyects />
        </div>
        <div id='contacto' className='container-seccion'>
        <Contacto />
        </div>
      </React.Fragment>
      <p>Probando</p>
    </div>
  );
}

export default App;
