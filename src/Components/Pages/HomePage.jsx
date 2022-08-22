import { useState, useEffect } from 'react'
import './HomePage.css'
import HeroSection from '../Sections/HeroSection'
import HomePageContent from '../Sections/HomePageContent'


const HomePage = (props) => {
  return (
    <div className='home-page'>
        <HeroSection />
        <HomePageContent />
    </div>
  )
}

export default HomePage