import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
function NewBlog() {


    const [blogData, setblogData] = useState(
        {
            blog_title: '',
            blog_post: "",
            image_url: ""




        }
    )

    function handleChange(e) {

        setblogData({
            ...blogData, [e.target.name]: e.target.value
        })
    }


    function sumbitHandler(e) {

        e.preventDefault()


        let blogs = blogData

        axios.post(`/api/v1/blogs`, { ...blogs })
            .then(r => console.log(r))


    }


    return (<BlogPoster>
        <form id="blog_input" onSubmit={sumbitHandler} >
            <label  >Name:</label>
            <input name="blog_title" placeholder=' Title' value={blogData.blog_title} onChange={handleChange} type="text" ></input>
            <br />
            <label  >Blog post</label>
            <textarea id="blog_post_input" type="text" name="blog_post" placeholder=' Name' value={blogData.blog_post} onChange={handleChange} type="text" ></textarea>
            <br />
            <label  >Image url</label>
            <input type="text" name="image_url" placeholder=' Name' value={blogData.image_url} onChange={handleChange} type="text" ></input>
            <button type="submit" > Post</button>
        </form>
        <ReactMarkdown />
        <div id="blog_output">

           
            <div id="blog_post_output">
                <ReactMarkdown children={`# ${blogData.blog_title}`} remarkPlugins={[remarkGfm]} id="blog_title_output" />
                <ReactMarkdown children={blogData.blog_post} remarkPlugins={[remarkGfm]}  />
            </div>
        </div>
    </BlogPoster>
    )
}
export default NewBlog

const BlogPoster = styled.div`
white-space: pre-wrap;
#blog_post_input{
    max-width: 35vw;
    width: 35vw;
    min-height: 50vh;
    padding: 5%;
    max-height: fit-content;
    overflow: visible;
    border-radius: inherit;
}
form{
        float: left;
   right: 25vw;
    position: relative;
}

#blog_post_output{
    text-align: left;
    position: absolute;
    width: 100%;
} 

#blog_title_output{
    margin-top:0;
   text-align:center;
    left:0;
}
#blog_output{
     width: 35vw;
    min-width: 35vw;
    min-height: 50vh;
    background: white;
    position: relative;
    left: 28vw;
    border: solid;
}
`