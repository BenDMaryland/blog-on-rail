import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';


function TopBar() {
    return (
        <Top>

            <Link className="toplink" to="/#intro">Intro</Link>
            <Link className="toplink" to="/#portfolio">Portfolio</Link>
            <Link className="toplink" to="/#resume">Resume</Link>
        </Top>
    )
}




export default TopBar

const Top = styled.div`

background-color: #202020;
text-align: center;
bottom: 50px;
width: 100%;
padding: 0%;
position: fixed;
z-index: 2;
top: 0em;
bottom:auto;

.toplink{
display: inline-flex;
text-align: center;
}
a:hover{
    background-color: #1a1a1a;
    color:  #c093eb;
    

}




`