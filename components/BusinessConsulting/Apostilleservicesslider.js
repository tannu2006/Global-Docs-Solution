import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const Apostilleservicesslider = () => {
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
                     <br/>
                     <br/>
                      <h1 className="text-colour">
                      Get Your Documents Apostilled for International Recognition
                      </h1>
                      <Link href="/contact" className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Get Apostille Now
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

export default Apostilleservicesslider;
