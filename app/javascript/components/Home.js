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
        <>
            <TopBar />
            <Intro />
            <Portfolio />
            <Resume/>
            <Footer />
        </>


    )
}

export default Home

// const Portfol = styled.div`

//  background-color: #f5fafa;

// `