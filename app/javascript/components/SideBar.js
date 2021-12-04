import React from 'react'
import styled from 'styled-components';

function SideBar() {
    return (
      <SideBar>
        <nav className="sidebar" tabIndex="0">
      <header >
            
          <img className="avatar"   src="https://media-exp1.licdn.com/dms/image/C4D03AQG4xO_PFmycLQ/profile-displayphoto-shrink_400_400/0/1633307960580?e=1642636800&v=beta&t=E7xycAspu2nDDUHEsrJGqVQN7ES_bS9Kf3EdJgST1Gc" />
            <br />
            <br />
            <h4 className="name" style={{"color": "white"}} >Ben Darago</h4>
            <p className="title" style={{ "color": "white" }} >Full Stack Developer</p>
      </header>
        <div>
            <br />
            <a href="https://www.linkedin.com/in/ben-darago/" tabIndex="0" className="icon-dashboard"><i className="fab fa-linkedin"></i><span> LinkedIn</span></a>
        <br/>
            <a href="https://github.com/BenDMaryland" tabIndex="0" className="icon-dashboard"><span><i id="git" className="fab fa-github"></i>                          GitHub</span></a>
        <br/>
            <a href="https://a-blog-on-rails.herokuapp.com/" tabIndex="0" className="icon-dashboard"><span> <i className="fas fa-blog"></i> Blog</span></a>
        <br/>
         
            <a href="https://github.com/BenDMaryland/Final-projectv-v.2" tabIndex="0" className="icon-dashboard"><span><i className="fab fa-twitter"></i> Twitter</span></a>
      </div>
    </nav>
   </SideBar>
    )
}

export default SideBar


SideBar = styled.div `
// @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css")
// @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap");

  .sidebar {
  height: 100%;
  width: 10%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #222629;
  overflow-x: hidden;
  padding-top: 16px;
}

span{
text-align:right;
}

 a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: inline-flex;
}
.avatar{
  width:50px;
 
  left:10px;
display:flex;

}
.name{
font-family: 'Source Sans Pro', sans-serif;
text-align:right;
    margin-bottom: 0px;


}

.title{
font-family: 'Source Sans Pro', sans-serif;
text-align:right;
margin-top: 0px;
}
i{

text-align:left;

}

`
