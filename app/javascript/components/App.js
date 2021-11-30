import React,{useState,useEffect} from 'react'
import { NavLink, Route, Routes   } from "react-router-dom";
import Blog from './Blog/Blog'
import Blogs from './Blogs/Blogs'
import axios, { Axios } from 'axios'
import Header from './Header';
import SideBar from './SideBar';
import styled from 'styled-components'
import RightBar from './RightBar';
import "./app.css";
import NewBlog from './NewBlog';



function App() {
  const [fetchedBlogs, setfetchedBlogs] = useState([])
const [sluger, setsluger] = useState()


console.log(Array(16).join ("wat"-1) +" Batman!")
    useEffect(() => {
  fetch 

    axios.get("api/v1/blogs.json")
    .then(r=>setfetchedBlogs(r.data.data) )
    .catch(r=>console.log(r))
    }, [fetchedBlogs.length])


  function slugHandler(slug){
    setsluger(slug)
 console.log(slug)

  }



    if (fetchedBlogs.length ===0) return <h1>loabding</h1>
console.log(fetchedBlogs[0])
    return (
      <Hope className="hope">
        

        <SideBar />
		<RightBar />
<main>
<br/>
<br/>
<br/>
<Header className="header" style={{"text-align":"center"  }}   /> 
<br/>
<br/>
		<NavLink className='links' to='/'>Home</NavLink>
        <NavLink className='links' to='/feedback'>Feedback</NavLink>
        <NavLink className='links' to= {`/${fetchedBlogs.reverse()[1].attributes.slug}`}    >Newest Blog</NavLink>
		<NavLink className='links' to= {`/newblog`}    >New Blog</NavLink>
<br/>
<div className="container">



<Routes >

            <Route exact path="/"  element={  fetchedBlogs.reverse().map((fetchedBlog)=> {return (       <Blogs key={fetchedBlog.id} slugHandler={slugHandler}  fetchedBlog={fetchedBlog}  /> )}  ) }  />
		    {/* <Route exact path="/newblog" element={   <NewBlog />  }/> */}
		    <Route exact path="/:id"  element={< Blog sluger={sluger}  /> }/>
			<Route exact path="/newblog"  element={< NewBlog sluger={sluger}  /> }/>
    
        </Routes >
        </div >
        </main>
        </Hope>
    )
}

export default App

const Hope= styled.div`
@color-1st: #ffea92;
@color-2nd: #5bc995;

@menu-width-desktop: 240px;
@menu-width-tablet: 90px;
@menu-width-smartphone: 230px;

@icon-url-base: "http://www.entypo.com/images/";
@icon-url-dashboard: "@{icon-url-base}/gauge.svg";
@icon-url-customers: "@{icon-url-base}/briefcase.svg";
@icon-url-users: "@{icon-url-base}/users.svg";
@icon-url-settings: "@{icon-url-base}/tools.svg";

@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap");
$desktop: 1024px;

@mixin breakpoint($point) {
  @if $point == desktop {
    @media (min-width: $desktop) {
      @content;
		}
	}
}

html {
  box-sizing: border-box;
  font-size: 62.5%;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #e6e6e6;
}

.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	margin: 20px 0 80px;
}

.card {
	width: 300px;
	margin: 10px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		.card__caption {
			top: 50%;
			transform: translateY(-50%);
	
		}






		.card__image {
			transform: translateY(-10px);

		}

		.card__thumb {
			display: flex;
	justify-content: center;
	align-items: center;

			&::after {
				top: 0;
				background: linear-gradient(0deg, rgba(0, 0, 0, .5) 40%, rgba(255, 255 ,255 , 0) 100%);
			}
		}

		.card__snippet {
			margin: 20px 0;
		}
	}

	&__thumb {
		position: relative;
		height: 500px;
		width: 100%;
		box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
	
		
		@include breakpoint(desktop) {
			max-height: 500px;
		}

		&::after {
			position: absolute;
			top: 0;
			display: block;
			content: '';
			width: 100%;
			height: 100%;
			
			transition: .3s;
			
			@include breakpoint(desktop) {
				top: calc(100% - 140px);
			}
		}
	}
	
	&__image {
		transition: .5s ease-in-out;
		width: 300px;
		height: 500px;
	}
	
	&__caption {
		position: absolute;
		top: 110%;
		z-index: 1;
		padding: 0 20px;
		color: white;
		transform: translateY(-50%);
		text-align: center;
		transition: .3s;
		width: 250px;

		@include breakpoint(desktop) {
			top: calc(100% - 110px);
			transform: unset;
		}
	}

	&__title {
		display: -webkit-box;
		max-height: 85px;
    overflow: hidden;
		font-family: 'Playfair Display', serif;
		font-size: 23px;
		line-height: 28px;
		text-shadow: 0px 1px 5px black;
		text-overflow: ellipsis;
    -webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	&__snippet {
		display: -webkit-box;
		max-height: 150px;
		margin: 20px 0;
		overflow: hidden;
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		line-height: 20px;
		text-overflow: ellipsis;
		transition: .5s ease-in-out;
    -webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		
		@include breakpoint(desktop) {
			margin: 60px 0;
		}
	}

	&__button {
		display: inline-block;
		padding: 10px 20px;
		color: white;
		border: 1px solid white;
		font-family: 'Roboto', sans-serif;
		font-size: 12px;
		text-transform: uppercase;
		text-decoration: none;
		transition: .3s;

		&:hover {
			
			color: black;
			background-color: white;
		}
	}
}














main{
  text-align: center;
	
}


 a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}



.sidebar {
  height: 100%;
  width: 10%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 16px;
}

.rightbar {
	height: 50%;
	width: 10%;
	position: fixed;
	z-index: 1;
	top: 20;
	border-radius: 25px;
	right: 0;
	color: white;
	text-align: center;
	background-color: rgb(32, 33, 36);
	overflow-x: hidden;
	padding-top: 16px;
  }

.hope{
	top:100;
}



`