import React,{useState,useEffect} from 'react'
import axios, { Axios } from 'axios'
function Blogs() {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
  fetch 

    axios.get("api/v1/blogs.json")
    .then(r=>setblogs(r.data.data) )
    .catch(r=>console.log(r))

    }, [blogs.length])


    if (blogs ===[]) return <h1>loasding</h1>
    console.log(blogs)
    return (




        <div>
          <h1>loading</h1>
        </div>
    )
}

export default Blogs
