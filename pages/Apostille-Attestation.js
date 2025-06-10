import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import HeroSlider from '@/components/BusinessConsulting/HeroSlider'
import Apostilleservices from '@/components/BusinessConsulting/Apostilleservices'
import AboutUs from '@/components/BusinessConsulting/AboutUs'
import FunFacts from '@/components/Common/FunFacts'
import FreeSEOQuotesForm from '@/components/Common/FreeSEOQuotesForm'
import ClientsFeedback from '@/components/Common/ClientsFeedback'
import OurCaseStudies from '@/components/Common/OurCaseStudies'
import OurTeamMember from '@/components/Common/OurTeamMember'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import NewsletterForm from '@/components/Common/NewsletterForm'
import Footer from '@/components/Layouts/Footer'
import Apostille from '@/components/Common/apostille'
import Apostilleattestationslider from '@/components/BusinessConsulting/Apostilleattestationslider'
export default function ApostilleAttestation() {
  return (
    <>
      <NavbarStyle2 />

      <Apostilleattestationslider />
       
      <Apostilleservices />

     
      <Apostille/>
      <Footer />
    </>
  )
}
