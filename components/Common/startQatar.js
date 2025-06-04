import React from "react";
import Link from "next/link";
import Image from "next/image";

const StartQatar= () => {
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
                <span className="sub-title">Qatar Embassy Attestation Services</span>
                <h3>
                Quick & Reliable Attestation for Qatar-Based Requirements
                </h3>
                <p>
                We offer professional and reliable Qatar Embassy attestation services for educational,
                 personal, and commercial documents. Get your papers verified quickly and securely —
                 with complete support at every step.
                </p>

                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Start Your Qatar Attestation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartQatar;
