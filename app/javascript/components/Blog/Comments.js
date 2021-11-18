import React from 'react'

function Comments({comment}) {

   
    return (
<div>
  

        <ul>
            <li>{comment.attributes.comment_name}</li>
    
            <li>{comment.attributes.comment_title}</li>
        </ul>

        </div>

    )
}

export default Comments
// {
//     "id": "9",
//     "type": "comment",
//     "attributes": {
//         "comment_name": "Steve Jobs",
//         "comment_title": "Genius post!",
//         "blog_id": 18
//     }
// }