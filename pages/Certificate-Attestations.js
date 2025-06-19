import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import SliderCA from '@/components/BusinessConsulting/sliderCA'
import WhatIsCertificate from '@/components/TechnologySolutions/WhatIsCertificate'
import WhyCertificate from '@/components/CryptoStartup/WhyCertificate'
import CertificateProcess from '@/components/CybersecurityServices/CertificateProcess'
import CertificateDoc from '@/components/CybersecurityServices/CertificateDoc'
import Document from '@/components/CryptoStartup/Document'
import ProcessingTime from '@/components/CryptoStartup/ProcessingTime'
import OurService from '@/components/CybersecurityServices/OurService'
import StartCA from '@/components/Common/startCA'
import Footer from '@/components/Layouts/Footer'



export default function BachelorhoodAttestation() {
  return (
    <>
      <Navbar />

      <SliderCA /> 

      <WhatIsCertificate/>

      <WhyCertificate/>

      <CertificateProcess />

      <CertificateDoc />

      <Document />

      <ProcessingTime />

      <OurService/>
     
      <StartCA />
 
      <Footer />
    </>
  )
}
