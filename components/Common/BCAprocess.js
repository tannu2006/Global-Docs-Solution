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
   <h3><u>We guide you through the following steps for bachelorhood certificate attestation.</u></h3>
            
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
                   
                     
<i className="ri-num-1"> <b> Notary Attestation </b></i><br/>
Certificate is notarized to confirm its authenticity.<br/>

<i className="ri-num-2"><b> State level Attestation </b></i><br/>
Verification by SDM or respective State Education/Human Resource Department.<br/>

<i className="ri-num-3"><b> Ministry of external Affairs (MEA) Attestation</b></i><br/>
Central government authentication for legal validity.<br/>

<i className="ri-num-4"><b> Embassy Attestation </b></i><br/>
The final verification is done by the destination country’s embassy or consulate.
<br/>
<i className="ri-num-5"><b> MOFA Attestation(Optional) </b></i><br/>
 In some countries, an additional attestation is required by the local Ministry of
  Foreign Affairs after embassy attestation.                    
                     
                     
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
