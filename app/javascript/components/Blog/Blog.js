import React,{useEffect,useState} from 'react'
import { useParams,useLocation } from 'react-router-dom';

import axios from 'axios'

function Blog() {
 

  const [fetchedBlog, setfetchedBlog] = useState()
  let location = useLocation();

  console.log(location)





 useEffect(() => {

 fetch 

axios.get(`api/v1/blogs/${location.pathname}`)
.then(r=>setfetchedBlog(r.data.data) )
.catch(r=>console.log(r))
}, [])


if (!fetchedBlog) return <h1>fffffffffffffffff</h1>



    return (
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2>{fetchedBlog.attributes.blog_title} </h2>  
          <p>{fetchedBlog.attributes.blog_post}</p>
        </div>
    )
}

export default Blog


// {
//   "blog_title": "Troubleshooting or: How I Learned To Stop Worrying And Love The Errors",
//   "blog_post": "According to a poll of over 600 developers (https://resources.overops.com/wp-content/uploads/2020/05/Software_Quality_Survey_2020.pdf)\n    the 70% of develops spend one or more day a week troubleshooting code.\n    \n    And it's no surprise, and project of scale will develop issues as you have hundreds of minds working on it adding new functionality all the time.\n    \n    As projects grow more complex, the need to be able to troubleshoot faulty code effectively rises.\n    \n    So here I want to outline my approach to troubleshooting, and how it's helped me.\n    \n    A couple general tips\n    \n    When troubleshooting, try the easiest/fastest/cheapest option first\n    Take breaks: If you're stuck take a break, come back again.\n    Take a step back, when you get tunnel vison.\n    patients: Troubleshooting is a process that takes time. You need to be patient, this can be hard when you're frustrated, but, it's the key to solving the problem.\n    Step 1: Gather information\n    During this step the key is to gather as much information as possible. ask questions like What does the error message say? When did this start to occur? When does this occur? What parts of my code are running when this issue occurs?\n    You can also do some quick tests, like grabbing variable values, and using tools such as pry or debugger to determine where exactly the code starts to break.\n    \n    Step 2: Isolate variables\n    This is in my opinion by far the most useful step. Figuring out what is going wrong and where is the #1 way I know of to determine what the issue is. This is where you want to use most of your tools. console.log/print variables to see what they look like at various stages of the code. pry/debugger to stop the code just before it breaks to see if variables are what you expect them to be. Comment out parts of the code to see how this effects the code.\n    This step is key to figuring out the root cause of the issue.\n    Try temporary fixes, like hardcoding variables or instead of returning the result of a function console.log it.\n    \n    Step 3: Determine why\n    \n    After Steps 1, and 2, you should have a decent idea of what is happening to cause your error. In this step you need to think of why it's happening. Ask yourself what exactly is happening and why is the result what it is. Once you've determined the root cause the next step is to resolve it.\n    \n    Step 4: Try a solution\n    This step is where it all comes together. Just try a solution, you don't need to put too much thought into this always, just try something. Every time you fail here you learn something, so more attempts the better. If the first time doesn't work reformulate, and try again. If you're spending to much time here, take break or go back to step one. you won't always get it right away sometimes it takes time!\n    \n    Step 5: Lessons Learned\n    So you've fixed the issue? Great! What have you learned? How can you avoid the issue again? How can you better troubleshoot?\n    This step is often overlooked but it's crucial to learn and improve and to be able to spend more time on actually building the app!\n    \n    Final word: Sometimes you can't solve these problems alone, but that's why we have teams, that's why we have Stack overflow. Asking for help can help you see what you're missing.",
//   "image_url": "https://www.gsma.com/newsroom/wp-content/uploads//cross-border-data-flows-ASEAN-APEC-cover-image-1.jpg",
//   "slug": "troubleshooting-or-how-i-learned-to-stop-worrying-and-love-the-errors"
// }