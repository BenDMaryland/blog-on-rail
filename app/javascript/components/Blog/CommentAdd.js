import axios from 'axios'
import React, { useState } from 'react'





function CommentAdd({fetchedBlog}) {

const [CommentData, setCommentData] = useState(
    {
comment_name: '',
comment_title: ""



    }
)

function handleChange(e){

    setCommentData({
        ...CommentData,[e.target.name] : e.target.value
    })
}


function sumbitHandler(e){
    console.log(fetchedBlog)
    e.preventDefault()
console.log(CommentData)
let blog_id= fetchedBlog.data.id 
let comments=CommentData
axios.post(`/api/v1/comments`, {...comments,blog_id })
.then(r=>console.log(r))







}


    return (
        <form onSubmit={sumbitHandler} >
<label  >Name:</label>
<input     name="comment_name"  placeholder=' Name' value={CommentData.comment_name}  onChange={handleChange}  type="text" ></input>
<br/>
<label  >Comment:</label>
<input     name="comment_title"  placeholder=' Name' value={CommentData.comment_title}  onChange={handleChange}  type="text" ></input>
<button type="submit" >Submit</button>
        </form>
    )
}

export default CommentAdd


// <input name='playerName' placeholder='Full Name' value={playerOneData.playerName} onChange={handleChange}/>