import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import PageTitle from '@/components/Common/PageTitle'
import UAEembassy from '@/components/CaseStudies/UAEembassy'
import Footer from '@/components/Layouts/Footer'
import StartUAE from '@/components/Common/startUAE'
import Edocuments from '@/components/Pricing/Edocuments'

export default function CaseStudies3() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="UAE Embassy" />

      <UAEembassy />

      <Edocuments />

      <StartUAE />

      <Footer />
    </>
  )
}