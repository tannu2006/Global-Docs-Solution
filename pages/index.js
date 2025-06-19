import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import HeroBanner from '@/components/TechnologySolutions/HeroBanner'
import AboutUss from '@/components/CryptoStartup/AboutUss'
import GetStartwithus from '@/components/Common/GetStartwithus'
import Footer from '@/components/Layouts/Footer'
import OURServicesList from '@/components/CybersecurityServices/OURServicesList'

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <AboutUss />

      <OURServicesList/>

      <GetStartwithus/>

      <Footer />
    </>
  )
}
