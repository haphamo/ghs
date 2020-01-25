import React from "react"
import styled from "styled-components"

const HeaderSection = styled.div`
  height: 7em;
  background-color: #322E72;

`

export default (props) => (
  <HeaderSection>

    {props.headerText}
  </HeaderSection>

)
