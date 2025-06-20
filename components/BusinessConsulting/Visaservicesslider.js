import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const Visaservicesslider = () => {
  return (
    <>
    <div className="home-area"></div>
    <br/>
      <div className="banner-image">
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
                    <br/><br/>
                      <h1 className="text-colour">
                      Fast & Reliable Visa Assistance for Work, Study, & Travel
                      </h1>
                      <Link href="/contact" className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Apply for Your Visa Now
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="home-image">
                     
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

export default Visaservicesslider;
