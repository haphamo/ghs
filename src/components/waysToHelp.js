import React, { Fragment } from "react"
import uuid from "uuid"
import donationIcon from "../images/monetary-donations.svg"
import giftCards from "../images/gift-cards.svg"
import amazon from "../images/amazon-logo.svg"
import adopt from "../images/adopt.svg"

import data from "./data"
import { Text, Icon, Img, Container } from "./waysToHelp.css"


export default function Ways(props) {
  const matchComponentName = data => data.component === props.component

  const componentData = data.find(matchComponentName)
  const arrayData = componentData.containers

  const waysToHelp = arrayData.map(way => {
    const { title, src, alt, desc, buttonText, buttonLink } = way
    return (
      <Container key={uuid()}>
        <a href={buttonLink} target="_blank"><Icon><Img src={src} alt={alt}></Img></Icon></a>
        <Text>
          <h3>{title}</h3>
          {desc}
          {buttonLink && <a href={buttonLink} target="_blank"><button>{buttonText}</button></a>}
        </Text>
      </Container>
    )
  })

  return (
    <Fragment>
      {waysToHelp}
    </Fragment>
    
  )
}