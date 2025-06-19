import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import Birthservices from '@/components/BusinessConsulting/Birthservices'
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
