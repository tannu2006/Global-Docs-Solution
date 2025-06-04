import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import Apostillecontent from '@/components/Services/Apostillecontent'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import Apostille from '@/components/Common/apostille'

export default function Details() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Apostille-Attestation" />
     <Apostillecontent />
     

      <Apostille />

      <Footer />
    </>
  )
}
