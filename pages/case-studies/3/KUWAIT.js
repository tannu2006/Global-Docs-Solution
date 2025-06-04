import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import PageTitle from '@/components/Common/PageTitle'
import KUWAITembassy from '@/components/CaseStudies/KUWAITembassy'
import Footer from '@/components/Layouts/Footer'
import StartKuwait from '@/components/Common/startKuwait'

export default function CaseStudies3() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="Kuwait Embassy" />

      <KUWAITembassy />

      <StartKuwait/>

      <Footer />
    </>
  )
}