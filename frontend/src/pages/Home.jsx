import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import Latest from '../components/Latest.jsx'
import Exclusive from '../components/Exclusive.jsx'

function Home() {
    return (
        <>
            <Exclusive />
            <HeroSection />
            <Latest />
        </>
    )
}

export default Home