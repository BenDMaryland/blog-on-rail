import React,{useState,useEffect} from 'react'
import axios, { Axios } from 'axios'
function Blogs() {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
  fetch 

    axios.get("api/v1/blogs.json")
    .then(r=>setblogs(r.data.data) )
    .catch(r=>console.log(r))
    console.log(blogs)
    }, [blogs.length])

console.log(blogs)
    if (blogs.length ===0) return <h1>loading</h1>
    console.log(blogs[1].attributes.blog_title)
    console.log(blogs)
    return (




        <div>
            <h1>sssssssssssssss</h1>
          <h1>{blogs[1].attributes.blog_title}</h1>
        </div>
    )
}

export default Blogs
