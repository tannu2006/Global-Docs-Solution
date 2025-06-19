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
                <span className="sub-title">Business Document Attestation Process</span>
                <h2>We guide you through the following steps for business document attestation</h2>

                <div className="we-work-inner-box with-some-left">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-2.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3> Chamber of Commerce Attestation</h3>
                  <p>
                  Initial verification from the issuing body or local business authority.
                  </p>
                </div>
                
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
                   Legal authentication by a certified notary public.
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
                  <h3>State Authority Attestation</h3>
                  <p>
                  For verification through respective state departments (if applicable).
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
                  <h3> MEA Attestation</h3>
                  <p>
                   MEA authenticates the document for foreign use.
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
                  Final verification by the target country’s embassy (UAE, Saudi, Qatar, Kuwait, etc.)
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
                  <h3> (Destination country) MOFA Attestation(Optional)</h3>
                  <p>
                  In some cases, attestation is required by the Ministry of Foreign Affairs
                   after arrival in the destination country.
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
