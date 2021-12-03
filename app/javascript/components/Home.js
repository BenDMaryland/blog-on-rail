import React from 'react'
import SideBar from './SideBar'
import { NavLink, Route, Routes } from "react-router-dom";
function Home() {
    return (
        <div>
            <SideBar />
         
            <NavLink className='links' to='/blogs'>Blog</NavLink>
        </div>
    )
}

export default Home
