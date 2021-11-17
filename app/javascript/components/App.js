import React from 'react'
import { Route, Routes  } from "react-router-dom";
import Blog from './Blog/Blog'
import Blogs from './Blogs/Blogs'


function App() {

    return (
<Routes >

            <Route exact path="/"  element={<Blogs   />}/>
            <Route exact path="/blogs/:id"  element={<Blog   />}/>
          
    
        </Routes >
    )
}

export default App
