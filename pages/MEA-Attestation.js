import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import MEAattestationslider from '@/components/BusinessConsulting/MEAattestationslider'
import Footer from '@/components/Layouts/Footer'
import MEAservices1 from '@/components/BusinessConsulting/MEAservices1'
import MEA from '@/components/Common/MEA'
export default function MEAAttestation () {
  return (
    <>
      <NavbarStyle2 />
       
      <MEAattestationslider />
      
      <MEAservices1/>
      <MEA/>
      
    
      <Footer />
    </>
  )
}
