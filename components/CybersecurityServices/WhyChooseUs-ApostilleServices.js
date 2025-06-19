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
                  Why Choose Apostille Services
                </h2>
                <ul className="list">
                  <li>
                    <i className="ri-check-fill"></i><b>Expert Assistance  </b>Specialist 
                    agencies understand the latest MEA rules, document types 
                    and legal requirements.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i><b>Time-Saving</b> They optimize the process and reduce the delays that occur due to incorrect documentation.Secure Handling
                  </li>
                  <li>
                    <i className="ri-check-fill"></i><b>Doorstep Pick & Drop </b>Many agencies offer pickup and drop services for your convenience.
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
