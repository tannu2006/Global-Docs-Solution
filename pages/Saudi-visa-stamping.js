import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesCard3 from '@/components/CaseStudies/CaseStudiesCard3'
import GetStarted from '@/components/Common/GetStartwithus'
import Footer from '@/components/Layouts/Footer'
import UAEstampingcard3 from '@/components/CaseStudies/UAEstampingcard3'
import Saudistampingcard3 from '@/components/CaseStudies/Saudistampingcard3'
import Saudi from '@/components/Common/Saudi'

export default function CaseStudies3() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle=" Visa Stamping" />

      <Saudistampingcard3/>

      <Saudi />

      <Footer />
    </>
  )
}