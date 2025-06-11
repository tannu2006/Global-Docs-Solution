import React from "react";
import Link from "next/link";
import Image from "next/image";

const UAE = () => {
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
                <span className="sub-title">Get Your UAE Stamped Hassle-Free</span>
                <h3>
                  Reliable,Fast & Secure Visa Stamping Services
                </h3>
                <p>
                Ensure a smooth visa stamping process with our expert services. 
                We handle all the documentation and 
                formalities so you can focus on your journey
                </p>

                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Start Your Process Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UAE;
