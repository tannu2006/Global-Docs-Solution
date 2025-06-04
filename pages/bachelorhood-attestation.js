import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import AboutUs from '@/components/BusinessConsulting/AboutUs'
import FunFacts from '@/components/Common/FunFacts'
import FreeSEOQuotesForm from '@/components/Common/FreeSEOQuotesForm'
import ClientsFeedback from '@/components/Common/ClientsFeedback'
import WBCA from '@/components/Common/WBCA'
import OurCaseStudies from '@/components/Common/OurCaseStudies'
import OurTeamMember from '@/components/Common/OurTeamMember'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import NewsletterForm from '@/components/Common/NewsletterForm'
import Footer from '@/components/Layouts/Footer'
import BachelorhoodServices from '@/components/BusinessConsulting/BachelorhoodServices'
import SliderBCA from '@/components/BusinessConsulting/sliderBCA'
import StartBCA from '@/components/Common/startBCA'

export default function BachelorhoodAttestation() {
  return (
    <>
      <NavbarStyle2 />

      <SliderBCA /> 

      <WBCA />
     
      <BachelorhoodServices />

      <AboutUs />

      <FunFacts />

      <FreeSEOQuotesForm />

      <ClientsFeedback />

      <OurCaseStudies />

      <OurTeamMember />

      <OurLatestBlog />

      <NewsletterForm />
      <StartBCA />
 
      <Footer />
    </>
  )
}
