import React from 'react'

function SideBar() {
    return (
     
        <nav className="sidebar" tabIndex="0">
        <div className="smartphone-menu-trigger"></div>
      <header className="avatar">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG4xO_PFmycLQ/profile-displayphoto-shrink_400_400/0/1633307960580?e=1642636800&v=beta&t=E7xycAspu2nDDUHEsrJGqVQN7ES_bS9Kf3EdJgST1Gc" />
        <h2 style={{"color": "white"}} >Ben.D</h2>
      </header>
        <div>
        <a href="https://www.linkedin.com/in/ben-darago/"  tabIndex="0" className="icon-dashboard"><span>LinkedIn</span></a>
        <br/>
        <a href="https://github.com/BenDMaryland"  tabIndex="0" className="icon-dashboard"><span>GitHub</span></a>
        <br/>
        <a href="https://a-blog-on-rails.herokuapp.com/"  tabIndex="0" className="icon-dashboard"><span>Blog</span></a>
        <br/>
        <a href="https://github.com/BenDMaryland/Final-projectv-v.2"  tabIndex="0" className="icon-dashboard"><span>Projects</span></a>
      </div>
    </nav>
    
    )
}

export default SideBar

