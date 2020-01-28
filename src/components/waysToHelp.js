import React, { Fragment } from "react"
import styled from "styled-components"
import donationIcon from "../../src/images/monetary-donations.svg"

const Text =  styled.div`
  flex: 1 1 25%;
  font-family: Lato, sans-serif;
  width: 18rem;
  margin: auto;
  text-align: center;
  line-height: 1.5;
  color: grey; 
  h3 {
    color: dark grey
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem;
  flex-flow: wrap;
`



const Img = styled.img`
  height: 6rem
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0 1rem 0;
  flex: 1 1 25%;
`

export default function Ways() {
  return (
    <Fragment>
    <Container>
      <Icon>
        <Img src={donationIcon} alt="monetary-donations"></Img>
      </Icon>
      <Text>
        <h3>Cash Donations</h3>
        Our number one need in order to continue the high-level of care every animal that comes into our shelter receives. For donations over $20 you will receive a donation receipt! You can donate online or by visiting 500 Wellington Street West.
      </Text>
      <Icon>
        <Img src={donationIcon} alt="monetary-donations"></Img>
      </Icon>
      <Text>
        <h3>Cash Donations</h3>
        Our number one need in order to continue the high-level of care every animal that comes into our shelter receives. For donations over $20 you will receive a donation receipt! You can donate online or by visiting 500 Wellington Street West.
      </Text>

      <Icon>
        <Img src={donationIcon} alt="monetary-donations"></Img>
      </Icon>
      <Text>
        <h3>Cash Donations</h3>
        Our number one need in order to continue the high-level of care every animal that comes into our shelter receives. For donations over $20 you will receive a donation receipt! You can donate online or by visiting 500 Wellington Street West.
      </Text>
      <Icon>
        <Img src={donationIcon} alt="monetary-donations"></Img>
      </Icon>
      <Text>
        <h3>Cash Donations</h3>
        Our number one need in order to continue the high-level of care every animal that comes into our shelter receives. For donations over $20 you will receive a donation receipt! You can donate online or by visiting 500 Wellington Street West.
      </Text>

    </Container>

    </Fragment>
    
  )
}