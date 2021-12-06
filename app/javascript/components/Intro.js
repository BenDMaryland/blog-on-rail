import React from 'react'
import styled from 'styled-components'
import background from "../assets/images/background.jpg"
function Intro() {
    return (
        <IntroPage id="intro">
            <h1> Hi I'm Ben Darago, A Fullstack Developer  </h1>
            <h2> Here I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or something </h2>
        </IntroPage>
    )
}

export default Intro

const IntroPage = styled.div`
width: 100%;
background-image: url(${background});
height: 100vh;
color: #ffffff;
border: 0ch;
padding: 0ch;

h1{

    margin: 0px;
    padding-top: 40vh;
    padding-left: 50px;
}

`
