import styled from "styled-components"

const Card = styled.div`
  display: flex;
  height: 23rem;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 3rem;
  background-color: white;
  margin: auto;
  width: 55em;
  border: solid #F2F0F2;
  border-radius: 1rem;
  color: grey;
  font-family: 'Lato', sans-serif;
  padding: 1rem;
  box-shadow:  3px 3px 5px 6px #ccc;
  img {
    width: 60%;
    height: auto;
    order: 1;
  }
`

const UpperSection = styled.div`
  display: flex;
  flex-direction: row;
`

const TextSection = styled.div`
  text-align: center;
  padding-right: 2rem;
  line-height: 1.5;
`
const LowerSection = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
`

export { Card, UpperSection, LowerSection, TextSection }