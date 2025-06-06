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
            <span className="sub-title">Kuwait Embassy Attestation Process</span>
   <h3><u>We guide you through the following steps for Kuwait Embassy attestation.</u></h3>
            
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
Certified by a public notary in the issuing country.<br/>

<i className="ri-num-2"><b> Home Department/HRD Attestation </b></i><br/>
Based on the nature of the document.<br/>

<i className="ri-num-3"><b> Ministry of external Affairs (MEA) Attestation </b></i><br/>
 Central government approval.<br/>

<i className="ri-num-4"><b> Kuwait Embassy Attestation </b></i><br/>
Legalized by the Kuwaiti Embassy or Consulate in your country.<br/>

<i className="ri-num-5"><b> MOFA Attestation (in Kuwait) </b></i><br/>
 Final verification by Kuwait's Ministry of Foreign Affairs (done upon arrival, if needed).

                     
                     
                     
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
