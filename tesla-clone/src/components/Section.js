import React from 'react'
import styled from "styled-components"

const Wrap = styled.div`
width:100vw;
height:100vh;
background-image:url('/images/model-s.jpg');
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
// this is for vertical 
justify-content:space-between;
//this is for horizontal
align-items:center;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
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

`
const DownArrow = styled.div`
// margin-top:20px;
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`
const Buttons = styled.div`

`
const Section = () => {
  return (
    <Wrap>
        <ItemText>
            <h1>Model S</h1>
            <p>Order online for Touchless delivery</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
               Custom Order
            </LeftButton>
            <RightButton>
               Existing Inventory
            </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg">

        </DownArrow>
        </Buttons>
    </Wrap>
  )
}

export default Section