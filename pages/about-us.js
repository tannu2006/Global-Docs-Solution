import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import ClientsFeedbackStyle2 from '@/components/Common/ClientsFeedbackStyle2'
import Footer from '@/components/Layouts/Footer'
import AboutUsContent from '@/components/CryptoStartup/AboutUsContent'
import WhychooseUs from '@/components/TechnologySolutions/WhychooseUs'
import WhoWeAre from '@/components/TechnologySolutions/WhoWeAre'




export default function AboutUs() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="About Us" />

      <AboutUsContent/>

      <WhoWeAre/>

      <WhychooseUs/>

      <ClientsFeedbackStyle2 />

      
      <div className="ptt-100">
      <Footer />
      </div>
    </>
  )
}
