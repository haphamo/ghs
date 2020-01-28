import React from "react"
import data from "../components/data"

import { Card, UpperSection, LowerSection, TextSection } from "./mainCard.css"


export default function MainCard() {
  return (
    <Card>
        <UpperSection>
          {/* contains the text and img */}
          <TextSection>
            <h2>{data[0].title}</h2>
            {data[0].summary}
          </TextSection>
          <img src={data[0].src} alt={data[0].alt}></img>
        </UpperSection>
      
        <LowerSection>
          {/* contains buttons/links */}
          <a href={data[0].linkOne} target="_blank">Read More</a>
          <a href={data[0].linkTwo} className="button" target="_blank">Donate Online!</a>
        </LowerSection>
      </Card>
  )
}