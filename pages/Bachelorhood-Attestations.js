import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import SliderBCA from '@/components/BusinessConsulting/SliderBCA'
import WhatIsBachelorhood from '@/components/TechnologySolutions/WhatIsBachelorhood'
import WhyBachelorhood from '@/components/CryptoStartup/WhyBachelorhood'
import BachelorhoodProcess from '@/components/CybersecurityServices/BachelorhoodProcess'
import BachelorhoodDoc from '@/components/CybersecurityServices/BachelorhoodDoc'
import AttestationDocument from '@/components/CryptoStartup/AttestationDocument'
import ProcessingTime from '@/components/CryptoStartup/ProcessingTime'
import OurService from '@/components/CybersecurityServices/OurService'
import StartBCA from '@/components/Common/startBCA'
import Footer from '@/components/Layouts/Footer'



export default function BachelorhoodAttestation() {
  return (
    <>
      <Navbar />

      <SliderBCA /> 

      <WhatIsBachelorhood />

      <WhyBachelorhood />

      <BachelorhoodProcess />

      <BachelorhoodDoc />

      <AttestationDocument />

      <ProcessingTime />

      <OurService/>
     
      <StartBCA />
 
      <Footer />
    </>
  )
}
