import React from "react";
import Link from "next/link";
import Image from "next/image";

const GetStarted = () => {
  return (
    <>
      <div className="get-started-area bg-gradient-image pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="get-started-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
                >
                <Image
                  src="/images/man.png"
                  alt="image"
                  width={423}
                  height={590}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="get-started-content">
                <span className="sub-title">Visa Services for All Your Travel Needs</span>
                <h3>
                  Fast & Reliable Visa Assistance for Work, Study, & Travel
                </h3>
                <p>
                  Need a visa? We provide expert guidance and end-to-end 
                  support for tourist, work, business, and student visas. Get your 
                  visa processed smoothly with our trusted services.
                </p>
                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Apply for Your Visa Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
