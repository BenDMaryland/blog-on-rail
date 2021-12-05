import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Foot>
            <div className="tagline" >
                <p> Always stay Hungry </p>
            </div>

            <div className="links">

                <a href="mailto: ben.d.maryland@gmail.com"  ><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/ben-darago/"  ><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/BenDMaryland"  ><i id="git" className="fab fa-github"></i></a>
                <a href="https://a-blog-on-rails.herokuapp.com/blogs" ><i className="fas fa-blog"></i></a>
                <a href="https://twitter.com/BenjaminDarago" ><i className="fab fa-twitter"></i></a>
            </div>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

        </Foot>
    )
}

export default Footer

const Foot = styled.footer`
background-color: #7510f7;
text-align: center;
bottom: 50px;
width: auto;
padding: 0%;
.links{
display: inline-flex;
text-align: center;
}
a{
border-radius: 60px/60px;
border: solid;
text-align: center;


}


`