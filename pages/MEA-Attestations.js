import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import WhatMEA from '@/components/TechnologySolutions/What-MEA'
import WhyMEARequires from '@/components/CryptoStartup/Why-MEARequires'
import MEATypeDocument from '@/components/CybersecurityServices/MEA-TypeDocument'
import MEAProcess from '@/components/CybersecurityServices/MEA-Process'
import MEADocuments from '@/components/CybersecurityServices/MEA-Documents'
import MEAProcessingTime from '@/components/CryptoStartup/MEAProcessingTime'
import MEAattestationslider from '@/components/BusinessConsulting/MEAattestationslider'
import WhyChooseUsMEA from '@/components/CybersecurityServices/WhyChooseUs-MEA'
import Footer from "@/components/Layouts/Footer";

export default function MEAAttestations () {
  return (
    <>
      <Navbar/>
      <MEAattestationslider />
      <WhatMEA/>
      <WhyMEARequires/>
      <MEATypeDocument/>
      <MEAProcess/>
      <MEADocuments/>
      <MEAProcessingTime/>
      <WhyChooseUsMEA/>
      <Footer/>
    </>
  )
}


