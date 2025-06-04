import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import HeroSlider from '@/components/BusinessConsulting/HeroSlider'
import Birthservices from '@/components/BusinessConsulting/Birthservices'
import AboutUs from '@/components/BusinessConsulting/AboutUs'
import FunFacts from '@/components/Common/FunFacts'
import FreeSEOQuotesForm from '@/components/Common/FreeSEOQuotesForm'
import ClientsFeedback from '@/components/Common/ClientsFeedback'
import OurCaseStudies from '@/components/Common/OurCaseStudies'
import OurTeamMember from '@/components/Common/OurTeamMember'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import NewsletterForm from '@/components/Common/NewsletterForm'
import Footer from '@/components/Layouts/Footer'
import Birth from '@/components/Common/Birth'
import Birthattestationslider  from '@/components/BusinessConsulting/Birthattestionslider'
export default function BirthAttestation() {
  return (
    <>
      <NavbarStyle2 />

      <Birthattestationslider />
       <Birthservices/>

     
       <Birth/>
      <Footer />
    </>
  )
}
