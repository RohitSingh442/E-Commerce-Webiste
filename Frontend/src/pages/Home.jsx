import React from "react"
import Hero from "../component/Hero"
import LatestCollection from "../component/LatestCollection"
import Bestseller from "../component/Bestseller"
import Ourpolicy from "../component/Ourpolicy"
import Newsletterbox from "../component/Newsletterbox"

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Bestseller/>
      <Ourpolicy/>
      <Newsletterbox/>
      
    </div>
  )
}

export default Home