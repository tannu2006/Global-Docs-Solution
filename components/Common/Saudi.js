import React from "react";
import Link from "next/link";
import Image from "next/image";

const Saudi = () => {
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
                <span className="sub-title">Get Your Saudi Visa Stamped Quickly & Securely</span>
                <h3>
                Hassle-Free Saudi Visa Stamping, Anytime
                </h3>
                <p>
                Make your Saudi visa stamping process smooth and stress-free 
                with our expert assistance. We ensure timely processing and accurate 
                documentation for a hassle-free experience.
                </p>

                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Apply for Stamping Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Saudi;
