import React from 'react'
import styled from 'styled-components'
import headshot from "../assets/images/Headshot.png"

function Resume() {







    return (
        <ResumePage id="resume" >
            <h1 style={{"text-align":"center"}}> Resume </h1>
            <div className="header">
                <br />
                
                <h2 className="name"> Ben Darago</h2>
                <h3>Fullstack Web Developer </h3>
            </div>
            <img id="resume_pic" src={headshot} />
            <div className="bio">
                <h2>Bio </h2>
                <p>  Hi I'm a Fullstack webdeveloper who is passonaint about creating new projects and building up the web. I'm a graduatre from Flation School and would love to be a part of your team.  Hi I'm a Fullstack webdeveloper who is passonaint about creating new projects and building up the web. I'm a graduatre from Flation School and would love to be a part of your team. Hi I'm a Fullstack webdeveloper who is passonaint about creating new projects and building up the web. I'm a graduatre from Flation School and would love to be a part of your team. Hi I'm a Fullstack webdeveloper who is passonaint about creating new projects and building up the web. I'm a graduatre from Flation School and would love to be a part of your team. </p>
            </div>


            <div className="contacts">
                <a  ><i className="fas fa-mobile"></i><span> 443-546-6043</span></a>
                <a href="mailto: ben.d.maryland@gmail.com"   ><i className="fas fa-envelope"></i><span> ben.d.maryland@gmail.com</span></a>
                <a href="https://www.linkedin.com/in/ben-darago/"  ><i className="fab fa-linkedin"></i><span> LinkedIn</span></a>
                <a href="https://github.com/BenDMaryland"  ><span><i id="git" className="fab fa-github"></i> GitHub</span></a>
                <a href="https://a-blog-on-rails.herokuapp.com/blogs" ><span> <i className="fas fa-blog"></i> Blog</span></a>
                <a href="https://twitter.com/BenjaminDarago" ><span><i className="fab fa-twitter"></i> Twitter</span></a>
            </div>

            <div className="technologies" >
                <h2> Technologies </h2>

                <p className="tech">React </p>
                <div className="bar_container">
                    <div className="skills react">90%</div>
                </div>

                <p>JavaScript </p>
                <div className="bar_container">
                    <div className="skills js">70%</div>
                </div>

                <p>Rails</p>
                <div className="bar_container">
                    <div className="skills rails">65%</div>
                </div>

                <p>Ruby</p>
                <div className="bar_container">
                    <div className="skills ruby">60%</div>
                </div>

                <p>HTML/CSS</p>
                <div className="bar_container">
                    <div className="skills html">65%</div>
                </div>

                <p>Typescript</p>
                <div className="bar_container">
                    <div className="skills typescript">30%</div>
                </div>



            </div>

            <div className="softSkills" >
                <h2> Skills  </h2>
                <div>
                    <div> Troubleshooting </div>
                    <div> Working with teams (word this better) </div>
                    <div> Flexable </div>
                    <div> Drive </div>
                </div>
            </div>

            <div className="edu">
                <h2>Education</h2>
                <h3>Flation School</h3>
                <p>A leading Bootcamp, where my career coach told me what to put here   </p>

            </div>

            <div className="exp">
                <h2>Experince</h2>
                <h3>Ledios: Tier 2 IT support </h3>
                <p>A did good as a tier two technian where i learned to manage my own projects work as a team and troubleshoot a wide variety of issues. </p>
            </div>
        </ResumePage>
    )
}

export default Resume

const ResumePage = styled.div`
* {box-sizing:border-box}
background-color: whitesmoke;
width: 100%;


.header{
text-align: center;
float: left;
padding-left: auto;
padding-right: auto;
margin-left: 30px ;
}
.bio{
    padding-left: auto;
padding-right: auto;
margin-left: 30px ;
}



.skills{
text-align: right;
display: flex;
padding-left: 10px;
}


.edu{
text-align: center;
margin-bottom: 100px;


}
.exp{
text-align: center;
margin-bottom: 100px;

}

.technologies{
    position: relative;
    text-align: center;
    margin: auto;
    width: 50%;
    margin-left: 10px;
    margin-right: 0px;
    float: left;
}

.softSkills{
margin-bottom: 100px;
text-align: center;

;
}


.bar_container{
  width: 100%; 
  background-color: #ddd; 
}

.skills {
  text-align: right; 
  padding-top: 10px; 
  padding-bottom: 10px; 
  padding-right: 10px;
  color: white; 
}

.react {width: 90%; background-color: #b26baf;}
.js {width: 70%; background-color: #964e98;}
.rails {width: 65%; background-color: #c093eb;}
.ruby  {width: 60%; background-color: #634173;}
.html {width: 65%; background-color: #421c58;}
.typescript  {width: 30%; background-color: #8c4e9c;}

#resume_pic{
width: 200px;
margin: auto;

}
.contacts{
    flex: auto;
    margin: auto;
    width: fit-content;
    display: flex;
    text-align: center;
}
p{
    font-family: 'Roboto', sans-serif;
}

h1{

font-family: 'Roboto', sans-serif;
}
`