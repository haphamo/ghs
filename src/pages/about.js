import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText='About Header'/>
    <Link to="/">Home</Link>
    <p>Such wow. Very React.</p>
  </div>
)