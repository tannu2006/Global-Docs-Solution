import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import ServiceDetailsContent from '@/components/Services/ServiceDetailsContent'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import MEAcontent from '@/components/Services/MEAcontent'
import MEA from '@/components/Common/MEA'
export default function Details() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="MEA-Attestation" />

      <MEAcontent />

      <MEA />

      <Footer />
    </>
  )
}
