import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import KUWAITvisastampingslider from '@/components/BusinessConsulting/KUWAITvisastampingslider'
import Footer from '@/components/Layouts/Footer'
import Kuwaitstampingcard3 from '@/components/CaseStudies/Kuwaitstampingcard3'
import Kuwait from '@/components/Common/Kuwait'

export default function CaseStudies3() {
  return (
    <>
      <Navbar />

     <KUWAITvisastampingslider/>

      <Kuwaitstampingcard3 />

      <Kuwait />

      <Footer />
    </>
  )
}