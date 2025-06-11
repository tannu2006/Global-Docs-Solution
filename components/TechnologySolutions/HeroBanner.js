import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div
                className="main-banner-content"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h1>Fast & Trusted Document Attestation Services </h1>
                <span className="sub-title"> We help individuals and professionals accross india get their documents attested and stamped for countries like Soudi Arabia, UAE, Qatar and Kuwait</span>

                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="main-banner-image">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <Image
                    src="/images/man1.jpg"
                    alt="image"
                    width={546}
                    height={578}
                  />
                </div>

               
              </div>
            </div>
          </div>
        </div>

        
          
        </div>
    
    </>
  );
};

export default HeroBanner;
