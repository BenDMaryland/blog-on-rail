import React from 'react'
import styled from 'styled-components'


function Resume({ scrollHander }) {



    return (
        <ResumePage id="resume" onMouseEnter={() => scrollHander("resume")}       >

            <iframe
                style={{
                    width: "720px",
                    height: "80vh",
                    overflow: "hidden",
                    left:" 50 %",
                    transform: "translate(0,-50 %)",
                    minHeight: "900px",
                    border: 'beige', 
                    justifySelf: "center"
                }}
                src="https://docs.google.com/document/d/e/2PACX-1vTnrOU2CiSwKdY4T_gh7cb_PGJG9PN_MDygKoLQkqDSsl6vgQknbgi3G5r-bHx5TdX60agO5YSYjzOh/pub?embedded=true"></iframe>
          
        </ResumePage >
    )
}

export default Resume

const ResumePage = styled.div`
* {box-sizing:border-box}

background-color: whitesmoke;
  display: grid;
  grid-template-rows: 80vh;
  grid-template-columns: 100vw;
overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   font-family: 'Montserrat', sans-serif;
/* iframe{

justify-self: center;


} */

`