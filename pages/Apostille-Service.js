import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Apostilleservicesslider from "@/components/BusinessConsulting/Apostilleservicesslider";
import WhatApostilleServices from '@/components/TechnologySolutions/What-ApostilleServices'
import NeedApostilleServices from '@/components/CybersecurityServices/Need-ApostilleServices'
import ApostilleServiceTypeDocument from '@/components/CybersecurityServices/ApostilleServices-TypeDocument'
import ApostilleServicesIssues from '@/components/CryptoStartup/ApostilleServices-Issues'
import ApostilleServicesProcess from '@/components/CybersecurityServices/ApostilleServices-Process'
import ApostilleServicesProcessingTime from '@/components/CryptoStartup/ApostilleServices-ProcessingTime'
import WhyChooseUsApostilleServices from '@/components/CybersecurityServices/WhyChooseUs-ApostilleServices'
import Footer from "@/components/Layouts/Footer";

export default  function ApostilleService() {
    return (
        <>
            <Navbar />
            <Apostilleservicesslider />
            <WhatApostilleServices />
            <NeedApostilleServices />
            <ApostilleServiceTypeDocument />
            <ApostilleServicesIssues />
            <ApostilleServicesProcess />
            <ApostilleServicesProcessingTime />
            <WhyChooseUsApostilleServices />
            <Footer />
        </>
    );
}