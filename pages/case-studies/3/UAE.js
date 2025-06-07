// import React from 'react'
// import NavbarStyle2 from '@/components/Layouts/NavbarStyle2'
// import PageTitle from '@/components/Common/PageTitle'
// import UAEembassy from '@/components/CaseStudies/UAEembassy'
// import Footer from '@/components/Layouts/Footer'
// import StartUAE from '@/components/Common/startUAE'
// import Edocuments from '@/components/Pricing/Edocuments'

// export default function CaseStudies3() {
//   return (
//     <>
//       <NavbarStyle2 />

//       <PageTitle homeText="Home" pageTitle="UAE Embassy" />

//       <UAEembassy />

//       <Edocuments />

//       <StartUAE />

//       <Footer />
//     </>
//   )
// }
import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesCard3 from '@/components/CaseStudies/CaseStudiesCard3'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'
import UAEstampingcard3 from '@/components/CaseStudies/UAEstampingcard3'
import UAE from '@/components/Common/UAE'

export default function CaseStudies3() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle=" Visa Stamping" />

      <UAEstampingcard3 />

      <UAE />

      <Footer />
    </>
  )
}