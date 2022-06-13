import React from 'react'
import styled from "styled-components"
import { Fade } from "react-awesome-reveal";

const Wrap = styled.div`
z-index:10;
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
// this is for vertical 
justify-content:space-between;
//this is for horizontal
align-items:center;
background-image:${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
z-index:10;
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
    flex-direction:column;
}
`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`
const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
font-weight:900;
`
const DownArrow = styled.div`
// margin-top:20px;
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`
const Buttons = styled.div`

`
const Section = ({title,description,leftBtnText,rightBtnText,backgroundImg}) => {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        <Buttons>
            <Fade>
            <ButtonGroup>
            <LeftButton>
               {leftBtnText}
            </LeftButton>
            { rightBtnText && 
              <RightButton>
               {rightBtnText}
              </RightButton>
            }
        </ButtonGroup>
            </Fade>
        <DownArrow src="/images/down-arrow.svg">
        </DownArrow>
        </Buttons>
    </Wrap>
  )
}

export default Section