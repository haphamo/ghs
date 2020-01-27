import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import styled from "styled-components"
import cat from "../images/ghs-cat.jpg"
import data from "../components/data"
console.log('test', data[0].intro)

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  background-color: white;
  margin: auto;
  width: 55em;
  border: solid #F2F0F2;
  border-radius: 1rem;
  color: grey;
  font-family: 'Open Sans', sans-serif;
  padding: 1rem;
  box-shadow:  3px 3px 5px 6px #ccc;
  img {
    width: 60%;
    height: auto;
  }
`

const upperCard = {
  display: 'flex',
  flexDirection: 'row'
}

const textCard = {
  textAlign: 'center',
  paddingRight: '2rem'
}

export default function Index() {
  return (
  <div>

    <Header headerText="Index Header"/>
    <br></br>
    <br></br>
    <Card>
      
      <div className="upper" style={upperCard}>
        {/* contains the text and img */}
        <div className="text" style={textCard}>
          <h2>{data[0].title}</h2>
          {data[0].intro}
        </div>
        <img src={cat} alt="rescued-cat-from-ghs"></img>
      </div>

      <div className="lower">
        {/* contains buttons/links */}
        <button>Read more</button>
        <button>Donate!</button>
      </div>
    </Card>
  </div>

  )
 
}
