import React, { Fragment } from "react"
import styled from "styled-components"
import donationIcon from "../../src/images/monetary-donations.svg"
import giftCards from "../../src/images/gift-cards.svg"
import amazon from "../../src/images/amazon-logo.svg"

const Text =  styled.div`
  
  font-family: Lato, sans-serif;
  width: 27rem;
  
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
  justify-content: space-evenly;
  
`

const Img = styled.img`
  height: 6rem

`

const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

 
`

export default function Ways() {
  return (
    <Fragment>
    <Container>
      <a href="https://guelphhumane.ca/donate-online/" target="_blank"><Icon>
        <Img src={donationIcon} alt="monetary-donations"></Img>
      </Icon></a>
      <Text>
        <h3>Cash Donations</h3>
        Our number one need in order to continue the high-level of care every animal that comes into our shelter receives. For donations over $20 you will receive a donation receipt! You can donate online or by visiting 500 Wellington Street West.
        <button>Donate online!</button>
      </Text>

    </Container>


    <Container>
      <Icon>
        <Img src={giftCards} alt="gift-cards"></Img>
      </Icon>
      <Text>
        <h3>Gift Cards</h3>
        Allow us to address our urgent needs right away. We always need gift cards, new or partially used:
        <br></br>
        Local pet stores, Grocery stores, Staples, Walmart, Dollar stores, Canadian Tire, Home Depot, Amazon
      </Text>

    </Container>

    <Container>
      <Icon>
        <Img src={amazon} alt="amazon"></Img>
      </Icon>
      <Text>
        <h3>Amazon Wishlist</h3>
        This wishlist has all the items that the shelter could benefit from. Don't forget that items more than $20 (before taxes & shipping) can be eligible for an donation tax receipt! For more information please email adoptions@guelphhumane.ca.
        <button>Amazon Wishlist!</button>
      </Text>

    </Container>
    </Fragment>
    
  )
}