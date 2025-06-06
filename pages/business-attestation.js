import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import AboutUs from '@/components/BusinessConsulting/AboutUs'
import FunFacts from '@/components/Common/FunFacts'
import FreeSEOQuotesForm from '@/components/Common/FreeSEOQuotesForm'
import ClientsFeedback from '@/components/Common/ClientsFeedback'
import OurCaseStudies from '@/components/Common/OurCaseStudies'
import OurTeamMember from '@/components/Common/OurTeamMember'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import NewsletterForm from '@/components/Common/NewsletterForm'
import Footer from '@/components/Layouts/Footer'
import BusinessServices from '@/components/BusinessConsulting/BusinessServices'
import SliderBDA from '@/components/BusinessConsulting/sliderBDA'
import StartBDA from '@/components/Common/startBDA'

export default function BusinessAttestation() {
  return (
    <>
      <NavbarStyle2 />

      <SliderBDA /> 
     
      <BusinessServices />

      <AboutUs />

      <FunFacts />

      <FreeSEOQuotesForm />

      <ClientsFeedback />

      <OurCaseStudies />

      <OurTeamMember />

      <OurLatestBlog />

      <NewsletterForm />
      <StartBDA />
 
      <Footer />
    </>
  )
}
