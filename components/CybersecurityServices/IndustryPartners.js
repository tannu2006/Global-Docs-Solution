import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const IndustryPartners = () => {
  return (
    <>
      <div className="industry-partner-area">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Industry Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="industry-partner-inner-box pt-100 pb-70">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              modules={[Autoplay]}
              className="partner-slides"
            >
              <SwiperSlide>
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-1.png"
                    alt="image"
                    width={138}
                    height={100}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-2.png"
                    alt="image"
                    width={135}
                    height={100}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-3.png"
                    alt="image"
                    width={88}
                    height={100}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-4.png"
                    alt="image"
                    width={108}
                    height={100}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-5.png"
                    alt="image"
                    width={120}
                    height={100}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-6.png"
                    alt="image"
                    width={112}
                    height={100}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-4.png"
                    alt="image"
                    width={108}
                    height={100}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryPartners;
