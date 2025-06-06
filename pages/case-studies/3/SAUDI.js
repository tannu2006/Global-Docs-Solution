import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import PageTitle from '@/components/Common/PageTitle'
import WSE from '@/components/TechnologySolutions/WSE'
import SaudiReq from '@/components/Common/SaudiReq'
import EmbDocs from '@/components/AboutUs/EmbDocs'
import Edocuments from '@/components/Pricing/Edocuments'
import SaudiEprocess from '@/components/Common/SaudiEprocess'
import Time from '@/components/Common/time'
import Choose from '@/components/BusinessConsulting/choose'
import SAUDIembassy from '@/components/CaseStudies/SAUDIembassy'
import Footer from '@/components/Layouts/Footer'
import StartSaudi from '@/components/Common/startSaudi'

export default function CaseStudies3() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="Saudi Embassy Attestation" />

      <WSE />

      <SaudiReq />

      <Edocuments />

      <SaudiEprocess />
 
    <EmbDocs />

      <Time />

      <Choose />

      <SAUDIembassy />

      <StartSaudi />

      <Footer />
    </>
  )
}