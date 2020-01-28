import React from "react"
import data from "../components/data"

import { Card, UpperSection, LowerSection, TextSection } from "./mainCard.css"


export default function MainCard(props) {

  const matchComponentData = data => data.component === props.component

  const componentData = data.find(matchComponentData)
  
  const { title, src, alt , summary, linkOne, linkTwo } = componentData
  return (
    <Card>
        <UpperSection>
          {/* contains the text and img */}
          <TextSection>
            <h2>{title}</h2>
            {summary}
          </TextSection>
          <img src={src} alt={alt}></img>
        </UpperSection>
      
        <LowerSection>
          {/* contains buttons/links */}
          <a href={linkOne} target="_blank">Read More</a>
          <a href={linkTwo} className="button" target="_blank">Donate Online!</a>
        </LowerSection>
      </Card>
  )
}