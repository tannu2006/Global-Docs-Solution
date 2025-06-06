import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import Apostille from '@/components/CaseStudies/Apostille'

export default function CaseStudies2() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="ApostileServices" />

      <Apostille/>

      <GetStarted />

      <Footer />
    </>
  )
}