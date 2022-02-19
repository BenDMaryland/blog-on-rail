import React from 'react'
import styled from 'styled-components'


function Resume({ scrollHander }) {



    return (
        <ResumePage id="resume" onMouseEnter={() => scrollHander("resume")}       >

            <iframe
                style={{
                    width: "800px",
                    height: "80vh",
                    alignContent: 'center',
                    justifyContent: 'center',
                    overflow: "hidden",
                    marginRight: '30%',
                    marginLeft: '30%',
                    minHeight: "900px",
                        border: 'beige'
                }}
                src="https://docs.google.com/document/d/e/2PACX-1vTnrOU2CiSwKdY4T_gh7cb_PGJG9PN_MDygKoLQkqDSsl6vgQknbgi3G5r-bHx5TdX60agO5YSYjzOh/pub?embedded=true"></iframe>
          
        </ResumePage >
    )
}

export default Resume

const ResumePage = styled.div`
* {box-sizing:border-box}

background-color: whitesmoke;
width: 100%;
    min-height: 900px;

overflow: hidden;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   font-family: 'Montserrat', sans-serif;
iframe{
     position: ;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px
}

`