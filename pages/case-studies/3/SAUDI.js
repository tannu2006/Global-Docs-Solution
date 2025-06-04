import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import PageTitle from '@/components/Common/PageTitle'
import SAUDIembassy from '@/components/CaseStudies/SAUDIembassy'
import Footer from '@/components/Layouts/Footer'
import StartSaudi from '@/components/Common/startSaudi'

export default function CaseStudies3() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="Saudi Embassy" />

      <SAUDIembassy />

      <StartSaudi />

      <Footer />
    </>
  )
}