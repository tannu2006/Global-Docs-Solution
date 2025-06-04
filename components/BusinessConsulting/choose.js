import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/about3.png"
                  alt="image"
                  width={400}
                  height={300}
                />

                <div className="shape5">
                  <Image
                    src="/images/shape/shape5.png"
                    alt="image"
                    width={90}
                    height={74}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">Why Choose Our Services?</span>

                <ul className="features-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/icon4.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Efficient Service</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/expert.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Expert Assistance</span>
                    </div>
                  </li>
                 
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/price.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Affordable price</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/track.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Process tracking</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/real.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>100% Genuine Process</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/truck.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Document pickup & delivery</span>
                    </div>
                  </li>
                </ul>

               
              </div>
            </div>
          </div>
        </div>
        <div className="shape6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={106}
            height={113}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
