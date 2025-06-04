import React from "react";
import Link from "next/link";
import Image from "next/image";

const StartMA = () => {
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
                <span className="sub-title">Get Your Marriage Certificate Attested Seamlessly</span>
                <h3>
                Quick, secure, and dependable attestation for official use.
                </h3>
                <p>
                We provide complete <b>Marriage Certificate Attestation </b>services required for visa, 
                family sponsorship, or legal use. Our team ensures your documents go through every 
                verification step smoothly and on time.
                </p>

                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Start Your Attestation Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMA;
