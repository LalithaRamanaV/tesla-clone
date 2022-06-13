import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transition:transform 0.2s ;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
 li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);

    a{
        font-weight:600;
    }
 }
`
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
z-index:1;
` 
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
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
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(false);
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
        <CustomMenu onClick={()=> setBurgerStatus(true)}/>
       </RightMenu>
       <BurgerNav show={burgerStatus}>
        <CloseWrapper>
        <CustomClose onClick={()=> setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Used Inventory</a></li>
        <li><a href="/">Trade-in</a></li>
        <li><a href="/">CyberTruck</a></li>
        <li><a href="/">Roadaster</a></li>
        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Existing Inventory</a></li>
       </BurgerNav>
    </Container>
  )
}

export default Header