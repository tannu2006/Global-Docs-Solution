import React from "react";
import Image from "next/image";
import Link from "next/link";
const MEA = () => {
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
                  src="/images/cybersecurity-services/what-we-work/birth.jpg"
                  alt="image"
                  width={630}
                  height={630}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
              
                <h2>  Our Birth Certificate Attestation Process</h2>

                <div className="we-work-inner-box">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Notary Attestation</h3>
                  <p>
                    Initial verification by a Notary Public.
                  </p>
                </div>

                <div className="we-work-inner-box ">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-2.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>MEA Attestation</h3>
                  <p>
                    Ministry of External Affairs (MEA) attestation for official verification.
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
                  <h3> State Home Department Authentication</h3>
                  <p>
                    Approval from the respective state authority.
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
                  <h3> MOFA Attestation (For Gulf Countries)</h3>
                  <p>
                    Final attestation in the destination country.
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
                  <h3>Embassy Attestation (If Required)</h3>
                  <p>
                    Required for non-Hague Convention countries.
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
       <div className="center">
          <Link href="/contact" className="default-btn style-two">
            <span className="ri-arrow-right-s-line"></span>Start Your Attestation Now
          </Link>
        </div>
    </>
  );
};

export default MEA;
