import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import HeroSlider from '@/components/BusinessConsulting/HeroSlider'
import Footer from '@/components/Layouts/Footer'
import EmbassyAttestationList from '@/components/BusinessConsulting/EmbassyAttestationList'
import PageTitle from '@/components/Common/PageTitle'



export default function BusinessConsulting() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="Embassy Attestation" />

      <HeroSlider />
      <EmbassyAttestationList/>
 
      <Footer />
    </>
  )
}
