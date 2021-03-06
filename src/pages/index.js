import React from "react"
import Header from "../components/header"

import MainCard from "../components/mainCard"
import WaysToHelp from "../components/waysToHelp"
import MoreWays from "../components/moreWays"

export default function Index() {
  return (
  <div>

    <Header component="header"/>
    <MainCard component="main-card"/>
    <WaysToHelp component="ways-to-help" />
  </div>  

  )
 
}
