import React from 'react'
import Hero from './components/hero'
import Benefits from './components/benefits'
import EngagementModels from './components/engagement'
import Recruitement from './components/recruitement'
import Navbar from '../componets/Navbar'

const page = () => {
  return (
    <>
<Navbar/>    
<Hero/>
<Benefits/>
<EngagementModels/>
<Recruitement/>

    </>
  )
}

export default page