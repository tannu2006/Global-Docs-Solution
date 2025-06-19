import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const SliderBDA = () => {
  return (
    <>
      <div className="home-area"></div><br/>
      <div
  style={{
    zIndex: 1,
    position: "relative",
    paddingTop: "120px",
    backgroundColor: "#f9f9f9",
    backgroundImage: 'url("/images/bg/BlogBanner.png")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>

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
                      <span className="sub-title">Get Your Business Documents Legally Attested</span>
                      <h1>
                      Essential for company setup, trade, or official use.
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

export default SliderBDA;
