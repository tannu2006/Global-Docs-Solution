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
                  src="/images/cybersecurity-services/what-we-work/Degree.jpg"
                  alt="image"
                  width={630}
                  height={630}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
              
                <h2>UAE Visa Stamping Process in India</h2>

                <div className="we-work-inner-box">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Medical Checkup</h3>
                  <p>
                    Employment and Resident visa applicants must undergo 
                    medical tests at a GAMCA-approved medical center.
                    <br/>
                    A Medical Fitness Certificate is mandatory before visa stamping.
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
                  <h3>Document Attestation</h3>
                  <p>
                     <strong>Educational Certificates</strong>Verified by the State HRD Department and attested by MEA.
                     <br/>
                     <strong>Personal Documents </strong>Attested by MEA & UAE Embassy.
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
                  <h3>Visa Stamping at UAE Embassy</h3>
                  <p>
                     Submit all attested documents along with the visa stamping fee.
                     <br/>
                     If all documents are in order the visa is stamped onto the passport.
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
