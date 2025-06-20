import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const MarriageServices = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          

<>
     
      
</>


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
                    src="/images/icon/icon32.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/Bachelorhood-Attestation">Bachelorhood Attestation</Link>
                  </h2>
                </div>
                <p>Bachelorhood certificate attestation authenticates a bachelor's degree
                   for use in foreign countries.</p>
              
                <Link href="/Bachelorhood-Attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>
             
            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon29.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/Business-Attestation">Business Attestation</Link>
                  </h2>
                </div>
                <p>Business document attestation authenticates business documents for official use in
                   foreign countries.</p>

                <Link href="/Business-Attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon31.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/Certificate-Attestation">Certificates Attestation</Link>
                  </h2>
                </div>
                <p>Certificate attestation authenticates documents for use abroad, ensuring their legal 
                  acceptance by authorities.</p>

                <Link href="/Certificate-Attestation" className="default-btn">
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

export default MarriageServices;
