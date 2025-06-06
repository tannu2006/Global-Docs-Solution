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
   <h3><u>We guide you through the following steps for certificate attestation.</u></h3>
            
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
                   
                     
<i className="ri-num-1"> <b> Notarization(if applicable) </b></i><br/>
Initial document verification by a notary public.<br/>

<i className="ri-num-2"><b> State-Level Authentication </b></i><br/>
Attestation by the relevant Home Department or SDM.<br/>

<i className="ri-num-3"><b> Ministry of External Affairs (MEA) </b></i><br/>
MEA validates the document for international use.<br/>

<i className="ri-num-4"><b> Embassy Attestation </b></i><br/>
Final attestation by the concerned foreign embassy (UAE, Qatar, Kuwait, Saudi, etc.)<br/>

<i className="ri-num-5"><b> (Optional) MOFA Attestation </b></i><br/>
In some cases, the Ministry of Foreign Affairs of the destination country also verifies the documents.


                     
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
