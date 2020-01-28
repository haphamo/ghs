import React from "react"

import { HeaderSection } from "./header.css"
import data from "./data"



export default function Header(props) {
  const matchComponentData = data => data.component === props.component
  
  const componentData = data.find(matchComponentData)
  const { src, alt } = componentData

  return (
    <HeaderSection>
      <img src={src} alt={alt}></img>
    </HeaderSection>
  

  )
}
  


