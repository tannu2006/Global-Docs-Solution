import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import ContentMEA from '@/components/Services/ContentMEA'

export default function Details() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Service Details" />

      <ContentMEA />

      <GetStarted />

      <Footer />
    </>
  )
}
