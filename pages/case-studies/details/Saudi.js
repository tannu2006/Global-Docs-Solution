import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesDetailsContent from '@/components/CaseStudies/CaseStudiesDetailsContent'
import GetStarted from '@/components/Common/GetStartwithus'
import Footer from '@/components/Layouts/Footer'
import UAEstampingcontent from '@/components/CaseStudies/UAEstampingcontent'
import Saudistampingcontent from '@/components/CaseStudies/Saudistampingcontent'
import Saudi from '@/components/Common/Saudi'

export default function CaseStudiesDetails() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle=" Saudi Visa Stamping" />

      <Saudistampingcontent />

      <Saudi />

      <Footer />
    </>
  )
}