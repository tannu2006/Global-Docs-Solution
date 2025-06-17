import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import HeroBanner from '@/components/TechnologySolutions/HeroBanner'
import AboutUss from '@/components/CryptoStartup/AboutUss'
import VisaStampingList from '@/components/TechnologySolutions/VisaStampingList'
import ApostilleAndVisaServices from '@/components/Common/ApostilleAndVisaSerices'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import AttestationList from '@/components/CybersecurityServices/AttestationList'
import EmbassyAttestationList from '@/components/BusinessConsulting/EmbassyAttestationList'

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <AboutUss />

      <ApostilleAndVisaServices/>

      <AttestationList/>

      <EmbassyAttestationList/>

      <VisaStampingList/>

      <GetStarted />

      <Footer />
    </>
  )
}
