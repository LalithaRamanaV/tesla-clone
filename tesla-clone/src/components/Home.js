import React from 'react'
import styled from "styled-components";
import Section from './Section';

const Container = styled.div`
height:100vh;
`
const Home = () => {
  return (
    <Container>
     <Section 
     title="Model S"
     description="Order Online for Touchless Delivery"
     backgroundImg="model-s.jpg"
     leftBtnText="Custom Order"
     rightBtnText="Existing inventory"
     />
     <Section 
     title="Model X"
     description="Order Online for Touchless Delivery"
     backgroundImg="model-x.jpg"
     leftBtnText="Custom Order"
     rightBtnText="Existing inventory"
     />
     <Section 
     title="Model Y"
     description="Order Online for Touchless Delivery"
     backgroundImg="model-y.jpg"
     leftBtnText="Custom Order"
     rightBtnText="Existing inventory"
     />
     <Section 
     title="Model 3"
     description="Order Online for Touchless Delivery"
     backgroundImg="model-3.jpg"
     leftBtnText="Custom Order"
     rightBtnText="Existing inventory"
     />
     <Section
      title="Lowest Cost Solar Panels in India"
      description="Money-back guarentee"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
     />
     <Section
      title=" Solar for New Roofs in  India"
      description="Solar Roof Costs Less than a new roof"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
     />
     <Section
      title="Accessories"
      description="Accessories for your needs"
      backgroundImg="accessories.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
     />
    </Container>
  )
}

export default Home