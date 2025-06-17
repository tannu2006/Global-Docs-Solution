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
                        <Image
                          src="/images/case-studies/elan.png"
                          alt="image"
                          width={91}
                          height={83}
                        />
                      </div>
                      <h3>
                        <Link href="/case-studies/details">Apostille Services</Link>
                      </h3>
                      <p>
                        Apostille services is an official authentication process that certifies the validity of documents for 
                        international use in Hague Convention member countries. This \
                        ensures that documents issued in one country are legally recognized in another without further legalization.
                      </p>
                     
                      <Link
                        href="/UAE-EmbassyAttestation"
                        className="default-btn"
                      >
                        <span className="ri-arrow-right-s-line"></span>View More
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="image">
                      <Image
                        src="/images/case-studies/case-studies1.png"
                        alt="image"
                        width={860}
                        height={703}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-case-studies-box">
                <div className="row align-items-center m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="content">
                      <div className="logo">
                        <Image
                          src="/images/case-studies/startp.png"
                          alt="image"
                          width={91}
                          height={83}
                        />
                      </div>
                      <h3>
                        <Link href="/case-studies/details">Visa Services</Link>
                      </h3>
                      <p>
                     Visa services play a crucial role in international travel, work, education, and migration. Whether you are planning a vacation, 
                     studying abroad, or relocating for work, obtaining the correct visa is essential.
                      </p>
                      
                      <Link
                        href="/QATAR_EmbassyAttestation"
                        className="default-btn"
                      >
                        <span className="ri-arrow-right-s-line"></span>View More
                      </Link>
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
      </div>
    </>
  );
};

export default OurCaseStudies;
