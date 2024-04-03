import React from 'react'
import bigImgSkills from '../asses/skills.jpeg'
import htmlImg from '../asses/tecnologies/sinfondo/html-removebg-preview.png'
import cssImg from '../asses/tecnologies/sinfondo/css-removebg-preview.png'
import javascriptImg from '../asses/tecnologies/sinfondo/js-removebg-preview.png'
import reactjsImg from '../asses/tecnologies/sinfondo/react_jd-removebg-preview.png'
import expressImg from '../asses/tecnologies/sinfondo/expressjs-removebg-preview (1).png'
import mysqlImg from '../asses/tecnologies/sinfondo/mysql-removebg-preview.png'

function Skills() {
  return (
    <div className='container-skills'>
      <h1 className='skills-letter'>Skills</h1>
  {/* grilla de imagenes */}
      <div className='container-grilla-skills'>
<div className='container-img-skill'>
  <img className='img-skill' src={htmlImg} /> 
</div>
<div className='container-img-skill'>
  <img className='img-skill' src={cssImg} /> 
</div>
<div className='container-img-skill'>
  <img className='img-skill' src={javascriptImg} />
</div>
<div className='container-img-skill'>
  <img className='img-skill' src={reactjsImg} /> 
</div>
<div className='container-img-skill'>
  <img className='img-skill' src={expressImg} /> 
</div>
<div className='container-img-skill'>
  <img className='img-skill' src={mysqlImg} /> 
</div>

      </div>

{/* imagen de referencia*/}

<div className='container-big-img-skills'>
<img className='big-img-skills' src={bigImgSkills} />
</div>

    </div>
  )
}

export default Skills