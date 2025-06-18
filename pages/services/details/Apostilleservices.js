import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import ServiceDetailsContent from '@/components/Services/ServiceDetailsContent'
import GetStarted from '@/components/Common/GetStartwithus'
import Footer from '@/components/Layouts/Footer'
import MEAcontent from '@/components/Services/MEAcontent'
import Apostilleservicescontent from '@/components/Services/Apositillservicescontent'
import Apostilleservices from '@/components/Common/Apostilleservices'
export default function Details() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Apostille-Services" />

      <Apostilleservicescontent />

      <Apostilleservices />

      <Footer />
    </>
  )
}
