import React from 'react'
import styled from 'styled-components'
import agile from "../assets/images/agile.png"
import blog from "../assets/images/blog.png"
import tick from "../assets/images/tick.png"
import car from "../assets/images/car.png"


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
                    </div>
                    <div className='links_container'>
                        <img className="profile_image_left" src={agile} />
                        <p>To see all features of this page please use the default login / New accounts have limited access</p>
                        <h2>Features </h2>
                        <ul>
                            <li>The teams features allows multiple teams to work on independent projects separately  </li>
                            <li>KBA's allow teams to have one location for as a repository for all data </li>
                            <li>The Users and Projects tabs, allow managers to track User and project progress</li>
                            <li>Admin and Boss role allows for separation of duties</li>
                            <li>Email.js Allows for high visibility of high impact issues</li>
                            <li>Draft.Js allows user to format KBA's using rich text </li>
                        </ul>
                        <a className="links" href="https://bens-agile.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                        <a className="links" href="https://www.youtube.com/watch?v=BkXrwttoKd4" target="_blank" rel="noopener noreferrer">Demo</a>
                        <a className="links" href="https://github.com/BenDMaryland/final-project-v4" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </div>


            <div className="project_container_right">
                <h2 className="title" > The Greatest Battle of All Time</h2>
                <div className='project_right'>
                                      <div className='links_container'>
                        <img className="profile_image_left" src={blog} />
                        <h2>Features </h2>
                        <ul>
                            <li> Players can be created and added to the sqlite database</li>        
                            <li>When a player is chosen they are dynamically removed from the other players pool </li>
                             <li>All games are tracked and game-states are available for all users to see </li>
                        </ul>
                        <a className="links" href="https://www.youtube.com/watch?v=pquDnnZYabs" target="_blank" rel="noopener noreferrer">Demo</a>
                        <a className="links" href="https://github.com/andesjoshua/tick-tack-toe" target="_blank" rel="noopener noreferrer">Front-End</a>
                        <a className="links" href="https://github.com/BenDMaryland/phase-3-sinatra-react-project" target="_blank" rel="noopener noreferrer">Back-End</a>
                    </div>
                    <div className="project" id="blog">
                        <h2>Description </h2>
                        <p className="descrip" >A tick-tack-toe game that allows users to battle against friends, track wins, and see previous games. </p>
                        <h2>Difficulties  </h2>
                        <p className="descrip" >This project's main difficulty was all the bugs that popped up as we developed it. With several bugs happening the day before our deadline  </p>
                        <h2>Solutions </h2>
                        <p className="descrip" >We found that our best way to resolve all the issues was to refactor a lot of the code, to make it more in-line with how react should be. For the bugs that emerged the final days we were able to make some last minute patches to make it functional, and resolve most of the issues completely after our presentation.   </p>
                    </div>
                </div>
            </div>

            <div className="project_container_left">
                <h2 className="title" > Car Media  </h2>
                <div className='project_left'>
                    <div className="project" id="agile">
                        <h2>Description </h2>
                        <p className="descrip" >An social media application allowing users to post, rate, and review vintage cars.  </p>
                        <h2>Difficulties  </h2>
                        <p className="descrip" >This was a group project so the biggest challenge for us was being able to efficiently divide labour, as well as use github effectively.  </p>
                        <h2>Solutions </h2>
                        <p className="descrip" >We were able to divide the labour by setting a schedule with deadlines. Each team member was responsible for specific tasks , and since we had deadlines we were able to very easily track progress and meat goals. We also made it a priority to learn how to use github as a team.</p>
                    </div>
                    <div className='links_container'>
                        <img className="profile_image_left" src={car} />
                        <h2>Features </h2>
                        <ul>
                            <li>Material-UI  used for styling allowed us to make a intuitive and easy to follow User interface. </li>
                            <li>React front end to allow for easy changes and upgrades</li>
                            <li>Ruby on Rails backend allows for a dynamic experience that can be quickly upgrades.</li>
                        </ul>
                        {/* <a className="links" href="https://carmedia.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site not Avilable  ATM </a> */}
                        <a className="links" href="https://github.com/srizvyy/phase-4-project" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </div>


            <h1 id='resume_title' >Here is my Resume</h1>
        </Portfol>
    )
}

export default Portfolio

const Portfol = styled.div`

padding-bottom: 20px;
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
padding-top: 20px;
margin-left: 5%;
    margin-right: 20px;
margin-top: 15px;
background-color: #f5f5f5;
padding-bottom: 20px;
}

.profile_image_left{

margin-left: 30%;
  background-color: #f5f5f5;
}


.project_container_right{
display: grid;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 20px;
background-color: #f5f5f5;
padding-top: 20px;
    margin-left: 20px;
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
#resume_title{
text-align: center;
font-family: 'Montserrat', sans-serif;
margin-top: 2ch;
padding-top: 2%;
padding-bottom:0 ;
margin-bottom:0 ;
}

.project_left{
display: grid;
grid-template-columns:repeat(1, 1fr 1fr );
height: fit-content;
}
.project_right{
display: grid;
grid-template-columns:repeat(1, 1fr 1fr );
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