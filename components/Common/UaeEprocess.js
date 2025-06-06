import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const Our = () => {
  return (
    <>
      <div className="case-studies-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">UAE Embassy Attestation Process</span>
   <h3><u>We guide you through the following steps for UAE Embassy attestation.</u></h3>
            
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
Performed by a public notary in the country of origin.<br/>

<i className="ri-num-2"><b> State Home Department / HRD Attestation </b></i><br/>
Based on the type of document (personal or educational).<br/>

<i className="ri-num-3"><b> Ministry of external Affairs (MEA) Attestation </b></i><br/>
 The central government verifies and authenticates the document.<br/>

<i className="ri-num-4"><b> UAE Embassy Attestation </b></i><br/>
The UAE Embassy/Consulate in the home country attests the document.<br/>

<i className="ri-num-5"><b> MOFA Attestation (UAE) </b></i><br/>
 After reaching UAE, the document must be submitted to the Ministry of Foreign 
 Affairs for final validation.

                     
                     
                     
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

export default Our;
