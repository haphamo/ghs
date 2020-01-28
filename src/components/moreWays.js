import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 23rem;
  border: solid #F2F0F2;
  border-radius: 1rem;
  background-color: white;
  box-shadow:  3px 3px 5px 6px #ccc;
  margin: 1rem 3rem 1rem 3rem;
`

export default function MoreWays() {
  return (
  <Container>
    But there's more! 
    There are also animal care needs
  </Container>
    
  )
}