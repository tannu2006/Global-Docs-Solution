import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import PageTitle from '@/components/Common/PageTitle'
// import WUE from '@/components/TechnologySolutions/WUE'
// import UAEReq from '@/components/Common/UAEReq'
import Edocuments from '@/components/Pricing/Edocuments'
import UaeEprocess from '@/components/Common/UaeEprocess'
import EmbDocs from '@/components/AboutUs/EmbDocs'
import Time from '@/components/Common/time'
import Choose from '@/components/BusinessConsulting/choose'
import UAEembassy from '@/components/CaseStudies/UAEembassy'
import Footer from '@/components/Layouts/Footer'
import StartUAE from '@/components/Common/startUAE'


export default function CaseStudies3() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="UAE Embassy Attestation" />

      {/* <WUE /> */}

      {/* <UAEReq /> */}
      <Edocuments />
      {/* <UaeEprocess /> */}
      {/* <EmbDocs /> */}
      <Time />
      <Choose />


      <UAEembassy />

      
      <StartUAE />

      <Footer />
    </>
  )
}