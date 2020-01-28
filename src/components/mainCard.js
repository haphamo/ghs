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
          <img src={data[0].src} alt="rescued-cat-from-ghs"></img>
        </UpperSection>
      
        <LowerSection>
          {/* contains buttons/links */}
          <a href="https://kitchener.ctvnews.ca/guelph-home-had-97-cats-inside-not-80-humane-society-1.4782280" target="_blank">Read More</a>
          <a href="https://guelphhumane.ca/donate-online/" className="button" target="_blank">Donate!</a>
        </LowerSection>
      </Card>
  )
}