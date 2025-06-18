import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesDetailsContent from '@/components/CaseStudies/CaseStudiesDetailsContent'
import GetStarted from '@/components/Common/GetStartwithus'
import Footer from '@/components/Layouts/Footer'
import UAEstampingcontent from '@/components/CaseStudies/UAEstampingcontent'
import Qatarstampingcontent from '@/components/CaseStudies/Qatarstampingcontent'
import Qatar from '@/components/Common/Qatar'

export default function CaseStudiesDetails() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle=" Qatar Visa Stamping" />

      <Qatarstampingcontent />

      <Qatar />

      <Footer />
    </>
  )
}