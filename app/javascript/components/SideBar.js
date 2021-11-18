import React from 'react'

function SideBar() {
    return (
     
        <nav className="sidebar" tabIndex="0">
        <div className="smartphone-menu-trigger"></div>
      <header className="avatar">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" />
        <h2>Ben.D</h2>
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

