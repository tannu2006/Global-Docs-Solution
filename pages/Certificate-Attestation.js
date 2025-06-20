import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import WCA from '@/components/Common/WCA'
import CAimp from '@/components/Common/CAimp'
import CAprocess from '@/components/Common/CAprocess'
import  CAdoc from '@/components/Common/CAdoc'
import Documents from '@/components/Common/Documents'
import Time from '@/components/Common/time'
import Choose from '@/components/BusinessConsulting/choose'
import Footer from '@/components/Layouts/Footer'
import SliderCA from '@/components/BusinessConsulting/sliderCA'
import StartCA from '@/components/Common/startCA'
import CertificateServices from '@/components/BusinessConsulting/CertificateServices'

export default function CertificateAttestation() {
  return (
    <>
      <NavbarStyle2 />

      <SliderCA/>

      <WCA />

      <CAimp />

      <CAprocess />

      <CAdoc />

      <Documents/>

      <Time/>

      <Choose />

      <CertificateServices />

    <StartCA />
 
      <Footer />
    </>
  )
}
