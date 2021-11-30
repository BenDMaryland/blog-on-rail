import React,{useEffect,useState} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import Comments from './Comments';
import axios from 'axios'
import CommentAdd from './CommentAdd';
import styled from 'styled-components';
function Blog() {


  const [fetchedBlog, setfetchedBlog] = useState()
  let location = useLocation();

  console.log(location)





 useEffect(() => {

 fetch 

axios.get(`api/v1/blogs/${location.pathname}`)
.then(r=>setfetchedBlog(r.data) )
.catch(r=>console.log(r))
}, [])


if (!fetchedBlog) return <h1>fffffffffffffffff</h1>
console.log(fetchedBlog.included)


    return (
        <BlogCard>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2>{fetchedBlog.data.attributes.blog_title} </h2>  
          {/* <img   src={fetchedBlog.data.attributes.image_url}     />  */}
          <p>{fetchedBlog.data.attributes.blog_post}</p>
          <CommentAdd fetchedBlog={fetchedBlog} />
         {       fetchedBlog.included.map ( (comment)=> {  return      <Comments key={comment.id} comment={comment} />  }  )        }
        </BlogCard>
    )
}

export default Blog

const BlogCard= styled.div `


p{
  left: 350px;
  right: 350px;
  position: relative;
  text-align:left;
  line-height: 32px;
	white-space: pre-wrap;
  letter-spacing: -0.003em;
  font-family: 'Roboto', sans-serif;
}

img{


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