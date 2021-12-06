import React from 'react'
import SideBar from './SideBar'
import { NavLink, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';
import TopBar from "./TopBar"
import Intro

    from './Intro';
function Home() {
    return (
        <Portfol>
            <TopBar />
            <Intro />
            <Portfolio />
            <Resume />
            <Footer />
        </Portfol>


    )
}

export default Home

const Portfol = styled.div`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #eaecec;


a:hover{
       color: #c093eb ;
    background: linear-gradient(0deg, rgba(0, 0, 0, .5) 40%, rgba(255, 255 ,255 , 0) 100%);;
}


 `