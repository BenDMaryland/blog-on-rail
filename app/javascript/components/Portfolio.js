import React from 'react'
import styled from 'styled-components'
import agile from "../assets/images/agile.jpg"
import blog from "../assets/images/blog.png"
import tick from "../assets/images/tick.png"



function Portfolio({ scrollHander }) {




    return (


        <Portfol id="portfolio" onMouseEnter={() => scrollHander("portfolio")}  >
            <div className="bar" > </div>
            <h1 id='projects_title' >Here Are Some Of My Projects</h1>
            <div className="project_container_left">
                <h2 className="title" > Agile solutions  </h2>
                <div className='project_left'>
                    <div className="project" id="agile">
                        <h2>Description </h2>
                        <p className="descrip" >A project management application where teams can create projects track progress create KBA's and see live feedback of team members performance. My final project for FlatIron. For this I wanted to create a project where I could track my own progress as I built the application.  </p>
                       <h2>Difficulties  </h2>
                        <p className="descrip" >My two biggest challenges for this project were, figuring out how to create the methods to track progress in the backend, and adding the teams functionality.  </p>
                        <h2>Solutions </h2>
                        <p className="descrip" >For serving data in the correct format I had to learn some new Ruby methods for managing time. Mainly, this allowed me to segregate data based on the dates which then allowed me to create the graphs to track progress. As for the teams functonality, that is a work in progress</p>
                        <a className="links" href="https://bens-agile.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                        <a className="links" href="https://github.com/BenDMaryland/final-project-v4" target="_blank" rel="noopener noreferrer">github</a>
                    </div>
                    <div className='links_container'>
                        <img className="profile_image_left" src={agile} />
                        <h2>Features </h2>
                        <ul>
                            <li>The teams featurres allows multiple teams to work on independent projects separately  </li>
                            <li>KBA's allow teams to have one location for as a repository for all data </li>
                            <li>The Users and Projects tabs, allow managers to track User and project progress</li>
                            <li>Admin and Boss role allows for separation of duties</li>
                            <li>Email.js Allows for high Visability of high impact issues</li>
                            <li>Draft.Js allows user to format KBA's using rich text </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className="project_container_right">

                <h2 className="title" > The Goat Blog</h2>

                <div className='project_right'>
                                      <div className='links_container'>
                        <img className="profile_image_left" src={blog} />



                        <h2>Features </h2>
                        <ul>
                            <li>The teams featurres allows multiple teams to work on independent projects separately  </li>
                            <li>KBA's allow teams to have one location for as a repository for all data </li>
                            <li>The Users and Projects tabs, allow managers to track User and project progress</li>
                            <li>Admin and Boss role allows for separation of duties</li>
                            <li>Email.js Allows for high Visability of high impact issues</li>
                            <li>Draft.Js allows user to format KBA's using rich text </li>
                        </ul>
                    </div>


                    <div className="project" id="blog">

                        <h2>Description </h2>
                        <p className="descrip" >A project management application where teams can create projects track progress create KBA's and see live feedback of team members performance. My final project for FlatIron. For this I wanted to create a project where I could track my own progress as I built the application.  </p>


                        <h2>Difficulties  </h2>
                        <p className="descrip" >My two biggest challenges for this project were, figuring out how to create the methods to track progress in the backend, and adding the teams functionality.  </p>


                        <h2>Solutions </h2>
                        <p className="descrip" >For serving data in the correct format I had to learn some new Ruby methods for managing time. Mainly, this allowed me to segregate data based on the dates which then allowed me to create the graphs to track progress. As for the teams functonality, that is a work in progress</p>

                        <a className="links" href="https://bens-agile.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                        <a className="links" href="https://github.com/BenDMaryland/final-project-v4" target="_blank" rel="noopener noreferrer">github</a>

                    </div>
  






                </div>

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
                <img className="profile_image_left" src={tick} />
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
h2{
    color: #cb8cc2;
      height: fit-content;
}

.bar{
    width: 100vw;
    border: solid;
    border-width: 1px;
    border-color: black;
    height: 0px;
}

.project_container_left{
display: grid;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 10px;
padding-top: 40px;
margin-left: 5%;
margin-top: 15px;
background-color: #f5f5f5;
}

.profile_image_left{

margin-left: 5%;
  background-color: #f5f5f5;
}


.project_container_right{
display: grid;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 40px;
background-color: #f5f5f5;
padding-top: 40px;
margin-right: 5%;
margin-top: 15px;
}
.profile_image_right{
margin-right: 5%;
height: 5%;
 background-color: #f5f5f5;
}

.project{
    /* text-align: center; */
   background-color: #f5f5f5;

   left: auto;
   right: auto;
    height: auto;
    padding:1%;
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
  height: fit-content;
}

a:hover{
    background-color: #eaecec;
}

#projects_title{
text-align: center;
font-family: 'Montserrat', sans-serif;
margin-top: 0ch;
padding-top: 2%;

}

.project_left{
display: grid;
grid-template-columns:repeat(1, 2fr 1fr );
height: fit-content;
}
.project_right{
display: grid;
grid-template-columns:repeat(1, 1fr 2fr );
height: fit-content;
}
.links{

 width: auto;
   margin: auto;
}
img{
    width:20vw;
}

`