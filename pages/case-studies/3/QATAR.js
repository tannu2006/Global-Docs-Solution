import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import PageTitle from '@/components/Common/PageTitle'
import QATARembassy from '@/components/CaseStudies/QATARembassy'
import Footer from '@/components/Layouts/Footer'
import StartQatar from '@/components/Common/startQatar'

export default function CaseStudies3() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="Qatar Embassy" />

      <QATARembassy />

      <StartQatar/>

      <Footer />
    </>
  )
}