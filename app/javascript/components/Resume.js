import React from 'react'
import styled from 'styled-components'


function Resume({ scrollHander }) {



    return (
        <ResumePage id="resume" onMouseEnter={() => scrollHander("resume")}       >

            <div className='gridone'>

                {/* <h1 id="resume_title" style={{ "textAlign": "center" }}> Here Is My Resume </h1> */}
                <div className="header">
                    <br />

                    <h2 className="name"> Ben Darago</h2>
                    <h3>Fullstack Web Developer </h3>
                </div>
                <div className="bio">
                    <h2>Bio </h2>
                    <p> Hi here goes my Bio. I will put something here, with buzzwords.  Hi here goes my Bio. I will put something here, with buzzwords. Hi here goes my Bio. I will put something here, with buzzwords. Hi here goes my Bio. I will put something here, with buzzwords. Hi here goes my Bio. I will put something here, with buzzwords. Hi here goes my Bio. I will put something here, with buzzwords. Hi here goes my Bio. I will put something here, with buzzwords. </p>
                </div>

            </div>

            <div className="contacts">
                <a  ><i className="fas fa-mobile"></i><span> 443-546-6043</span></a>
                <a href="mailto: ben.d.maryland@gmail.com"   ><i className="fas fa-envelope"></i><span> ben.d.maryland@gmail.com</span></a>
                <a href="https://www.linkedin.com/in/ben-darago/"  ><i className="fab fa-linkedin"></i><span> LinkedIn</span></a>
                <a href="https://github.com/BenDMaryland"  ><span><i id="git" className="fab fa-github"></i> GitHub</span></a>
                <a href="https://a-blog-on-rails.herokuapp.com/blogs" ><span> <i className="fas fa-blog"></i> Blog</span></a>
                <a href="https://twitter.com/BenjaminDarago" ><span><i className="fab fa-twitter"></i> Twitter</span></a>
            </div>

     
             

            <div className="skills">
                        <h2> Technologies  </h2>
                        <p> Ruby, Rails, SQL, Javscript, React, Postgresql, Sql, Agile, Typescript, HTML, CSS</p>
                    </div>

                <div className="edu">
                    <h2>Education</h2>
                    <h3>FlatIron School</h3>
                    <p>Coding bootcamp where I learned Ruby on Rails and React.js programing languages  </p>

                </div>

                <div className="exp">
                    <h2>Experience</h2>

                    <h3>Ledios: Computer Operator 1</h3>
                    <p>Performed top of my team and promoted to Tier two  </p>
                    <p>Resolved majority of customer issues in ten to fifteen minutes  </p>

                    <h3>Ledios: Tier 2 IT support </h3>
                    <p>Served between twelve and thirty people to resolve a wide variety of IT issues.   </p>
                    <p>Managed all IT service needs for Office of more than fifty employees  </p>

                </div>
        
        </ResumePage>
    )
}

export default Resume

const ResumePage = styled.div`
* {box-sizing:border-box}
background-color: whitesmoke;
width: 55%;
margin-right: 23%;
margin-left: 23%;
height: fit-content;
padding: 1%;
overflow: auto;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   font-family: 'Montserrat', sans-serif;


#resume_title{

     font-family: 'Montserrat', sans-serif;
}

.header{
text-align: center;
float: left;
padding-left: auto;
padding-right: auto;
padding-top: 0;
margin-left: 30px ;
margin-top:2%;
}

.gridone{
display: grid;
grid-template-columns:repeat(1, 1fr );

}


.bio{
    padding-left: auto;
padding-right: auto;
margin-left: 30px ;
padding-bottom: auto;
}

.contacts{
    flex: auto;
    margin: auto;
    width: fit-content;
    display: inline-flex;
    text-align: center;
    padding-top: 30px;
}


.skills{
text-align: center;
display: block;
}


.edu{
text-align: center;
margin-bottom: 100px;


}
.exp{
text-align: center;
margin-bottom: 100px;

}


.softSkills{
text-align: center;
display: block;

;
}





p{
    font-family: 'Roboto', sans-serif;
}

h1{
text-align:center;
color:#cb8cc2;
font-family: 'Roboto', sans-serif;
}
`