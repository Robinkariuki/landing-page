import React from 'react'
import Navbar from '../componets/Navbar'
import TalentHero from '../componets/Talent-hero'
import Services from './components/service'
import EngagementProcess from './components/engagement'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import { Footer } from '../componets/Footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <TalentHero/>
    <Services/>
    <EngagementProcess/>
    <Testimonials/>
    <Contact/>
    <Footer/>


    </>
  )
}

export default page