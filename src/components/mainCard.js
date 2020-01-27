import React from "react"
import styled from "styled-components"
import data from "../components/data"
import ghscat from "../images/ghs-cat.jpg"

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
  font-family: 'Lato', sans-serif;
  padding: 1rem;
  box-shadow:  3px 3px 5px 6px #ccc;
  img {
    width: 60%;
    height: auto;
    order: 1;
  }
`

const UpperSection = styled.div`
  display: flex;
  flex-direction: row;
`

const TextSection = styled.div`
  text-align: center;
  padding-right: 2rem;
  line-height: 1.5;
`
const LowerSection = styled.div`

`

export default function MainCard() {
  return (
    <Card>
        <UpperSection>
          {/* contains the text and img */}
          <TextSection>
            <h2>{data[0].title}</h2>
            {data[0].summary}
          </TextSection>
          <img src={ghscat} alt="rescued-cat-from-ghs"></img>
        </UpperSection>
      
        <LowerSection>
          {/* contains buttons/links */}
          <a href="https://kitchener.ctvnews.ca/guelph-home-had-97-cats-inside-not-80-humane-society-1.4782280" target="_blank">Read More</a>
          <a href="https://guelphhumane.ca/donate-online/" className="button" target="_blank">Donate!</a>
        </LowerSection>
      </Card>
  )
}