import React, { Fragment } from "react"
import uuid from "uuid"

import data from "./data"
import { Text, Icon, Img, Container } from "./waysToHelp.css"

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
}
export default function Ways(props) {
  console.log('prop', props)
  const matchComponentName = data => data.component === props.component

  const componentData = data.find(matchComponentName)
  const arrayData = componentData.containers

  const waysToHelp = arrayData.map(way => {
    const { title, src, alt, desc, buttonText, buttonLink, icon, iconAlt, email } = way
    return (
    
      <Container key={uuid()} alt={alt}>
        <a href={buttonLink} target="_blank"><Icon><Img src={src} alt={alt}></Img></Icon></a>
        <Text>
          <h3>{title}</h3>
          {desc}
          {buttonLink && <a href={buttonLink} target="_blank"><button>{buttonText}</button></a>}
          {icon && <a href={email}><img src={icon} alt={iconAlt}></img></a>}
        </Text>
      </Container>

    
    )
  })

  return (
    <div style={style}>
      {waysToHelp}
    </div>
    
  )
}