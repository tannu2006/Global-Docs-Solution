import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import PageTitle from '@/components/Common/PageTitle'
import WKE from '@/components/TechnologySolutions/WKE'
import KuwaitReq from '@/components/Common/KuwaitReq'
import Edocuments from '@/components/Pricing/Edocuments'
import KuwaitEprocess from '@/components/Common/KuwaitEprocess'
import EmbDocs from '@/components/AboutUs/EmbDocs'
import Time from '@/components/Common/time'
import Choose from '@/components/BusinessConsulting/choose'
import KUWAITembassy from '@/components/CaseStudies/KUWAITembassy'
import Footer from '@/components/Layouts/Footer'
import StartKuwait from '@/components/Common/startKuwait'

export default function CaseStudies3() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="Kuwait Embassy Attestation" />

      <WKE />

      <KuwaitReq />

      <Edocuments />

      <KuwaitEprocess />

      <EmbDocs />

      <Time />

      <Choose />

      <KUWAITembassy />

      <StartKuwait/>

      <Footer />
    </>
  )
}