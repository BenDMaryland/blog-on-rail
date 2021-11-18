import React,{useState,useEffect} from 'react'
import { Route, Routes   } from "react-router-dom";
import Blog from './Blog/Blog'
import Blogs from './Blogs/Blogs'
import axios, { Axios } from 'axios'
import Header from './Header';
import SideBar from './SideBar';
import styled from 'styled-components'




function App() {
  const [fetchedBlogs, setfetchedBlogs] = useState([])
const [sluger, setsluger] = useState()

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

    return (
      <Hope>
        

        <SideBar />
<main>
<br/>
<br/>
<br/>
<Header className="header" style={{"text-align":"center"  }}   /> 
<br/>
<br/>
<br/>
<div className="helper">



<Routes >

            <Route exact path="/"  element={  fetchedBlogs.map((fetchedBlog)=> {return (       <Blogs key={fetchedBlog.id} slugHandler={slugHandler}  fetchedBlog={fetchedBlog}  /> )}  ) }  />
            <Route exact path="/:id"  element={< Blog sluger={sluger}  /> }/>
          
    
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

body{
	
	margin:0;
	font-family:"Open Sans", Helvetica Neue, Helvetica, Arial, sans-serif;
	color:#fff;
  border:solid;
	padding-left:@menu-width-desktop;
}

main{
	
	height:1000vh;
	background-color:rgb(195, 169, 255);
  text-align: center;
	.helper{
    background-color:#ffea92;
		color:@color-1st;
		position:absolute;
		
		 left:20%;
	right:20%;
		padding:1.2em 2em;
		text-align:center;
		border-radius:20px;

		
		span{
			color:rgba(0,0,0,0.2);
			font-size:0.4em;
			display:block;
		}
	}
}

.menu{
	background:@color-2nd;
	height:100vh;
	width:@menu-width-desktop;
	position:fixed;
	top:0;
	left:0;
	z-index:5;
	outline:none;
	
	.avatar{
		background:rgba(0,0,0,0.1);
		padding:2em 0.5em;
		text-align:center;
		
		img{
			width:100px;
			border-radius:50%;
			overflow:hidden;
			border:4px solid @color-1st;
			box-shadow:0 0 0 4px rgba(255,255,255,0.2);
		}
		
		h2{
			font-weight:normal;
			margin-bottom:0;
		}
	}
	
	ul{
		list-style:none;
		padding:0.5em 0;
		margin:0;
		
		li{
			padding:0.5em 1em 0.5em 3em;
			font-size:0.95em;
			font-weight:regular;
			background-repeat:no-repeat;
			background-position:left 15px center;
			background-size:auto 20px;
			transition:all 0.15s linear;
			cursor:pointer;
			
			&.icon-dashboard{
				background-image:url(@icon-url-dashboard);
			}
			&.icon-customers{
				background-image:url(@icon-url-customers);
			}
			&.icon-users{
				background-image:url(@icon-url-users);
			}
			&.icon-settings{
				background-image:url(@icon-url-settings);
			}
			
			&:hover{
				background-color:rgba(0,0,0,0.1);
			}
			
			&:focus{
				outline:none;
			}
			
		}
	}
}

@media screen and (max-width:900px) and (min-width:400px){
	body{
		padding-left:@menu-width-tablet;
	}
	.menu{
		width:@menu-width-tablet;
		
		.avatar{
			padding:0.5em;
			position:relative;
			img{
				width:@menu-width-tablet - 30px;
			}
			
			h2{
				opacity:0;
				position:absolute;
				top:50%;
				left:@menu-width-tablet + 10px;
				margin:0;
				min-width:200px;
				border-radius:4px;
				background:rgba(0,0,0,0.4);
				transform:translate3d(-20px,-50%,0);
				transition:all 0.15s ease-in-out;
			}
			
			&:hover{
				h2{
					opacity:1;
					transform:translate3d(0px,-50%,0);
				}
			}
		}
		
		ul{
			li{
				height:@menu-width-tablet/1.5;
				background-position:center center;
				background-size:30px auto;
				position:relative;

				span{
					//display:none;
					opacity:0;
					position:absolute;
					background:rgba(0,0,0,0.5);
					padding:0.2em 0.5em;
					border-radius:4px;
					top:50%;
					left:@menu-width-tablet - 10px;
					transform:translate3d(-15px,-50%, 0);
					transition:all 0.15s ease-in-out;
					
					&:before{
						content:'';
						width:0;
						height:0;
						position:absolute;
						top:50%;
						left:-5px;
						border-top:5px solid transparent;
						border-bottom:5px solid transparent;
						border-right:5px solid rgba(0,0,0,0.5);
						transform:translateY(-50%);
					}
				}
				
				&:hover{
					span{
						opacity:1;
						transform:translate3d(0px,-50%, 0);
					}
				}
			}
		}
	}
}

@media screen and (max-width:400px){
	body{
		padding-left:0;
	}
	
	.menu{
		width:@menu-width-smartphone;
		box-shadow:0 0 0 100em rgba(0,0,0,0);
		transform:translate3d(-@menu-width-smartphone,0,0);
		transition:all 0.3s ease-in-out;
		
		.smartphone-menu-trigger{
			width:40px;
			height:40px;
			position:absolute;
			left:100%;
			background:@color-2nd;
			
			&:before, &:after{
				content:'';
				width:50%;
				height:2px;
				background:#fff;
				border-radius:10px;
				position:absolute;
				top:45%;
				left:50%;
				transform:translate3d(-50%, -50%, 0);
			}
			
			&:after{
				top:55%;
				transform:translate3d(-50%, -50%, 0);
			}
		}
		
		ul{
			
			li{
				padding:1em 1em 1em 3em;
				font-size:1.2em;
			}
		}
		
		&:focus{
			transform:translate3d(0,0,0);
			box-shadow:0 0 0 100em rgba(0,0,0,0.6);
			
			.smartphone-menu-trigger{
				pointer-events:none;
			}
		}
	}
}

p{
  text-align:left;
  line-height: 32px;
	white-space: pre-wrap;
  
  letter-spacing: -0.003em;
  font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
}

.header{

  text-align: right;

}
 a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}


 a:hover {
  color: #f1f1f1;
}
.sidebar {
  height: 100%;
  width: 260px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 16px;
}
`