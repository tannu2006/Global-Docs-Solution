import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import WhoWeAre from '@/components/TechnologySolutions/WhoWeAre'
import Process from '@/components/AboutUs/Process'
import ClientsFeedbackStyle2 from '@/components/Common/ClientsFeedbackStyle2'
import TeamSlider from '@/components/Common/TeamSlider'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import AboutUsWhyChooseUs from '@/components/Services/AboutUSwhyChooseUs'
import AboutUsContent from '@/components/CryptoStartup/AboutUsContent'
import WhyChooseUss from '@/components/CybersecurityServices/WhyChooseUss'



export default function AboutUs() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="About Us" />

      <AboutUsContent/>

      <WhoWeAre />

     <WhyChooseUss/>


      <ClientsFeedbackStyle2 />

      
      <div className="ptt-100">
      <Footer />
      </div>
    </>
  )
}
