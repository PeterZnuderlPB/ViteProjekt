import { useState } from 'react'
import './HomePage.css'
import Navbar from '../Sections/Navbar'
import HeroSection from '../Sections/HeroSection'
import HomePageContent from '../Sections/HomePageContent'

const HomePage = (props) => {


  return (
    <div className='home-page'>
        <Navbar />
        <HeroSection />
        <HomePageContent />
    </div>
  )
}

export default HomePage