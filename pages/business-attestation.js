import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import Time from '@/components/Common/time'
import Choose from '@/components/BusinessConsulting/choose'
import BDA from '@/components/Common/BDA'
import BDAimp from '@/components/Common/BDAimp'
import Documents from '@/components/Common/Documents'
import BDAprocess from '@/components/Common/BDAprocess'
import BDAdoc from '@/components/Common/BDAdoc'
import Footer from '@/components/Layouts/Footer'
import BusinessServices from '@/components/BusinessConsulting/BusinessServices'
import SliderBDA from '@/components/BusinessConsulting/sliderBDA'
import StartBDA from '@/components/Common/startBDA'

export default function BusinessAttestation() {
  return (
    <>
      <NavbarStyle2 />

      <SliderBDA /> 

      <BDA />

      <BDAimp />

      <BDAprocess />

      <BDAdoc />

      <Documents />

      <Time />

      <Choose />
     
      <BusinessServices />

      <StartBDA />
 
      <Footer />
    </>
  )
}
