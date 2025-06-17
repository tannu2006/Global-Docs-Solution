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
                  src="/images/cybersecurity-services/what-we-work/Apostille.jpg"
                  alt="image"
                  width={630}
                  height={630}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
              
                <h2>  Our Apostille  Attestation Process</h2>

                <div className="we-work-inner-box">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3> Local/State-Level Attestation</h3>
                  <p>
                    Documents are first verified by 
                    HRD, Home Department, or Chamber of Commerce.
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
                  <h3>MEA Apostille Attestation</h3>
                  <p>
                    The Ministry of External Affairs 
                    (MEA) issues the apostille stamp.
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
                  <h3>Submission to the Foreign Authority</h3>
                  <p>
                    Once apostilled, the document becomes legally valid 
                        in the destination country (member of the Hague Convention).
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
                  <h3>MOFA Attestation (For Gulf Countries)</h3>
                  <p>
                  Final verification in the destination country.
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
