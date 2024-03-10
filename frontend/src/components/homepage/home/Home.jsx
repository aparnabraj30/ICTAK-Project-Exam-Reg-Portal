import React from "react"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutCard />
      <HAbout />
      <Footer/>
    </>
  )
}

export default Home
