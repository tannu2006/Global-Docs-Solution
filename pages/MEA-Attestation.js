import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import MEAattestationslider from '@/components/BusinessConsulting/MEAattestationslider'
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

import MEAcontent from '@/components/Services/MEAcontent'
import MEAservices from '@/components/BusinessConsulting/MEAservices'
import MEA from '@/components/Common/MEA'
export default function MEAAttestation () {
  return (
    <>
      <NavbarStyle2 />
       
      <MEAattestationslider />
      
      <MEAservices/>
      <MEA/>
      
    
      <Footer />
    </>
  )
}
