import React from "react";
import Image from "next/image";
import Link from "next/link";
const WhyChooseUs = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
               
                <h2>
                   Why Choose Our ApostilleAttestation Services
                </h2>
                <ul className="list">
                  <li>
                    <i className="ri-check-fill"></i><b>Fast Processing </b>Get your documents attested in the shortest time.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i><b>Hassle-Free Process </b> We handle all paperwork and submissions for you.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i><b>Doorstep Service </b>Pickup & delivery of documents for your convenience.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> <b>100% Authentic Attestation </b>Verified by MEA & respective embassies
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/cybersecurity-services/choose/door-step.png"
                  alt="image"
                  width={798}
                  height={510}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-us-shape">
          <Image
            src="/images/cybersecurity-services/choose/shape.png"
            alt="image"
            width={495}
            height={839}
          />
        </div>
      </div>
      <div className="center">
        <Link href="/contact" className="default-btn style-two">
          <span className="ri-arrow-right-s-line"></span>Start Your Attestation Now
        </Link>
      </div>
    </>
  );
};

export default WhyChooseUs;
