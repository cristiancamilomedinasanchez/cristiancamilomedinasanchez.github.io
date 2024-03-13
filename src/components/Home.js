import React from 'react'
import { useState } from 'react'
import FromMe from './FromMe'
import Contact from './Contact'
import Experience from './Experience'
import Proyects from './Proyects'
import { useEffect } from 'react'

function Home({visibilityGestion, visibilityContact, visibilityExperience, visibilityProyects}) {
const [visibilityPresentation, setVisibilityPresentation] = useState(false)
const [visiibilityHome, setVisibilityHome] = useState(true)

const visibility = () => {


}

const functionVisibilityFromMe = () => {
    return(
        <React.Fragment>
            <FromMe setVisibilityHome={setVisibilityHome} setVisibilityPresentation={setVisibilityPresentation} />
        </React.Fragment>
    )
}


const functionVisibilityExperience = () => {
    return(
        <React.Fragment>
            <Experience />
        </React.Fragment>
    )
}


const functionVisibilityProyects = () => {
    return(
        <React.Fragment>
            <Proyects />
        </React.Fragment>
    )
}


const functionVisibilityContacts = () => {
    return(
        <React.Fragment>
            <Contact />
        </React.Fragment>
    )
}

const functionVisibility = () => {
    setVisibilityHome(false)
    setVisibilityPresentation(true)
}


  return (
    <div className='home-container'>
 { visiibilityHome && visibilityGestion === 0  && <div className='container-home-presentation'>
<div className='presentation-container'>
<h1 className='name'>Cristian Camilo Medina Sanchez</h1>
<h2>Frontend Development.</h2>
<button className='btn-general'><a style={{color: "white"}} target='_blank' href='https://flowcv.com/resume/7ldnues3cl'>Download CV</a></button>
<button className='btn-general' onClick={functionVisibility}>From Me</button>
</div>



</div>
    }
    {visibilityGestion === 0 && <div className='container-img-presentation'>

</div>}
{
    visibilityPresentation  && visibilityGestion === 0 && functionVisibilityFromMe()
}

{
    visibilityProyects && visibilityGestion === 3 && functionVisibilityProyects()
}


{
    visibilityExperience && visibilityGestion === 2 && functionVisibilityExperience()
}


{
    visibilityContact && visibilityGestion === 1 && functionVisibilityContacts()
}


        </div>
  )
}

export default Home