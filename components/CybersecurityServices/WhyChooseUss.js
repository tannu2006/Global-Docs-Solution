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
                <span className="sub-title">Why Choose Us</span>
                <h2>
                  You Can Choose Us By Looking At Our Different Work Skills
                </h2>
                <p>
                 Since 2011, Global Docs Services has been trusted for 
                 attestation and visa support. With over a decade of experience, 
                 we offer dependable and professional help with your documents, ensuring
                  everything meets international standards. We aim to make the whole process
                   quick, easy, and stress-free for you.
                </p>

                <ul className="list">
                  <li>
                    <i className="ri-check-fill"></i> With more than 12 years of experience.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i>  we serve clients all around the world.
                   
                  </li>
                  <li>
                    <i className="ri-check-fill"></i>Our process is fast and secure.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i>we're with you every step of the way.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> providing friendly and dedicated customer service to make sure you’re completely supported from start to finish.
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
                  src="/images/cybersecurity-services/choose/choose.png"
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
