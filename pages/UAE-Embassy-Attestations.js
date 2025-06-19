import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
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

      <PageTitle homeText="Home" pageTitle="UAE Embassy Attestation" />

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
