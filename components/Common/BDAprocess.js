import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const OurCaseStudies = () => {
  return (
    <>
      <div className="case-studies-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Attestation Process</span>
   <h3><u>We guide you through the following steps for business document attestation</u></h3>
            
          </div>

          <Swiper
            slidesPerView={1}
            navigation={true}
            spaceBetween={0}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Navigation]}
            className="case-studies-slides"
          >
            

            <SwiperSlide>
              <div className="single-case-studies-box">
                <div className="row align-items-center m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="content">
                   
                     
<i className="ri-num-1"> <b> Chamber of Commerce Attestation </b></i><br/>
Initial verification from the issuing body or local business authority.<br/>

<i className="ri-num-2"><b> Notary Attestation(if required) </b></i><br/>
Legal authentication by a certified notary public.<br/>

<i className="ri-num-3"><b> State Authority Attestation </b></i><br/>
For verification through respective state departments (if applicable).<br/>

<i className="ri-num-4"><b> MEA Attestation </b></i><br/>
MEA authenticates the document for foreign use.<br/>

<i className="ri-num-5"><b> Embassy or Consulate Attestation </b></i><br/>
Final verification by the target country’s embassy (UAE, Saudi, Qatar, Kuwait, etc.)<br/>

<i className="ri-num-6"><b> (Destination country) MOFA Attestation(Optional) </b></i><br/>
In some cases, attestation is required by the Ministry of Foreign Affairs after arrival
 in the destination country.
                     
                     
                     
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="image">
                      <Image
                        src="/images/case-studies/case-studies2.png"
                        alt="image"
                        width={860}
                        height={703}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        {/* Shape Image */}
        <div className="shape7">
          <Image
            src="/images/shape/shape5.png"
            alt="image"
            width={90}
            height={74}
          />
        </div>
        <div className="shape8">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={106}
            height={113}
          />
        </div>
      </div>
    </>
  );
};

export default OurCaseStudies;
