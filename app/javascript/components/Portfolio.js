import React from 'react'
import styled from 'styled-components'
import agile from "../assets/images/agile.jpg"
import blog from "../assets/images/blog.png"




function Portfolio() {


    return (
        <Portfol id="portfolio">
            <h1> My projects</h1>

            <div className="project_container">
                <div className="project" id="agile">
                    <h2 className="title" > Agile solutions  </h2>
                    <p className="descrip" > This was my final project for my class at Flatiron. It is an agile solution for tracking teams progress. It includes OAuth/ Bcrypt for making new accounts diffrent levels of privlage. It tracks Team mebers progress as well as the teams progress. </p>
                    <a className="link" > Click here </a>
                </div>
                <img className="profile_image" src={agile} />
            </div>

            <div className="project_container">
                <img className="profile_image" src={blog} />
                <div className="project" id="blog">
                    <h2 >The Goat Blog  </h2>
                    <p> A side project to learn Rails. Created using React, and ruby on rails. This blog has BLA BLA BLA IDK  Includes OAuth for Authentication Fast API as the API. Axios/styled components... ect </p>
                    <a> Click here </a>
                </div>

            </div>

            <div className="project_container">
                <div className="project" id="Tick">
                    <h2 >Tick-Tack-Toe  </h2>
                    <p> A fully functional tick-tack-toe game, that tracks wins and losses/ties Worked on as a team with Jui and Josh.....maybe link...... </p>
                    <a> Click here </a>
                </div>
                <img className="profile_image" src={blog} />
            </div>

            <div className="project_container">
                <img className="profile_image" src={blog} />
                <div className="project" id="Crossword">
                    <h2 >Crossword  </h2>
                    <p> A side project to make a synamicly generated crossword puzzle. This will wandomly grab words from the dictonary and find matching words that will fit in a crossword board. Then show the words definition to allow you to guess the name of the word.  </p>
                    <a> Click here </a>
                </div>
            </div >
        </Portfol>
    )
}

export default Portfolio

const Portfol = styled.div`

.project_container{
display: flex;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 40px;
}

.project{
    text-align: center;
    background-color: #f5f6f7;
    display:grid;
    width: 70%;
}

#agile{
text-align: right;

}

.profile_image{
width: 30%;
height: 300px;
}


.title {
    text-align: center;
}
.descrip{
  display: block;

}
a{
    align-content:center;
    width: auto;
   margin: auto;
}
a:hover{
    background-color: #eaecec;
}

.link{

  display: block;
}

`