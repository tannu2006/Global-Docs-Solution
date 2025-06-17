import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import AttestationListt from '@/components/CybersecurityServices/AttestationListt'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'

export default function Details() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Attestation" />

      <AttestationListt/>
      <GetStarted />

      <Footer />
    </>
  )
}
