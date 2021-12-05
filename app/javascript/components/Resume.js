import React from 'react'
import styled from 'styled-components'

function Resume() {
    return (
        <ResumePage>
            <div  className="header">
                <br />
                <h1> Resume </h1>
                <h2 className="name"> Ben Darago</h2>
                <h3>Fullstack Web Developer </h3>
            </div>

            <div className="bio">
                <p> Hi I'm a Fullstack webdeveloper who is passonaint about creating new projects and building up the web. I'm a graduatre from Flation School and would love to be a part of your team.   </p>
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
                <li>
                    <ul> React.js </ul> <div> 7/10</div>
                    <ul> JavaScript </ul> <div> 5/10</div>
                    <ul> Ruby </ul> <div> 5/10</div>
                    <ul> Rails </ul> <div> 7/10</div>
                    <ul> node.js </ul> <div> 4/10</div>
                    <ul> Python </ul> <div> 3/10</div>
                    <ul> TypeScript </ul> <div> 6/10</div>
                </li>
            </div>

            <div className="Skills" >
                <h2> Skills  </h2>
                <li>
                    <ul> Troubleshooting </ul>
                    <ul> Working with teams (word this better) </ul>
                    <ul> Flexable </ul>
                    <ul> Drive </ul>
                </li>
            </div>

            <div className="exp">
                <h2>Education</h2>
                <h3>Flation School</h3>
                <p>A leading Bootcamp, where my career coach told me what to put here   </p>

                </div>

            <div className="edu"> 
                <h2>Experince</h2>
                <h3>Ledios: Tier 2 IT support </h3>
                <p>A did good as a tier two technian where i learned to manage my own projects work as a team and troubleshoot a wide variety of issues. </p>
            </div>
        </ResumePage>
    )
}

export default Resume

const ResumePage = styled.div`
background-color: antiquewhite;
width: 100%;
.header{
text-align: center;
}

.contacts{
    display: flex;
    text-align: center;
}

.skills{
text-align: right;
display: flex;

}

.technologies{
text-align: left;
display: flex;
}

.exp{
text-align: center;
display: flex;

}
.edu{
text-align: center;
display: flex;

}


`