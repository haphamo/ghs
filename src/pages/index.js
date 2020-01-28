import React from "react"
import Header from "../components/header"

import MainCard from "../components/mainCard"
import WaysToHelp from "../components/waysToHelp"
import MoreWays from "../components/moreWays"

export default function Index() {
  return (
  <div>

    <Header headerText="Index Header"/>
   
    <MainCard component="main-card"/>
    <WaysToHelp component="ways-to-help"/>
    <MoreWays />
    
  </div>

  )
 
}
