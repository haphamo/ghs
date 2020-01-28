import React from "react"
import data from "./data"

import { Card, UpperSection, LowerSection, TextSection } from "./mainCard.css"


export default function MainCard(props) {

  const matchComponentData = data => data.component === props.component

  const componentData = data.find(matchComponentData)
  
  const { title, src, alt , summary, linkOne, linkOneText, linkTwo, linkTwoText } = componentData
  return (
    <Card>
        <UpperSection>
          <TextSection>
            <h2>{title}</h2>
            {summary}
          </TextSection>
          <img src={src} alt={alt}></img>
        </UpperSection>
        <LowerSection>
          <a href={linkOne} target="_blank">{linkOneText}</a>
          <a href={linkTwo} className="button" target="_blank">{linkTwoText}</a>
        </LowerSection>
      </Card>
  )
}