
import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesCard3 from '@/components/CaseStudies/CaseStudiesCard3'
import GetStarted from '@/components/Common/GetStartwithus'
import Footer from '@/components/Layouts/Footer'
import UAEstampingcard3 from '@/components/CaseStudies/UAEstampingcard3'
import UAE from '@/components/Common/UAE'

export default function CaseStudies3() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle=" Visa Stamping" />

      <UAEstampingcard3 />

      <UAE />

      <Footer />
    </>
  )
}