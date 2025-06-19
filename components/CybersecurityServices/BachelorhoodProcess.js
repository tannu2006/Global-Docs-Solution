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
                  src="/images/cybersecurity-services/what-we-work/bachelorhood-Img.jpg"
                  alt="image"
                  width={1030}
                  height={1030}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
                <span className="sub-title">Bachelorhood Attestation Process</span>
                <h2>We guide you through the following steps for bachelorhood certificate attestation</h2>

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
                    Certificate is notarized to confirm its authenticity.
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
                  <h3>State or local Authority Attestation</h3>
                  <p>
                  Verification by SDM or respective State Education/Human Resource Department.
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
                  <h3> Ministry of external Affairs (MEA) Attestation</h3>
                  <p>
                   Central government authentication for legal validity.
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
                  <h3> Embassy Attestation</h3>
                  <p>
                  The final verification is done by the destination country’s embassy or consulate.
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
                  <h3>  MOFA Attestation(Optional)</h3>
                  <p>
                  In some countries, an additional attestation is required by the local Ministry of
                  Foreign Affairs after embassy attestation.
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
