# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# ActiveRecord::Schema.define(version: 2021_11_11_032902) do

#     create_table "blog_posts", force: :cascade do |t|
#       t.string "blog_text"
#       t.string "img_url"
#       t.string "blog_post"
#       t.datetime "created_at", precision: 6, null: false
#       t.datetime "updated_at", precision: 6, null: false
#     end
  
#     create_table "comments", force: :cascade do |t|
#       t.string "comment_user"
#       t.string "comment_text"
#       t.integer "blog_post_id", null: false
#       t.datetime "created_at", precision: 6, null: false
#       t.datetime "updated_at", precision: 6, null: false
#       t.index ["blog_post_id"], name: "index_comments_on_blog_post_id"
#     end
  
#     add_foreign_key "comments", "blog_posts"
#   end

  

blog1= Blog.create(blog_title: "I need a .map()", image_url: "https://www.gsma.com/newsroom/wp-content/uploads//cross-border-data-flows-ASEAN-APEC-cover-image-1.jpg", blog_post: %q[Welcome to my journey to being a software engineer!

    I began my journey at Flatiron School. Flatiron is a coding bootcamp, that teaches you to become a full stack developer in fifteen weeks. Fifteen weeks is an incredibly short amount of time to become a full stack developer, so the program moves fast. By the end of the first day I was already I was starting to question what I got myself into. Tuesday began and we started to get into more and more complex function and JavaScript commands, and I barely grasped what I learned Monday. This was starting to get out of hand, but I was optimistic. I knew what I was doing and I knew I could succeed. 
    
    And then Wednesday. Array Iteration, and the  .map() lab. 
    
    
    
    
    
    
    The lab was simple enough I had to take an array and capitalize every letter in the array. 
    
    [
             "What Does The This Keyword Mean?",
             "What Is The Constructor OO Pattern?",
             "Implementing Blockchain Web API",
             "The Test Driven Development Workflow",
             "What Is NaN And How Can We Check For It",
             "What Is The Difference Between StopPropagation And PreventDefault?",
             "Immutable State And Pure Functions",
             "What Is The Difference Between == And ===?",
             "What Is The Difference Between Event Capturing And Bubbling?",
             "What Is JSONP?"
         ]
    
    
    This is easy.
    let result = tutorials.map(cap)
    
    function cap(string){
    let firstletter = string.slice(0,1).toUpperCase();
    let restWord = string.slice(1);
    let y = firstletter + restWord
     return y
    }
    
    console.log(result)
    
    
    Bam!
    I use the Cap function here to capitalize the first letter of every .... wait a sec, this is only going to capitalize the first letter of every element. 
    
    You see in the first line of the Cap() function the  .slice() function will take the first letter of every string in the array and when combined with the .toUpperCase function will  capitalize it.  Then the second line then will take the rest of the string, and the third line will combine then. 
    The .map function allows up to apply this action to every element tin the array.
    
    
    
    Huh, looks like the next step should be to find a way to separate the arrays into even more arrays with one array per word. 
    
    
    function splitToString(array){
    let string = array.join()
    console.log(string)
    let array2 = string.split(" ")
    console.log(array2)
    
    }
    
    
    
    
    
    
    So after some Google-fu I found the .Join() and .split() functions. 
    .join will make an array into a string and .split will separate the a string into an array, where it will split it based on the character you decide. In this case. I choose a space. 
    
    The result?
    
    [    "What",    "Does",    "The",    "This",    "Keyword",    "Mean?,What",    "Is",    "The",    "Constructor",    "OO",    "Pattern?,implementing",    "Blockchain",    "Web",    "API,The",    "Test",    "Driven",    "Development",    "Workflow,What",    "Is",    "NaN",    "And",    "How",    "Can",    "We",    "Check",    "For",    "It,What",    "Is",    "The",    "Difference",    "Between",    "StopPropagation",    "And",    "PreventDefault?,Immutable",    "State",    "And",    "Pure",    "Functions,what",    "Is",    "The",    "Difference",    "Between",    "==",    "And",    "===?,what",    "Is",    "The",    "Difference",  [
       "What",
       "Does",
       "The",
       "This",
       "Keyword",
       "Mean?,What",
       "Is",
       "The",
       "Constructor",
       "OO",
       "Pattern?,implementing",
       "Blockchain",
       "Web",
       "API,The",
       "Test",
       "Driven",
       "Development",
       "Workflow,What",
       "Is",
       "NaN",
       "And",
       "How",
       "Can",
       "We",
       "Check",
       "For",
       "It,What",
       "Is",
       "The",
       "Difference",
       "Between",
       "StopPropagation",
       "And",
       "PreventDefault?,Immutable",
       "State",
       "And",
       "Pure",
       "Functions,what",
       "Is",
       "The",
       "Difference",
       "Between",
       "==",
       "And",
       "===?,what",
       "Is",
       "The",
       "Difference",
       "Between",
       "Event",
       "Capturing",
       "And",
       "Bubbling?,what",
       "Is",
       "JSONP?"
    ]
     "Between",    "Event",    "Capturing",    "And",    "Bubbling?,what",    "Is",    "JSONP?"]
    ect....
    
    Uhhh that kind of worked. the letters at the end of an element and the begging of another didn't split but I think I can deal with that in another way. now I just have to join them together and.....
    
    
    
    
    
    
    
    uhhh that's a lot of commas. Maybe if I split the no... 
    
    After this I obsessed with this lab I spent days trying to solve it while slowly falling behind. And as out coding challenge was approaching, and I was falling behind.
    
    We had a Pre-assessment before the coding challenge. In that Pre-assessment we had three deliverables.  I was able to achieve zero. This is when the imposter syndrome came into full effect.  I was convinced I had no chance of succeeding, I was convinced that this was the end of my journey. 
    
    
    Then I hit the books and most importantly. I asked for help. After working with several of my classmates I was able to pass the coding challenge, and I was also able to figure out how to solve the .map lab. 
    
    let result = tutorials.map(cap)
    
    function cap(string){
    let firstletter = string.slice(0,1).toUpperCase();
    let restWord = string.slice(1);
    let y = firstletter + restWord
     return y
    }
    
    function splitToString(array){
    let string = array.join("**")
    console.log(string)
    let array2 = string.split(" ")
    console.log(array2)
    let results = array2.map(cap)
    results =  results.join(" ")
    results = results.split ("**")
    results = results.map(cap)
    return results
    }
    
    
    It was honestly simple. The split command lets you not use commas to separate the arrays. All I had to do was add a character.
    
    ])
    
    
     
    
    blog2= Blog.create(blog_title: "Troubleshooting or: How I Learned To Stop Worrying And Love The Errors", image_url: "https://www.gsma.com/newsroom/wp-content/uploads//cross-border-data-flows-ASEAN-APEC-cover-image-1.jpg", blog_post: "
According to a poll of over 600 developers (https://resources.overops.com/wp-content/uploads/2020/05/Software_Quality_Survey_2020.pdf)
the 70% of develops spend one or more day a week troubleshooting code.
And it's no surprise, and project of scale will develop issues as you have hundreds of minds working on it adding new functionality all the time. 
As projects grow more complex, the need to be able to troubleshoot faulty code effectively rises.   
So here I want to outline my approach to troubleshooting, and how it's helped me.
    
A couple general tips:
When troubleshooting, try the easiest/fastest/cheapest option first
Take breaks: If you're stuck take a break, come back again.
Take a step back, when you get tunnel vison.
patients: Troubleshooting is a process that takes time. You need to be patient, this can be hard when you're frustrated, but, it's the key to solving the problem.
Step 1: Gather information
During this step the key is to gather as much information as possible. ask questions like What does the error message say? When did this start to occur? When does this occur? What parts of my code are running when this issue occurs?
You can also do some quick tests, like grabbing variable values, and using tools such as pry or debugger to determine where exactly the code starts to break.
    
Step 2: Isolate variables
This is in my opinion by far the most useful step. Figuring out what is going wrong and where is the #1 way I know of to determine what the issue is. This is where you want to use most of your tools. console.log/print variables to see what they look like at various stages of the code. pry/debugger to stop the code just before it breaks to see if variables are what you expect them to be. Comment out parts of the code to see how this effects the code.
This step is key to figuring out the root cause of the issue.
Try temporary fixes, like hardcoding variables or instead of returning the result of a function console.log it.
    
    Step 3: Determine why
After Steps 1, and 2, you should have a decent idea of what is happening to cause your error. In this step you need to think of why it's happening. Ask yourself what exactly is happening and why is the result what it is. Once you've determined the root cause the next step is to resolve it.
    
Step 4: Try a solution
This step is where it all comes together. Just try a solution, you don't need to put too much thought into this always, just try something. Every time you fail here you learn something, so more attempts the better. If the first time doesn't work reformulate, and try again. If you're spending to much time here, take break or go back to step one. you won't always get it right away sometimes it takes time!
    
Step 5: Lessons Learned
So you've fixed the issue? Great! What have you learned? How can you avoid the issue again? How can you better troubleshoot?
This step is often overlooked but it's crucial to learn and improve and to be able to spend more time on actually building the app!
    
Final word: Sometimes you can't solve these problems alone, but that's why we have teams, that's why we have Stack overflow. Asking for help can help you see what you're missing.

Hello! Please work 


")
    

    
    com1= Comment.create(comment_name:"Bill gates", comment_title:"Wow amazing post ", blog_id:blog1.id)
    
    
    
    
    
    
    
    
    
    