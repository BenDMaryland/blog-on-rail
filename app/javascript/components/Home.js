import React,{useState} from 'react'
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
const [wheelLocation, setwheelLocation] = useState("intro")
    function scrollHander(e){
        setwheelLocation(e)
      
    }

    return (
        <Portfol >
            <TopBar wheelLocation={wheelLocation} scrollHander={scrollHander} />
            <Intro scrollHander={scrollHander}  />
            <Portfolio scrollHander={scrollHander}  />
            <Resume  scrollHander={scrollHander}  />
            <Footer scrollHander={scrollHander}    />
        </Portfol>


    )
}

export default Home

const Portfol = styled.div`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #eaecec;





 `