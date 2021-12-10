import React from 'react'
import styled from 'styled-components'
import agile from "../assets/images/agile.jpg"
import blog from "../assets/images/blog.png"
import tick from "../assets/images/tick.png"



function Portfolio({ scrollHander } ) {




    return (
        <Portfol id="portfolio" onMouseEnter={() => scrollHander("portfolio")}  >
            <div className="bar" > </div>
            <h1 id='projects_title' >Here Are Some Of My Projects</h1>

            <div className="project_container_left">
                <div className="project" id="agile">
                    <h2 className="title" > Agile solutions  </h2>
                    <p className="descrip" > I solve Agile.  I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. I solve Agile. </p>
                    <a className="link" > Click here </a>
                </div>
                <img className="profile_image_left" src={agile} />
            </div>

            <div className="project_container_right">
                <img className="profile_image_right" src={blog} />
                <div className="project" id="blog">
                    <h2 >The Goat Blog  </h2>
                    <p> A side project to learn Rails. A side project to learn Rails. This blog has BLA BLA BLA   Includes OAuth for Authentication Fast API as the API. Axios/styled components... ect </p>
                    <a> Click here </a>
                </div>

            </div>

            <div className="project_container_left">
                <div className="project" id="Tick">
                    <h2 >Tick-Tack-Toe  </h2>
                    <p> A fully functional tick-tack-toe game, A fully functional tick-tack-toe game A fully functional tick-tack-toe game A fully functional tick-tack-toe game, A fully functional tick-tack-toe game A fully functional tick-tack-toe game </p>
                    <a> Click here </a>
                </div>
                <img className="profile_image_left" src={tick   } />
            </div>

            <div className="project_container_right">
                <img className="profile_image_right" src={blog} />
                <div className="project" id="Crossword">
                    <h2 >Phase 4 project  </h2>
                    <p> My project for phase 4 where I did something! My project for phase 4 where I did something! My project for phase 4 where I did something! My project for phase 4 where I did something! My project for phase 4 where I did something! My project for phase 4 where I did something! My project for phase 4 where I did something!  </p>
                    <a> Click here </a>
                </div>
            </div >
        </Portfol>
    )
}

export default Portfolio

const Portfol = styled.div`

padding-bottom: 100px;
background-color: #cb8cc2;


.bar{
    width: 100vw;
    border: solid;
    border-width: 1px;
    border-color: black;
    height: 0px;
}

.project_container_left{
display: flex;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 40px;
padding-top: 40px;
margin-left: 5%;
margin-top: 15px;
background-color: #f5f5f5;
}

.profile_image_left{
width: 30%;
margin-left: 5%;
height: auto;
  background-color: #f5f5f5;
}

.project_container_right{
display: flex;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 40px;
background-color: #f5f5f5;
padding-top: 40px;
margin-right: 5%;
margin-top: 15px;
}
.profile_image_right{
width: 30%;
margin-right: 5%;
height: auto;
 background-color: #f5f5f5;
}
.project{
    text-align: center;
   background-color: #f5f5f5;
    display:grid;
   left: auto;
   right: auto;
    width: 70%;
    height: auto;
    p{
width: 95%;
color: black;
    }
}
.title {
    text-align: center;
}
.descrip{
  display: block;
}
a{
 width: auto;
   margin: auto;
}
a:hover{
    background-color: #eaecec;
}

.link{

  display: block;
}
#projects_title{
text-align: center;
font-family: 'Montserrat', sans-serif;
margin-top: 0ch;
padding-top: 2%;

}
`