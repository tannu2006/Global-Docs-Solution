import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import SliderBCA from '@/components/BusinessConsulting/SliderBCA'
import Choose from '@/components/BusinessConsulting/choose'
import Time from '@/components/Common/time'
import WBCA from '@/components/Common/WBCA'
import BCAimp from '@/components/Common/BCAimp'
import BCAprocess from '@/components/Common/BCAprocess'
import BCAdoc from '@/components/Common/BCAdoc'
import Documents from '@/components/Common/Documents'
import Footer from '@/components/Layouts/Footer'
import BachelorhoodServices from '@/components/BusinessConsulting/BachelorhoodServices'
import StartBCA from '@/components/Common/startBCA'

export default function BachelorhoodAttestation() {
  return (
    <>
      <NavbarStyle2 />

      <SliderBCA /> 

      <WBCA />

      <BCAimp />

      <BCAprocess />

      <BCAdoc />

      <Documents />

      <Time />

      <Choose />
     
      <BachelorhoodServices />

    <StartBCA />
 
      <Footer />
    </>
  )
}
