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
            <span className="sub-title">Saudi Embassy Attestation Process</span>
   <h3><u>We guide you through the following steps for Saudi Embassy attestation.</u></h3>
            
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
Local notary authenticates the document.<br/>

<i className="ri-num-2"><b> Home Department / HRD Attestation </b></i><br/>
For educational/personal documents.<br/>

<i className="ri-num-3"><b> Ministry of external Affairs (MEA) Attestation </b></i><br/>
 Central government approval.<br/>

<i className="ri-num-4"><b> Saudi Culture Attache Attestation </b></i><br/>
Required for educational certificates.<br/>

<i className="ri-num-5"><b> Saudi Embassy Attestation </b></i><br/>
Final authentication by Saudi authority.<br/>

<i className="ri-num-5"><b> MOFA Attestation (in Saudi Arabia) </b></i><br/>
Ministry of Foreign Affairs in KSA (final step after you arrive).

                     
                     
                     
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
