import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Embassy Attestation</span>
          </div>

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
                    src="/images/icon/icon9.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/UAE-EmbassyAttestation">UAE Embassy Attestation</Link>
                  </h3>
                </div>
                <p>
                  UAE Embassy Attestation is the process of legalizing documents issued 
                  in your home country so...
                
                </p>
                <Link href="/UAE-EmbassyAttestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon10.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/QATAR-EmbassyAttestation">Qatar Embassy Attestation</Link>
                  </h3>
                </div>
                <p>
                 Qatar Embassy Attestation is a crucial process that verifies the authenticity 
                 of your documents so...
                </p>
                <Link href="/QATAR-EmbassyAttestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon11.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/SAUDI-EmbassyAttestation">Saudi Embassy Attestation</Link>
                  </h3>
                </div>
                <p>
                  Saudi Embassy Attestation is the process of certifying 
                  the authenticity of your documents by the Ministry of External 
                  Affairs (MEA) in...
                </p>
                <Link href="/SAUDI-EmbassyAttestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon12.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/KUWAIT-EmbassyAttestation">Kuwait Embassy Attestation</Link>
                  </h3>
                </div>
                <p>
                  Kuwait Embassy Attestation is a vital procedure for verifying the authenticity of documents issued 
                  outside Kuwait...
                </p>
                <Link href="/KUWAIT-EmbassyAttestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Read More
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurServices;
