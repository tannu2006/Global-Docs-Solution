import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
               <h2> Why Choose Our Services?
                </h2>
                

                <ul className="list">
                  <li>
                    <i className="ri-check-fill"></i> Efficient Service
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Expert Assistance
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Affordable price
                  </li>
                  <li>
                    <i className="ri-check-fill"></i>Process tracking
                  </li>
                  <li>
                    <i className="ri-check-fill"></i>100% Genuine Process
                  </li>
                  <li>
                    <i className="ri-check-fill"></i>Document pickup & delivery
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
                  src="/images/cybersecurity-services/choose/tracking.png"
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
    </>
  );
};

export default WhyChooseUs;
