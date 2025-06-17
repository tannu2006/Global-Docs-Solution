import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import SAUDIvisastampingslider from '@/components/BusinessConsulting/SAUDIvisastampingslider'
import CaseStudiesCard3 from '@/components/CaseStudies/CaseStudiesCard3'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import UAEstampingcard3 from '@/components/CaseStudies/UAEstampingcard3'
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