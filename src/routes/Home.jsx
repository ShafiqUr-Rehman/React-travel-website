import React from 'react'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import heroImg from "../assets/12.jpg"
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={heroImg}
                title="Your Journey Your Story"
                text="Choose Your Favourite  Destination"
                buttonText="Travel PLan"
                url="/"
                btnClass="show" />
            <Destination />
            <Trip />
            <Footer/>
        </div>
    )
}

export default Home
