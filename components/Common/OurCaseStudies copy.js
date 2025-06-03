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
            <span className="sub-title"> <h4>
               <i className="ri-globe-line"></i> Visa Application Process
                </h4>    </span>
           
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
                      <div className="logo">
                      </div>
                      <h4> 
                 <b>
                  <i className="ri-number-1"></i> &nbsp;Choose the Right Visa </b>
                   </h4>
                   <p>
                   Identify the visa type that suits your purpose of travel.
                   Check eligibility criteria and document requirements.
                   </p>
                   <h4>
                   <b>  <i className="ri-number-2"></i> &nbsp;Complete the Application Form </b> 
                   </h4>
                   <p>
                    Some countries accept online applications, while others require paper submissions.
                    Ensure accurate and complete information to avoid rejection.
                   </p>
                   <h4>
                   <b> <i className="ri-number-3"></i> &nbsp;
                  Schedule and Attend Visa Interview (If Required)
                  </b>
                   </h4>
                   <p>
                   Some countries  require a visa interview.
                   Applicants should be prepared to answer questions about their travel purpose, financial status, and ties to their home country.
                   </p>
                   <h4>
                   <b> <i className="ri-number-4"></i> &nbsp;Wait for Processing</b>
                   </h4>
                   <p>
                    Visa processing times vary based on visa type and nationality.
                    Some visas are approved within days, while others take weeks or months.
                   </p>
                   <h4>
                   <b> <i className="ri-number-5"></i> &nbsp;
                    Receive Your Visa
                    </b>
                   </h4>
                   <p>
                  
                    If approved, the visa is stamped on your passport or issued electronically.
                    Check all details carefully before traveling.
                   </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="image">
                      <Image
                        src="/images/case-studies/6.png"
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
         
        </div>
        <div className="shape8">
          
        </div>
      </div>
    </>
  );
};

export default OurCaseStudies;
