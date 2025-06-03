import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import Birthcontent from '@/components/Services/Birthcontent'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import Birth from '@/components/Common/Birth'

export default function Details() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Birth-Attestation" />
     <Birthcontent />
     

      <Birth />

      <Footer />
    </>
  )
}
