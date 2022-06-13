import React from 'react'
import styled from "styled-components"

const Container = styled.div`
min-height:60px;
top:0;
left:0;
right:0;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
` 
const Menu = styled.div`
 display:flex;
 align-items:center;
 flex:1;
 justify-content:center;
 p{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:nowrap;
 }
`

const Header = () => {
  return (
    <Container>
       <a href="/">
        <img src="images/logo.svg" alt=""/>
       </a>
       <Menu>
        <p><a href="/">Model S</a></p>
        <p><a href="/">Model X</a></p>
        <p><a href="/">Model Y</a></p>
        <p><a href="/">Model 3</a></p>
       </Menu>
    </Container>
  )
}

export default Header