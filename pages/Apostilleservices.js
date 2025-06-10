import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import ServicesItem from '../components/Services/ServicesItem'
import OurCaseStudies from '@/components/Common/OurCaseStudies';
import WorkProcess from '@/components/Common/WorkProcess'
import PartnerSlider from '@/components/Common/PartnerSlider';
import PricingTable from '@/components/Pricing/PricingTable';
import Faq from '@/components/Common/Faq';
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import Apostilleservicesitem from '@/components/Services/Apostilleservicesitem';

export default function Services() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Apostille services" />

      <Apostilleservicesitem />

      <GetStarted />

      <OurCaseStudies />

      <WorkProcess />

      <PartnerSlider />

      <div className='bg-f9f9f9 border-bottom'>
        <PricingTable />
      </div>

      <Faq />

      <Footer />
    </>
  )
}
