import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import OurServicesCopy from '@/components/BusinessConsulting/OurServicesCopy'
import AboutUs from '@/components/BusinessConsulting/AboutUs'
import FunFacts from '@/components/Common/FunFacts'
import FreeSEOQuotesForm from '@/components/Common/FreeSEOQuotesForm'
import ClientsFeedback from '@/components/Common/ClientsFeedback'
import OurCaseStudies from '@/components/Common/OurCaseStudies'
import OurTeamMember from '@/components/Common/OurTeamMember'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import NewsletterForm from '@/components/Common/NewsletterForm'
import Footer from '@/components/Layouts/Footer'
import SliderCA from '@/components/BusinessConsulting/sliderCA'
import StartCA from '@/components/Common/startCA'

export default function CertificateAttestation() {
  return (
    <>
      <NavbarStyle2 />

      <SliderCA/>

      <OurServicesCopy />

      <AboutUs />

      <FunFacts />

      <FreeSEOQuotesForm />

      <ClientsFeedback />

      <OurCaseStudies />

      <OurTeamMember />

      <OurLatestBlog />

      <NewsletterForm />
      <StartCA />
 
      <Footer />
    </>
  )
}
