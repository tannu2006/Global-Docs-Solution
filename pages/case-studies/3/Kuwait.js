import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import KUWAIT from '@/components/CaseStudies/CaseStudiesCard3'

import Footer from '@/components/Layouts/Footer'
import Kuwaitstampingcard3 from '@/components/CaseStudies/Kuwaitstampingcard3'
import KUWAIT from '@/components/Common/Kuwait'

export default function CaseStudies3() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Visa Stamping" />

      <Kuwaitstampingcard3 />

      <KUWAIT />

      <Footer />
    </>
  )
}