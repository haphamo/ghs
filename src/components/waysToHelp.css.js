import styled from "styled-components"

const Text =  styled.div`
  display: flex;
  font-family: Lato, sans-serif;
  width: 27rem;
  flex-direction: column;
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
  a {
    display: flex;
    justify-content: center;
  }
  
`

const Img = styled.img`
  height: 6rem

`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Text, Icon, Img, Container }