import React from "react";
import Link from "next/link";
import Image from "next/image";

const StartBCA = () => {
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
                <span className="sub-title">Authenticate Your Bachelorhood Certificate with Ease</span>
                <h3>
                Smooth and reliable attestation for official and personal requirements.
                </h3>
                <p>
                We offer trusted <b>Bachelorhood Certificate Attestation</b> services to help you meet official
                 requirements for marriage applications, visa processes, or legal submissions. 
                 Get your documents verified through the proper channels, stress-free.
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

export default StartBCA;
