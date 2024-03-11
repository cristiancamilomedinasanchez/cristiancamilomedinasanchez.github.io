import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import BarNav from './components/BarNav'
import { useState } from 'react';

function App() {
  const [visibilityGestion, setVisibilityGestion] = useState(0)
  const [visibilityExperience, setVisibilityExperience] = useState(false)
  const [visibilityProyects, setVisibilityProyects] = useState(false)
  const [visibilityContact, setVisibilityContact] = useState(false)
  

  return (
    <div className="App">
<React.Fragment>
  <BarNav setVisibilityGestion={setVisibilityGestion} setVisibilityContact={setVisibilityContact} setVisibilityExperience={setVisibilityExperience} setVisibilityProyects={setVisibilityProyects} />
<Home visibilityGestion={visibilityGestion} visibilityContact={visibilityContact} visibilityExperience={visibilityExperience} visibilityProyects={visibilityProyects} />
</React.Fragment>

    </div>
  );
}

export default App;
