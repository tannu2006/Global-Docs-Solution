import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import SliderUAEembassy from '@/components/BusinessConsulting/sliderUAEembassy' 
import WhatIsUAE from '@/components/TechnologySolutions/WhatIsUAE'
import WhenUAE from '@/components/CryptoStartup/WhenUAE'
import UAEembassyProcess from '@/components/CybersecurityServices/UAEembassyProcess'
import EmbassyDocument from '@/components/CryptoStartup/EmbassyDocument'
import ProcessingTime from '@/components/CryptoStartup/ProcessingTime'
import OurService from '@/components/CybersecurityServices/OurService'
import Footer from '@/components/Layouts/Footer'
import StartUAE from '@/components/Common/startUAE'



export default function BachelorhoodAttestation() {
  return (
    <>
      <Navbar />

      <SliderUAEembassy />

      <WhatIsUAE/>

      <WhenUAE/>

      <UAEembassyProcess />

      <EmbassyDocument />

      <ProcessingTime />

      <OurService/>
     
      <StartUAE/>
 
      <Footer />
    </>
  )
}
