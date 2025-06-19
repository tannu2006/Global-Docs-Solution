import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import SAUDIvisastampingslider from '@/components/BusinessConsulting/SAUDIvisastampingslider'
import Footer from '@/components/Layouts/Footer'
import Saudistampingcard3 from '@/components/CaseStudies/Saudistampingcard3'
import Saudi from '@/components/Common/Saudi'

export default function CaseStudies3() {
  return (
    <>
      <Navbar />

      <SAUDIvisastampingslider/>

      <Saudistampingcard3/>

      <Saudi />

      <Footer />
    </>
  )
}