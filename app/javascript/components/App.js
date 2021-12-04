import React from 'react'
import { NavLink, Route, Routes } from "react-router-dom";
import BlogContainer from './Blog_container'
import Home from "./Home"
import SideBar from './SideBar';
import styled from 'styled-components';




function App() {
    return (
        <MainBody>

     
          <Routes>
            <Route exact path="/" element={< Home />} />
              <Route  path="/blogs/*" element={< BlogContainer />} /> 
            </Routes>
        </MainBody>
    )
}

export default App
 const MainBody = styled.div`

// @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap");


@mixin breakpoint($point) {
    @if $point == desktop {
        @media(min - width: $desktop) {
            @content;
        }
    }
}

html {
    box sizing: border - box;
    font-size: 62.5 %;

  *,
  *: before,
  *:after {
        box - sizing: inherit;
    }
}

body {
    background - image: url(../javascript/assets / images / overlay.png);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #f5fafa;
}


 a {
text-align: center;
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;

    main{
    text-align: center;
     width: 90%;
     right:90%
    background - color: #f5fafa;
}
}`