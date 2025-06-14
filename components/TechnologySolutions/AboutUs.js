import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="about-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/about.jpg"
                  alt="image"
                  width={600}
                  height={617}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">ABOUT US</span>
                <h2>We Are Award Winning Digital Marketing Company</h2>
                <p>
                  Your Trusted Partner in Documentation & Attestation Services 
                  Founded in 2011, Global Docs Solution has been dedicated to providing 
                  professional and reliable documentation and attestation services. With over 
                  a decade of experience, we ensure a smooth, transparent process tailored to each client’s 
                  needs.We proudly serve clients across UAE, Qatar, Kuwait, and Saudi Arabia, offering fast and 
                  dependable support for personal and commercial documentation.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <Image
                          src="/images/icon/icon4.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span></span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <Image
                          src="/images/icon/icon5.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Fast & Secure Process</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <Image
                          src="/images/icon/icon6.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Transparent Communication</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <Image
                          src="/images/icon/icon7.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Expert Assistance at Every Step</span>
                    </div>
                  </li>
                </ul>

                <Link href="/about-us" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
