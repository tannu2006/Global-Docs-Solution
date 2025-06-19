import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const ClientsFeedbackStyle2 = () => {
  return (
    <>
      <div className="feedback-area bg-gradient-image pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">CLIENT&apos;S FEEDBACK</span>
            <h2>What Our Client&apos;s Say</h2>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                 As per my experience , They provide one of the best service.
                 I took their services twice and they have given me their best.
                 I am also thanful to Mr.Sumit Palarwal for his outstanding coordination so the job get done on time.
                 Thank you Sumit ji , Thank you Tourzy travel.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/user1.jpg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Danish Emam</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  I will always recommend Tourzy Travels for any sort 
                  of documentation or attestation work. The team is 
                  extremely helpful, very responsive and have lots of 
                  experience in handling all situations.
                  They are able to expedite the processes too,
                   as and when required. Special thanks to Mr. Sumit...
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/user2.jpg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Varun Mahajan</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                 It was amazing experience with Sumit because they are cheaper 
                 than another service and no need to worry about documents because
                  they are loyal to their customer and their service, He is not 
                  fussy about fees and he asks payment only after completion of the 
                  job. charge also very reasonable...
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/user3.jpg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Ritesh Desai</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  I had a wonderful experience with Mr Sumit.he 
                  delivered his promise and got my documents attested 
                  within the promise time. He is also advised me on matters 
                  related to visa processing documents which I was not aware of.
                   I humbly request to my colleagues and friends...
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/user4.jpg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Arefean Aftab</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>1
      </div>
    </>
  );
};

export default ClientsFeedbackStyle2;
