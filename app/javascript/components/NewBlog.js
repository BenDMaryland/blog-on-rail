import axios from 'axios'
import React,{useState} from 'react'

function NewBlog() {


    const [blogData, setblogData] = useState(
        {
    blog_title: '',
    blog_post: "",
    image_url: ""

    
   
    
        }
    )
    
    function handleChange(e){
    
        setblogData({
            ...blogData,[e.target.name] : e.target.value
        })
    }
    
    
    function sumbitHandler(e){
       
        e.preventDefault()
 
        
    let blogs=blogData

    axios.post(`/api/v1/blogs`, {...blogs})
    .then(r=>console.log(r))
    

    }
    decodeURIComponent
    console.log(blogData)
        return (
            <form onSubmit={sumbitHandler} >
    <label  >Name:</label>
    <input     name="blog_title"  placeholder=' Title' value={blogData.blog_name}  onChange={handleChange}  type="text" ></input>
    <br/>
    <label  >Blog post</label>
    <textarea    type="text"  name="blog_post"  placeholder=' Name' value={blogData.blog_post}  onChange={handleChange}  type="text" ></textarea>
    <br/>
    <label  >Image url</label>
    <input    type="text"  name="image_url"  placeholder=' Name' value={blogData.image_url}  onChange={handleChange}  type="text" ></input>
    <button type="submit" > Post</button>
            </form>
        )
    }
export default NewBlog
