import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import Apostilleservices from '@/components/BusinessConsulting/Apostilleservices'
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
