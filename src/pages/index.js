import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `purple` }}>

    <Link to="/about">About</Link>
    <Header headerText="Index Header"/>
  </div>
)
