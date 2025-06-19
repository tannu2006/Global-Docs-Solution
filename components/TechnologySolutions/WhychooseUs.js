import React from "react";
import Image from "next/image";

const Process = () => {
  return (
    <>
      <div className="process-area">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Why Choose Us</span>
          </div>
          <div className="process-inner">
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                  <div className="icon">
                    <Image
                      src="/images/icon/icon14.png"
                      alt="image"
                      width={150}
                      height={145}
                    />
                  </div>
                  <h3>With more than 12 years of experience.</h3>
                  <p>
                    Since 2011, Global Docs Services has been trusted for attestation
                     and visa support. With over a decade of experience
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                  <div className="icon">
                    <Image
                      src="/images/icon/icon15.png"
                      alt="image"
                      width={150}
                      height={145}
                    />
                  </div>
                  <h3>Our process is fast and secure.</h3>
                  <p>
                    we offer dependable and professional help with your documents,
                     ensuring everything meets international standards. 
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                  <div className="icon">
                    <Image
                      src="/images/icon/icon16.png"
                      alt="image"
                      width={150}
                      height={145}
                    />
                  </div>
                  <h3>we're with you every step of the way.</h3>
                  <p>
                     We aim to make the whole process quick, easy, and stress-free for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
