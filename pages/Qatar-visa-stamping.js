import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import Footer from '@/components/Layouts/Footer'
import Qatarstampingcard3 from '@/components/CaseStudies/Qatarstampingcard3'
import Qatar from '@/components/Common/Qatar'

export default function CaseStudies3() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle=" Visa Stamping" />

      <Qatarstampingcard3 />

      <Qatar />

      <Footer />
    </>
  )
}