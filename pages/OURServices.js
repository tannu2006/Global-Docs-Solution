import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import PricingTable from '@/components/Pricing/PricingTable';
import Faq from '@/components/Common/Faq';
import GetStarted from '@/components/Common/GetStartwithus'
import Footer from '@/components/Layouts/Footer'
import OURServicesListt from '@/components/CybersecurityServices/OURServicesListt'

export default function Services() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle=" OUR Services" />

      <OURServicesListt />

      <GetStarted />




      <div className='bg-f9f9f9 border-bottom'>
        <PricingTable />
      </div>

      <Faq />

      <Footer />
    </>
  )
}
