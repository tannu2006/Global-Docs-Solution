import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import StartBCA from "../Common/startBCA";

const BachelorhoodServices = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Bachelorhood Certificate Attestation </span>
           <p>Whether you're applying for a marriage visa, planning to marry abroad, or fulfilling
   documentation for immigration, Bachelorhood Certificate Attestation is often a legal 
   requirement. We provide end-to-end attestation services for your certificate — from 
   initial verification to embassy-level authentication.</p>
          </div>

<>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div >
              <div className="service-details-content">
               
<div className="single-services-item with-boxshadow">               
<p><h2>What is bachelorhood certificate attestation?</h2>
Bachelorhood Certificate Attestation is the official process of verifying that an individual is
 unmarried. This certificate is often needed for marriage registration, immigration, or legal
  use in another country. The attestation confirms that the document is genuine and issued
   by an authorized body, making it legally valid for submission to government and
    consular authorities.</p>

<h3>Why is bachelorhood certificate attestation Important?</h3>

  <i className="ri-check-line">Marriage visa applications</i><br/>
<i className="ri-check-line">Overseas marriage registration</i><br/>
<i className="ri-check-line">Immigration and residency processing</i><br/>
<i className="ri-check-line">Legal proceedings</i><br/>
<i className="ri-check-line">Employment in specific regions</i><br/>
<i className="ri-check-line">Adoption and Sponsorship</i><br/>

<div className="process-area1">
  <div className="container">
    <div className="process-inner1">
        <div className="row justify-content-center">
          <div className="center">
              <h2>Types of Documents We Attest:</h2>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                <h5>Educational Certificates:</h5>
                <li>Degree Certificate</li>
        <li>Diploma Certificate</li>
       <li>Transfer Certificate (TC)</li>
        <li>Nursing, Engineering, Medical Certificates</li>
                 
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                <h5>Personal Certificates:</h5>
       <li> Birth Certificate</li> 
        <li>Marriage Certificate</li>
        <li>Divorce Certificate</li>
        <li>Police Clearance Certificate (PCC)</li>
        <li>Bachelorhood/Single Status Certificate</li>
        <li>Affidavits and Declarations </li>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                <h5>Commercial/Professional Documents:</h5>
        <li>Power of Attorney</li>
        <li>Experience Certificate</li>
        <li>Business Registration</li>
        <li>Memorandum & Articles of Association (MOA/AOA)</li>   
        <li>Trade Licenses</li>          
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

<h2><br/>Our Attestation Process</h2>

<li><b>Step 1.Notary Attestation:</b></li>
Certificate is notarized to confirm its authenticity.
<li><b>Step 2.State level Attestation:</b></li>
Verification by SDM or respective State Education/Human Resource Department.
<li><b>Step 3.Ministry of external Affairs (MEA) Attestation:</b></li>
Central government authentication for legal validity.
<li><b>Step 4.Embassy Attestation:</b></li>
The final verification is done by the destination country’s embassy or consulate.
<li><b>Step 5.(Optional) MOFA Attestation</b></li>
 In some countries, an additional attestation is required by the local Ministry of
  Foreign Affairs after embassy attestation.

<h2><br/>Documents Required:</h2>
<i className="ri-checkbox-circle-fill">Original Bachelorhood certificates</i><br/>
<i className="ri-checkbox-circle-fill">Passport copy</i><br/>
<i className="ri-checkbox-circle-fill">ID proof</i><br/>
<i className="ri-checkbox-circle-fill">Power of attorney(if applicable)</i><br/>
<i className="ri-checkbox-circle-fill">Visa application/marriage intention form</i><br/>
<i className="ri-checkbox-circle-fill">Supporting documents(if required)</i>
 

  <h3><br/>Processing Time</h3>
  Educational Documents – 7 to 15 working days<br/>
 Personal Documents – 5 to 10 working days<br/>
 Commercial Documents – 5 to 12 working days
    
    
 <h3><br/>Why Choose Us?</h3>
 <i className="ri-check-line"></i>100% Genuine Attestation Process<br/>
  <i className="ri-check-line"></i>Expert Handling of All Legal Formalities<br/>
  <i className="ri-check-line"></i>Regular Updates & Transparent Workflow<br/>
  <i className="ri-check-line"></i>Fast Processing with Pickup & Delivery Options<br/>
  <i className="ri-check-line"></i>Experienced Team with Embassy Coordination


     
</div>               
              </div>
            </div>

            
          </div>
        </div>
      </div>
</>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="services-slides-two"
          >
           <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon30.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/marriage-attestation">Marriage  Attestation</Link>
                  </h2>
                </div>
                <p>Marriage certificate attestation verifies the authenticity of a marriage certificate for use in
                foreign countries.</p>
                <Link href="/marriage-attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

            
             
            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon29.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/business-attestation">Business  Attestation</Link>
                  </h2>
                </div>
                <p>Business document attestation authenticates business documents for official use in
                   foreign countries.</p>
                <Link href="/business-attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon31.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/certificate-attestation">Certificates Attestation</Link>
                  </h2>
                </div>
                <p>Certificate attestation authenticates documents for use abroad, ensuring their legal 
                  acceptance by authorities.</p>

                <Link href="/certificate-attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
    
  );
};

export default BachelorhoodServices;
