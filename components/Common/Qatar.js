import React from "react";
import Link from "next/link";
import Image from "next/image";

const Qatar = () => {
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
                <span className="sub-title">Fast & Reliable Qatar Visa Stamping Services</span>
                <h3>
                  Seamless Visa Stamping for Your Qatar Journey
                </h3>
                <p>
                  Get your Qatar visa stamped without any delays! We 
                  handle all the paperwork and formalities to ensure a smooth and efficient 
                  process, saving you time and effort.
                </p>
                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Start Your Stamping Process Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qatar;
