import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import WhatApostille from '@/components/TechnologySolutions/What-Apostille'
import WhyApostilleRequires from '@/components/CryptoStartup/Why-ApostilleRequires'
import Apostilleattestationslider from "@/components/BusinessConsulting/Apostilleattestationslider";
import MEATypeDocument from '@/components/CybersecurityServices/MEA-TypeDocument'
import ApostilleProcess from '@/components/CybersecurityServices/Apostille-Process'
import MEADocuments from '@/components/CybersecurityServices/MEA-Documents'
import MEAProcessingTime from '@/components/CryptoStartup/MEAProcessingTime'
import WhyChooseUsApostille from '@/components/CybersecurityServices/WhyChooseUs-Apostille'
import Footer from "@/components/Layouts/Footer";


export default function ApostilleAttestations() {
    return (
        <>
            <Navbar />
            <Apostilleattestationslider/>
            <WhatApostille />
            <WhyApostilleRequires />
            <MEATypeDocument />
             <ApostilleProcess/>
            <MEADocuments />
            <MEAProcessingTime />
            <WhyChooseUsApostille/>
            <Footer />
        </>
    );
}