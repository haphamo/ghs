import styled, { css }from "styled-components"

const Text =  styled.div`
  display: flex;
  font-family: Lato, sans-serif;
  width: 19rem;
  flex-direction: column;
  text-align: center;
  line-height: 1.5;
  color: grey; 
  h3 {
    color: dark grey
  }
  img {
    height: 3rem;
  }


`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
  }

  flex: 0 1 30%;
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