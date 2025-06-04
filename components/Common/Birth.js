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
                <span className="sub-title">Quick & Reliable Birth Certificate Attestation</span>
                <h3>
                Ensure Legal Recognition of Your Birth Certificate
                </h3>
                <p>
                Get your birth certificate attested hassle-free for visa, 
                immigration, and official purposes. We provide expert assistance for
                 MEA, embassy, and notary attestation.
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

export default GetStarted;
