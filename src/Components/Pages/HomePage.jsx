import { useState } from 'react'
import './HomePage.css'
import Navbar from '../Sections/Navbar'
import HeroSection from '../Sections/HeroSection'

const HomePage = (props) => {


  return (
    <div className='home-page'>
        <Navbar />
        <HeroSection />
    </div>
  )
}

export default HomePage