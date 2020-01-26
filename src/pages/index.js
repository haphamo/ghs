import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import styled from "styled-components"
import cat from "../images/ghs-cat.jpg"

const Card = styled.div`
  background-color: #774C60;
  
  border: solid #774C60;
  border-radius: 1rem;
  h3 {
    color: white;
  }
  img {
    width: 70%;
    height: auto;
  }
  
`
export default () => (
  <div>

    <Header headerText="Index Header"/>
    <Card>
      <h3>The Guelph Humane Society needs the community's support after taking in over 80 cats from an apartment on Huron Street in mid-January</h3>
      <img src={cat} alt="cat-rescue"></img>
    
      
    </Card>
  </div>
 
)
