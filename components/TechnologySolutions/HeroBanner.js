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
               <br/>
                <h2>Let&apos;s Make Wave Amazing Together</h2>

                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Get Started Now
                </Link>
              </div>
            </div>

           </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
