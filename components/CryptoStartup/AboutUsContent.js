import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="about-area ptb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="cryptocurrency-about-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/crypto-startup/about.png"
                  alt="image"
                  width={798}
                  height={608}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="cryptocurrency-about-content"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span className="sub-title">About Us</span>
                <h2>
                You're here to help with attestation and visa services?
                </h2>
                <p>
                 Your Trusted Partner for Attestation and Document Services 
                 Since starting out in 2011, Global Docs Solution has been 
                 dedicated to providing reliable and knowledgeable support for 
                 all your documentation needs. With over a decade of experience,
                 we aim to make the process smooth and clear for each customer, no matter what. 
                 We’re proud to offer quick, dependable help for personal and business do
                </p>
                <ul className="about-list">
                  <li>
                    <i className="ri-check-fill"></i> making the whole process easy and stress-free.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> With over 12 years of experience, we know how to get
                     things done quickly, safely, and reliably—no matter where you are in the world.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
