import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import QATARvisastampingslider from '@/components/BusinessConsulting/QATARvisastampingslider'
import Footer from '@/components/Layouts/Footer'
import Qatarstampingcard3 from '@/components/CaseStudies/Qatarstampingcard3'
import Qatar from '@/components/Common/Qatar'

export default function CaseStudies3() {
  return (
    <>
      <Navbar />

      <QATARvisastampingslider />

      <Qatarstampingcard3 />

      <Qatar />

      <Footer />
    </>
  )
}