import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function Blogs({slugHandler,fetchedBlog:{id,attributes:{blog_title,blog_post,image_url,slug},relationships}}) {
// console.log(id,blog_title,image_url,slug,relationships)


if(!slug) return <h1>sssss</h1>
    return (



        <Link onClick={()=>slugHandler(slug)} to={ {         pathname:    `/${slug}`     } }>
        <div     >
            <h1 >{blog_title}</h1>
            <img src={image_url}  ></img>
           
          
        </div>
        </Link>
    )
}

export default Blogs


// {
//   "id": "9",
//   "type": "blog",
//   "attributes": {
//       "blog_title": "I need a .map()",
//       "blog_post": "Welcome to my journey to being a software engineer!\n\n    I began my journey at Flatiron School. Flatiron is a coding bootcamp, that teaches you to become a full stack developer in fifteen weeks. Fifteen weeks is an incredibly short amount of time to become a full stack developer, so the program moves fast. By the end of the first day I was already I was starting to question what I got myself into. Tuesday began and we started to get into more and more complex function and JavaScript commands, and I barely grasped what I learned Monday. This was starting to get out of hand, but I was optimistic. I knew what I was doing and I knew I could succeed. \n    \n    And then Wednesday. Array Iteration, and the  .map() lab. \n    \n    \n    \n    \n    \n    \n    The lab was simple enough I had to take an array and capitalize every letter in the array. \n    \n    [\n             \"What Does The This Keyword Mean?\",\n             \"What Is The Constructor OO Pattern?\",\n             \"Implementing Blockchain Web API\",\n             \"The Test Driven Development Workflow\",\n             \"What Is NaN And How Can We Check For It\",\n             \"What Is The Difference Between StopPropagation And PreventDefault?\",\n             \"Immutable State And Pure Functions\",\n             \"What Is The Difference Between == And ===?\",\n             \"What Is The Difference Between Event Capturing And Bubbling?\",\n             \"What Is JSONP?\"\n         ]\n    \n    \n    This is easy.\n    let result = tutorials.map(cap)\n    \n    function cap(string){\n    let firstletter = string.slice(0,1).toUpperCase();\n    let restWord = string.slice(1);\n    let y = firstletter + restWord\n     return y\n    }\n    \n    console.log(result)\n    \n    \n    Bam!\n    I use the Cap function here to capitalize the first letter of every .... wait a sec, this is only going to capitalize the first letter of every element. \n    \n    You see in the first line of the Cap() function the  .slice() function will take the first letter of every string in the array and when combined with the .toUpperCase function will  capitalize it.  Then the second line then will take the rest of the string, and the third line will combine then. \n    The .map function allows up to apply this action to every element tin the array.\n    \n    \n    \n    Huh, looks like the next step should be to find a way to separate the arrays into even more arrays with one array per word. \n    \n    \n    function splitToString(array){\n    let string = array.join()\n    console.log(string)\n    let array2 = string.split(\" \")\n    console.log(array2)\n    \n    }\n    \n    \n    \n    \n    \n    \n    So after some Google-fu I found the .Join() and .split() functions. \n    .join will make an array into a string and .split will separate the a string into an array, where it will split it based on the character you decide. In this case. I choose a space. \n    \n    The result?\n    \n    [    \"What\",    \"Does\",    \"The\",    \"This\",    \"Keyword\",    \"Mean?,What\",    \"Is\",    \"The\",    \"Constructor\",    \"OO\",    \"Pattern?,implementing\",    \"Blockchain\",    \"Web\",    \"API,The\",    \"Test\",    \"Driven\",    \"Development\",    \"Workflow,What\",    \"Is\",    \"NaN\",    \"And\",    \"How\",    \"Can\",    \"We\",    \"Check\",    \"For\",    \"It,What\",    \"Is\",    \"The\",    \"Difference\",    \"Between\",    \"StopPropagation\",    \"And\",    \"PreventDefault?,Immutable\",    \"State\",    \"And\",    \"Pure\",    \"Functions,what\",    \"Is\",    \"The\",    \"Difference\",    \"Between\",    \"==\",    \"And\",    \"===?,what\",    \"Is\",    \"The\",    \"Difference\",  [\n       \"What\",\n       \"Does\",\n       \"The\",\n       \"This\",\n       \"Keyword\",\n       \"Mean?,What\",\n       \"Is\",\n       \"The\",\n       \"Constructor\",\n       \"OO\",\n       \"Pattern?,implementing\",\n       \"Blockchain\",\n       \"Web\",\n       \"API,The\",\n       \"Test\",\n       \"Driven\",\n       \"Development\",\n       \"Workflow,What\",\n       \"Is\",\n       \"NaN\",\n       \"And\",\n       \"How\",\n       \"Can\",\n       \"We\",\n       \"Check\",\n       \"For\",\n       \"It,What\",\n       \"Is\",\n       \"The\",\n       \"Difference\",\n       \"Between\",\n       \"StopPropagation\",\n       \"And\",\n       \"PreventDefault?,Immutable\",\n       \"State\",\n       \"And\",\n       \"Pure\",\n       \"Functions,what\",\n       \"Is\",\n       \"The\",\n       \"Difference\",\n       \"Between\",\n       \"==\",\n       \"And\",\n       \"===?,what\",\n       \"Is\",\n       \"The\",\n       \"Difference\",\n       \"Between\",\n       \"Event\",\n       \"Capturing\",\n       \"And\",\n       \"Bubbling?,what\",\n       \"Is\",\n       \"JSONP?\"\n    ]\n     \"Between\",    \"Event\",    \"Capturing\",    \"And\",    \"Bubbling?,what\",    \"Is\",    \"JSONP?\"]\n    ect....\n    \n    Uhhh that kind of worked. the letters at the end of an element and the begging of another didn't split but I think I can deal with that in another way. now I just have to join them together and.....\n    \n    \n    \n    \n    \n    \n    \n    uhhh that's a lot of commas. Maybe if I split the no... \n    \n    After this I obsessed with this lab I spent days trying to solve it while slowly falling behind. And as out coding challenge was approaching, and I was falling behind.\n    \n    We had a Pre-assessment before the coding challenge. In that Pre-assessment we had three deliverables.  I was able to achieve zero. This is when the imposter syndrome came into full effect.  I was convinced I had no chance of succeeding, I was convinced that this was the end of my journey. \n    \n    \n    Then I hit the books and most importantly. I asked for help. After working with several of my classmates I was able to pass the coding challenge, and I was also able to figure out how to solve the .map lab. \n    \n    let result = tutorials.map(cap)\n    \n    function cap(string){\n    let firstletter = string.slice(0,1).toUpperCase();\n    let restWord = string.slice(1);\n    let y = firstletter + restWord\n     return y\n    }\n    \n    function splitToString(array){\n    let string = array.join(\"**\")\n    console.log(string)\n    let array2 = string.split(\" \")\n    console.log(array2)\n    let results = array2.map(cap)\n    results =  results.join(\" \")\n    results = results.split (\"**\")\n    results = results.map(cap)\n    return results\n    }\n    \n    \n    It was honestly simple. The split command lets you not use commas to separate the arrays. All I had to do was add a character.\n    \n    ",
//       "image_url": "https://www.gsma.com/newsroom/wp-content/uploads//cross-border-data-flows-ASEAN-APEC-cover-image-1.jpg",
//       "slug": "i-need-a-map"
//   },
//   "relationships": {
//       "comments": {
//           "data": [
//               {
//                   "id": "4",
//                   "type": "comment"
//               }
//           ]
//       }
//   }
// }