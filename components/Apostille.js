import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const MEAservices = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Attestation Services</span>
            <h2>MEA Attestation</h2>
            <p>
            MEA Certificates are the process of reviewing documents from the Ministry of
             Foreign Affairs for international use.<br></br> Verify the reliability 
            of documents for visas, employment or educational purposes overseas.
            </p>
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
                    src="/images/icon/icon8.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/MEAservices/">MEA Attestation</Link>
                  </h3>
                </div>
                <p>
                MEA attestation is the process of verifying documents 
                by the Ministry of External Affairs for international use.
                </p>
                <Link href="/services/details/MEA" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

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
                    <Link href="/Apostilleservices/">Apostille Attestation</Link>
                  </h3>
                </div>
                <p>
                Apostille attestation certifies documents for international 
                use under the Hague Convention.
                </p>
                <Link href="/services/details/Apostille" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
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
                    <Link href="/Degreeservices">Degree Attestation</Link>
                  </h3>
                </div>
                <p>
                Degree attestation verifies the authenticity of an educational degree for international use.
                </p>
                <Link href="/services/details/Degree" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
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
                    <Link href="/Birthservices/">Birth Attestation</Link>
                  </h3>
                </div>
                <p>
                Birth certificate attestation confirms its authenticity for legal, educational, and immigration purposes abroad.
                </p>
                <Link href="/services/details/Birth" className="default-btn">
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

export default MEAservices;
