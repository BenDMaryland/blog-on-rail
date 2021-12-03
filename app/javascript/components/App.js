import React from 'react'
import { NavLink, Route, Routes } from "react-router-dom";
import BlogContainer from './Blog_container'
import Home from "./Home"
import SideBar from './SideBar';
import styled from 'styled-components';




function App() {
    return (
        <>

     
          <Routes>
            <Route exact path="/" element={< Home />} />
              <Route  path="/blogs/*" element={< BlogContainer />} /> 
            </Routes>
        </>
    )
}

export default App
