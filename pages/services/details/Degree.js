import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import Degreecontent from '@/components/Services/Degreecontent'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'

import Degree from '@/components/Common/Degree'
export default function Details() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Degree-Attestation" />
     <Degreecontent />
     

      <Degree />

      <Footer />
    </>
  )
}
