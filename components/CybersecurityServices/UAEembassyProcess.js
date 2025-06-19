import React from "react";
import Image from "next/image";

const WhatWeWork = () => {
  return (
    <>
      <div className="what-we-work-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="what-we-work-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/cybersecurity-services/what-we-work/marAtt.jpg"
                  alt="image"
                  width={630}
                  height={630}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
                <span className="sub-title">UAE Embassy Attestation Process</span>
                <h2>We guide you through the following steps for UAE Embassy attestation.</h2>

                
                <div className="we-work-inner-box">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3> Notary Attestation</h3>
                  <p>
                   Performed by a public notary in the country of origin.
                  </p>
                </div>

                <div className="we-work-inner-box with-some-left">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-2.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3> State Home Department / HRD Attestation</h3>
                  <p>
                Based on the type of document (personal or educational).
                  </p>
                </div>

                <div className="we-work-inner-box">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-3.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3> Ministry of External Affairs(MEA) Attestation</h3>
                  <p>
                 The central government verifies and authenticates the document.
                  </p>
                </div>

                 <div className="we-work-inner-box with-some-left">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-2.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3> UAE Embassy Attestation</h3>
                  <p>
                   The UAE Embassy/Consulate in the home country attests the document.
                  </p>
                </div>

                <div className="we-work-inner-box">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-3.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>  MOFA Attestation (UAE)</h3>
                  <p>
                After reaching UAE, the document must be submitted to the Ministry of Foreign 
                Affairs for final validation.

                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="what-we-work-shape">
          <Image
            src="/images/cybersecurity-services/what-we-work/shape.png"
            alt="image"
            width={460}
            height={805}
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeWork;
