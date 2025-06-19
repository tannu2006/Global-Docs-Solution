import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import SliderBDA from '@/components/BusinessConsulting/sliderBDA'
import WhatIsBusiness from '@/components/TechnologySolutions/WhatIsBusiness'
import WhyBusiness from '@/components/CryptoStartup/WhyBusiness'
import BusinessProcess from '@/components/CybersecurityServices/BusinessProcess'
import BusinessDoc from '@/components/CybersecurityServices/BusinessDoc'
import Document from '@/components/CryptoStartup/Document'
import ProcessingTime from '@/components/CryptoStartup/ProcessingTime'
import OurService from '@/components/CybersecurityServices/OurService'
import StartBDA from '@/components/Common/startBDA'
import Footer from '@/components/Layouts/Footer'



export default function BachelorhoodAttestation() {
  return (
    <>
      <Navbar />

      <SliderBDA /> 

      <WhatIsBusiness/>

      <WhyBusiness/>

      <BusinessProcess />

      <BusinessDoc />

      <Document />

      <ProcessingTime />

      <OurService/>
     
      <StartBDA />
 
      <Footer />
    </>
  )
}
