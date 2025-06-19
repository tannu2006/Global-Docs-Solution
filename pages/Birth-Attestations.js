import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import WhatBirth from '@/components/TechnologySolutions/What-Birth'
import WhyBirthRequires from '@/components/CryptoStartup/Why-BirthRequires'
import Birthattestationslider from "@/components/BusinessConsulting/Birthattestionslider";
import MEATypeDocument from '@/components/CybersecurityServices/MEA-TypeDocument'
import BirthProcess from '@/components/CybersecurityServices/Birth-Process'
import MEADocuments from '@/components/CybersecurityServices/MEA-Documents'
import MEAProcessingTime from '@/components/CryptoStartup/MEAProcessingTime'
import WhyChooseUsBirth from '@/components/CybersecurityServices/WhyChooseUs-Birth'
import Footer from "@/components/Layouts/Footer";


export default function BirthAttestations() {
    return (
        <>
            <Navbar />
            <Birthattestationslider/>
            <WhatBirth/>
            <WhyBirthRequires/>
            <MEATypeDocument/>
            <BirthProcess/>
            <MEADocuments/>
            <MEAProcessingTime/>
            <WhyChooseUsBirth/>
            <Footer />
        </>
    );
}