import React from "react";
import Link from "next/link";
import Image from "next/image";

const StartBDA = () => {
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
                <span className="sub-title">Get Your Business Documents Legally Attested</span>
                <h3>
                Essential for company setup, trade, or official use.
                </h3>
                <p>
                We provide professional <b>Business Documents Attestation </b>services for business-related
                 documents such as incorporation certificates, trade licenses, MOAs, and more.
                  Ensure your papers are verified through the right authorities for smooth and
                   compliant business operations.
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

export default StartBDA;
