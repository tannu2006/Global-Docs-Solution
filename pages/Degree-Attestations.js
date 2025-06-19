import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Degreeattestationslider from "@/components/BusinessConsulting/Degreeattestationslider";
import WhatDegree from '@/components/TechnologySolutions/What-Degree'
import WhyDegreeRequires from '@/components/CryptoStartup/Why-DegreeRequires'
import MEATypeDocument from '@/components/CybersecurityServices/MEA-TypeDocument'
import DegreeProcess from '@/components/CybersecurityServices/Degree-Process'
import MEADocuments from '@/components/CybersecurityServices/MEA-Documents'
import MEAProcessingTime from '@/components/CryptoStartup/MEAProcessingTime'
import WhyChooseUsDegree from '@/components/CybersecurityServices/WhyChooseUs-Degree'
import Footer from "@/components/Layouts/Footer";

export default function DegreeAttestations() {
    return (
        <>
            <Navbar />
            <Degreeattestationslider />
            <WhatDegree/>
            <WhyDegreeRequires/>
            <MEATypeDocument />
            <DegreeProcess />
            <MEADocuments />
            <MEAProcessingTime />
            <WhyChooseUsDegree />
            <Footer />
        </>
    );
}