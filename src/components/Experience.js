import React from 'react'

function Experience() {
  return (
    <div className='experience-container'>
       <div className="introduction">
        <h1>Frontend And Fullstack </h1>
        <h2>
          <strong>As a passionate developer,</strong> I have accumulated solid experience through a series of independent projects that showcase my ability to tackle challenges innovatively and create effective solutions. My knowledge spans key technologies such as React.js, Node.js, Express, and MySQL, enabling me to design and develop dynamic and functional web applications.
        </h2>
      </div>

      <div className="project-grid">
        <div className="project-item">
          <h1>Bit Pay Trading</h1>
          <h2>Cryptocurrency trading platform with a robust user authentication system.</h2>
        </div>

        <div className="project-item">
          <h1>TwoChat In One</h1>
          <h2>Chat application exploring the use of websockets and data storage in a database.</h2>
        </div>

        <div className="project-item">
          <h1>Menu Digital</h1>
          <h2>Interactive solution for users to create their own digital menus directly from the frontend.</h2>
        </div>

        <div className="project-item">
          <h1>QR Platform</h1>
          <h2>Platform facilitating the creation and generation of QR codes for custom digital menus.</h2>
        </div>

        <div className="project-item">
          <h1>Cheff Tweet</h1>
          <h2>Social network dedicated to sharing cooking recipes.</h2>
        </div>

        <div className="project-item">
          <h1>Thera Encrypted</h1>
          <h2>Platform designed to ensure a high level of security in data encryption.</h2>
        </div>
      </div>

    </div>
  )
}

export default Experience