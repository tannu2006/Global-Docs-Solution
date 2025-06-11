import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import PageTitle from '@/components/Common/PageTitle'
import WQE from '@/components/TechnologySolutions/WQE'
import QatarReq from '@/components/Common/QatarReq'
import Edocuments from '@/components/Pricing/Edocuments'
import EmbDocs from '@/components/AboutUs/EmbDocs'
import Time from '@/components/Common/time'
import Choose from '@/components/BusinessConsulting/choose'
import QatarEprocess from '@/components/Common/QatarEprocess'
import QATARembassy from '@/components/CaseStudies/QATARembassy'
import Footer from '@/components/Layouts/Footer'
import StartQatar from '@/components/Common/startQatar'

export default function CaseStudies3() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="Qatar Embassy Attestation" />
      <WQE />
      <QatarReq />
      <Edocuments />
      <QatarEprocess />
      <EmbDocs />

      <Time />

      <Choose />

      <QATARembassy />  

      <StartQatar/>

      <Footer />
    </>
  )
}