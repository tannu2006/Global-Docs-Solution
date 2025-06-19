import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import OurTeamMembers from '@/components/Team/OurTeamMembers'
import GetStarted from '@/components/Common/GetStartwithus'
import Footer from '@/components/Layouts/Footer'

export default function Team() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="" />

      <OurTeamMembers />

      <GetStarted />

      <Footer />
    </>
  )
}
