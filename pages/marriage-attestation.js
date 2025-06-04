import React from 'react'
import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
import Choose from '@/components/BusinessConsulting/choose'
import Time from '@/components/Common/time'
import MAdoc from '@/components/Common/MAdoc'
import Documents from '@/components/Common/Documents'
import MAprocess from '@/components/Common/MAprocess'
import WMA from '@/components/Common/WMA'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import MAimp from '@/components/Common/MAimp'
import Footer from '@/components/Layouts/Footer'
import MarriageServices from '@/components/BusinessConsulting/MarriageServices'
import SliderMA from '@/components/BusinessConsulting/sliderMA'
import StartMA from '@/components/Common/startMA'

export default function MarriageAttestation() {
  return (
    <>
      <NavbarStyle2 />

      <SliderMA /> 
     

      <WMA />

      <MAimp/>

      <MAprocess />

      <MAdoc />

      <Documents/>


      <Time />

      <Choose />

      <MarriageServices />

      <StartMA />

     
 
      <Footer />
    </>
  )
}
