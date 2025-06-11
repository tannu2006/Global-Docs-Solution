import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import Footer from '@/components/Layouts/Footer'
import Apostilleservicesslider from '@/components/BusinessConsulting/Apostilleservicesslider'
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
