import React from "react"
import styled from "styled-components"
import ghs from "../images/UBi-MRmE_400x400.png"

const HeaderSection = styled.div`
  height: 10em;
  background-color: #322E72;
  

  img {
    border-radius: 50%;
    height: -webkit-fill-available;
    padding: 1rem;
  }

`

export default (props) => (
  <HeaderSection>
   <img src={ghs} alt="guelph-humane-society-logo"></img>

  </HeaderSection>

)
