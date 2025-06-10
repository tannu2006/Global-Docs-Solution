import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import HeroSlider from '@/components/BusinessConsulting/HeroSlider'
import OurServices from '@/components/BusinessConsulting/OurServices'
import AboutUs from '@/components/BusinessConsulting/AboutUs'
import FunFacts from '@/components/Common/FunFacts'
import FreeSEOQuotesForm from '@/components/Common/FreeSEOQuotesForm'
import ClientsFeedback from '@/components/Common/ClientsFeedback'
import OurCaseStudies from '@/components/Common/OurCaseStudies'
import OurTeamMember from '@/components/Common/OurTeamMember'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import NewsletterForm from '@/components/Common/NewsletterForm'
import Footer from '@/components/Layouts/Footer'
import Apostilleservicesslider from '@/components/BusinessConsulting/Apostilleservicesslider'
import MEAcontent from '@/components/Services/MEAcontent'
import MEAservices from '@/components/BusinessConsulting/MEAservices'
import Apostille from '@/components/BusinessConsulting/Apostille'
import Apostilleservices from '@/components/Common/Apostilleservices'
export default function ApostilleServices () {
  return (
    <>
      <NavbarStyle2 />
       
      <Apostilleservicesslider />
      <Apostille/>
      
      
      <Apostilleservices/>
      <Footer />
    </>
  )
}
