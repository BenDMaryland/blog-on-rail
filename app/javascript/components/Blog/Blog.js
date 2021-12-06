import React,{useEffect,useState} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import Comments from './Comments';
import axios from 'axios'
import CommentAdd from './CommentAdd';
import styled from 'styled-components';
function Blog() {


  const [fetchedBlog, setfetchedBlog] = useState()
  let location = useLocation();
  console.log(location.pathname)

 useEffect(() => {

 fetch 

axios.get(`/api/v1/${location.pathname}`)
.then(r=>setfetchedBlog(r.data) )
.catch(r=>console.log(r))
}, [])


if (!fetchedBlog) return <h1>Loading</h1>

    return (
        <BlogCard>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2>{fetchedBlog.data.attributes.blog_title} </h2>  
          {/* <img   src={fetchedBlog.data.attributes.image_url}     />  */}
          <p className="blog"  >{fetchedBlog.data.attributes.blog_post}</p>
          <CommentAdd fetchedBlog={fetchedBlog} />
         {       fetchedBlog.included.map ( (comment)=> {  return      <Comments key={comment.id} comment={comment} />  }  )        }
        </BlogCard>
    )
}

export default Blog

const BlogCard= styled.div `


  overflow: inherit;
    	left: 20%;
    	right: 40%;

max-width: 80%;
.blog{


  padding-right: 10%;
  overflow: inherit;
    	left: 10%;
    	right: 40%;
    	position: relative;
    	text-align:left;
    	line-height: 32px;
    	  white-space: pre-wrap;
    	letter-spacing: -0.003em;
    	font-family: 'Roboto', sans-serif;

}

`


// 
// // {
//   "id": "9",
//   "type": "comment",
//   "attributes": {
//       "comment_name": "Steve Jobs",
//       "comment_title": "Genius post!",
//       "blog_id": 18
//   }
// }