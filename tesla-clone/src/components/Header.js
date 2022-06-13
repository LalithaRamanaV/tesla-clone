import React from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
min-height:60px;
top:0;
left:0;
right:0;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
justify-content:space-between;
` 
const Menu = styled.div`
 display:flex;
 align-items:center;
 flex:1;
 justify-content:center;
 a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:nowrap;
 }
 @media(max-width:768px){
    display:none;
 }
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`

const Header = () => {
  return (
    <Container>
       <a href="/">
        <img src="images/logo.svg" alt=""/>
       </a>
       <Menu>
        <a href="/">Model S</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
        <a href="/">Model 3</a>
       </Menu>
       <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
       </RightMenu>
       <CustomMenu/>
    </Container>
  )
}

export default Header