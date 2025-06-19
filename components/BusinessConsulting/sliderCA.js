import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const SliderCA = () => {
  return (
    <>
      <div className="home-area"></div><br/>
      <div className="blog-banner2">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="home-slides"
        >
          <SwiperSlide>
            <div className="banner-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="home-content">
                      <span className="sub-title">Fast & Reliable Certificate Attestation Services</span>
                      <h1>
                      For education, employment, travel, and legal use.
                      </h1>
                      <Link href="/contact" className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Start Your Attestation Now
                      </Link>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </SwiperSlide>

          
        </Swiper>
      </div>
    </>
  );
};

export default SliderCA;
