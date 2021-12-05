import React from 'react'
import SideBar from './SideBar'
import { NavLink, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';
function Home() {
    return (
        <Portfol>


            <div className="mainbody">
            <h1 className="name">Name</h1>
            <h4 className="bio" >Bio</h4>
            <Portfolio />
            <Resume />
            <Footer />
            </div>
        </Portfol>


    )
}

export default Home

const Portfol = styled.div`

.mainbody{
position: inherit;

}

`