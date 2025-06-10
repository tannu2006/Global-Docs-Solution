import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesDetailsContent from '@/components/CaseStudies/CaseStudiesDetailsContent'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import UAEstampingcontent from '@/components/CaseStudies/UAEstampingcontent'
import Kuwaitstampingcontent from '@/components/CaseStudies/Kuwaitstampingcontent'
import Kuwait from '@/components/Common/Kuwait'

export default function CaseStudiesDetails() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle=" Kuwait Visa Stamping" />

      <Kuwaitstampingcontent />

      <Kuwait />

      <Footer />
    </>
  )
}