import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/night.jpg"
import Footer from '../components/Footer'
import Trip from '../components/Trip'

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
      />
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Service
