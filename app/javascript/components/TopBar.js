import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';


function TopBar() {
    return (
        <Top>
            
            <Link className="toplink" to="/#intro">Intro</Link>
            <Link className="toplink"to="/#portfolio">Portfoliot</Link>
            <Link className="toplink"to="/#resume">Resume</Link>
        </Top>
    )
}




export default TopBar

const Top = styled.div`

background-color: #202020;
text-align: center;
bottom: 50px;
width: auto;
padding: 0%;

.toplink{
display: inline-flex;
text-align: center;
}




`