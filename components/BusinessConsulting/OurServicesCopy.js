import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const OurServicesCopy = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Certificate Attestation</span>
            <p>Planning to travel, work, study, or settle abroad? Certificate attestation is an essential 
  step to ensure your documents are officially recognized in the destination country.
   We provide complete support for attesting educational, personal, and professional 
  certificates from relevant authorities and embassies.
  </p>
          </div>

<>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div >
              <div className="service-details-content">
                
<div className="single-services-item with-boxshadow">
 
  <h2>What is certificates Attestation?</h2>
  <p>Certificate Attestation is the process of verifying the authenticity of documents
   issued in one country for legal use in another. The attestation confirms that the
    certificate is genuine, properly issued, and eligible for recognition by foreign
     governments or institutions.
    </p>
  
    
  
    <h2>Certificate attestation is mandatory for:</h2>
     <i className="ri-check-line"> Employment and job visa applications</i><br/>
    <i className="ri-check-line">Higher education abroad </i><br/>
    <i className="ri-check-line">Immigration and PR processing</i><br/>
    <i className="ri-check-line">Family visa, marriage abroad, or sponsorship</i><br/>
    <i className="ri-check-line">Business, legal, or court matters overseas</i>
 
  
<div className="process-area1">
        <div className="container">
          <div className="process-inner1">
            <div className="row justify-content-center">
              <div className="center">
              <h2>Types of Documents we attest:</h2>
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
  

 <h2><br/>Our Certificates Attestation Process</h2>
   <li><b>Step 1.Notarization(if applicable):</b></li>
   Initial document verification by a notary public.
   <li><b>Step 2.State-Level Authentication:</b></li>
   Attestation by the relevant Home Department or SDM.
   <li><b>Step 3.Ministry of External Affairs (MEA):</b></li>
   MEA validates the document for international use.
   <li><b>Step 4.Embassy Attestation:</b></li>
   Final attestation by the concerned foreign embassy (UAE, Qatar, Kuwait, Saudi, etc.)
   <li><b>Step 5.(Optional) MOFA Attestation:</b></li>
   In some cases, the Ministry of Foreign Affairs of the destination country also verifies the documents.
  
   <h2><br/>Document's Required</h2>
 <i className="ri-checkbox-circle-fill"> Original Marriage certificate</i><br/>
 <i className="ri-checkbox-circle-fill">Photocopy of marriage certificate</i><br/>
 <i className="ri-checkbox-circle-fill">Passport copy</i><br/>
 <i className="ri-checkbox-circle-fill">Identification proof</i><br/>
 <i className="ri-checkbox-circle-fill">Power of attorney(if applicable)</i><br/>
 <i className="ri-checkbox-circle-fill">Visa or Immigration form</i><br/>
 <i className="ri-checkbox-circle-fill"> Proof of residence</i>
 
 <h2><br/>Processing-Time</h2>
 Educational Documents – 7 to 15 working days<br/>
 Personal Documents – 5 to 10 working days<br/>
 Commercial Documents – 5 to 12 working days

  
    <h2><br/>Why Choose Our Services?</h2>
    <i className="ri-check-line">Support for all types of certificate attestation</i><br/>
    <i className="ri-check-line">Country-specific compliance</i><br/>
    <i className="ri-check-line">Friendly experts to guide you step-by-step</i><br/>
    <i className="ri-check-line">Doorstep document pickup & delivery(where available)</i><br/>
    <i className="ri-check-line">Affordable pricing with no hidden fees</i><br/>
    <i className="ri-check-line">Transparent communication and process tracking</i>
   
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
                    src="/images/icon/icon32.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/bachelorhood-attestation">Bachelorhood  Attestation</Link>
                  </h2>
                </div>
                <p>Bachelorhood certificate attestation authenticates a bachelor's degree
                   for use in foreign countries.</p>
              
                <Link href="/bachelorhood-attestation" className="default-btn">
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
            
            
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurServicesCopy;
