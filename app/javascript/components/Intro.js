import React from 'react'
import styled from 'styled-components'
import background from "../assets/images/background.jpg"
function Intro() {
    return (
        <IntroPage id="intro">
            <h1> Hi I'm Ben, A Fullstack Developer  </h1>
            <h2> Here I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or somethingHere I talk about myself or something </h2>
        </IntroPage>
    )
}

export default Intro

const IntroPage = styled.div`
width: 100%;
background-image: url(${background});
height: 100vh;
background-size: cover;
color: #ffffff;
border: 0ch;
padding: 0ch;

h1{
    text-align: center;
    margin: 0px;
    padding-top: 40vh;
    padding-left: 50px;
}

h2{
    padding-top: 50px;
padding-left: 20%;
padding-right: 20%;
text-align: center;

}

`
