import React, { Fragment } from "react"
import styled from "styled-components"
import donationIcon from "../../src/images/monetary-donations.svg"
import giftCards from "../../src/images/gift-cards.svg"
import amazon from "../../src/images/amazon-logo.svg"
import adopt from "../../src/images/adopt.svg"
import { Text, Icon, Img, Container } from "./waysToHelp.css"


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
        <br></br>
        $25 covers one day of care for one kitty
        <br></br>
        $80 covers a wellnes exam, every cat needs one
        <br></br>
        $150 covers basic medical care (vaccinations, parasite control, spay/neuter)
       
        <button>Donate online!</button>
      </Text>

    </Container>


    <Container>
      <Icon>
        <Img src={giftCards} alt="adopt"></Img>
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

    <Container>
      <Icon>
        <Img src={adopt} alt="adopt"></Img>
      </Icon>
      <Text>
        <h3>Adopt!</h3>
        Consider adopting or even fostering! Some of their animals are on their website but for more information head on over to 500 Wellington Street West.
       
        <button>Take a look at our animals up for adoption</button>
      </Text>

    </Container>
    </Fragment>
    
  )
}