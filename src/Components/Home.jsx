import React from 'react'
import Hero from './Hero'
import About from './About'

import Projects from './Projects'

import Skills from './Skills'
import ContactMe from './ContactMe'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}

export default Home
