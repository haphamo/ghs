import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import styled from "styled-components"
import cat from "../images/ghs-cat.jpg"
import data from "../components/data"
console.log('test', data[0].intro)

const Card = styled.div`
  background-color: white;
  width: 50wv;
  border: solid #774C60;
  border-radius: 1rem;
  color: grey;
  font-family: 'Open Sans', sans-serif;
  padding: 1rem;
  img {
    width: 70%;
    height: auto;
  }
`

export default function Index() {
  return (
  <div>

    <Header headerText="Index Header"/>
    <Card>
    <h3>Test</h3>
    {data[0].intro}
    </Card>
  </div>

  )
 
}
