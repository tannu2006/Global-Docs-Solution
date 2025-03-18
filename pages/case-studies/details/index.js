import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesDetailsContent from '@/components/CaseStudies/CaseStudiesDetailsContent'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'

export default function CaseStudiesDetails() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Case Studies Details" />

      <CaseStudiesDetailsContent />

      <GetStarted />

      <Footer />
    </>
  )
}