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
                <span className="sub-title">Marriage Attestation Process</span>
                <h2>We guide you through the following steps for Marriage attestation</h2>

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
                    Verifying the authenticity of the certificate
                     at the local notary office.
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
                   Authentication at the state or regional government level.
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
                    Further verification by the MEA to confirm the document’s
                     authenticity for international use.
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
                  <h3> Embassy or Consulate Attestation</h3>
                  <p>
                   Final authentication by the embassy or consulate
                    of the country where the certificate will be used.
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
