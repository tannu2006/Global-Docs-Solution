import React from "react";
import Link from "next/link";
import Image from "next/image";

const Kuwait = () => {
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
                <span className="sub-title">Quick & Hassle-Free Kuwait Visa Stamping</span>
                <h3>
                  Reliable & Efficient Visa Stamping Services for Kuwait
                </h3>
                <p>
                  Ensure a smooth Kuwait visa stamping process with our 
                  expert services. We take care of all documentation and formalities, 
                  making your journey stress-free and convenient.
                </p>
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

export default Kuwait;
