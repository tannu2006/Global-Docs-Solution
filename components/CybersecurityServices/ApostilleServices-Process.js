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
                  src="/images/cybersecurity-services/what-we-work/Apostille services.png"
                  alt="image"
                  width={630}
                  height={630}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
                <h2> Apostille Process in India </h2>
                <div className="we-work-inner-box">
                  <div className="image">
                    <Image
                      src="/images/cybersecurity-services/what-we-work/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3> MEA Apostille </h3>
                  <p>
                    As soon as the preprocessing is complete (if necessary), 
                    the MEA document will be sent for aposteal. MEA puts 
                    unique operation-safe apostil stickers in your documents
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
                  <h3>Document </h3>
                  <p>
                     According to Apostille, the document can be returned 
                     via Kurier or recorded directly or via the Apostille agency.
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
                  <h3> Attestation (If Required)</h3>
                  <p>
                    Some documents need to be attested by local authorities like:
                    <br/>
                    	Notary Public
                    <br/>
                      SDM (Sub Divisional Magistrate)
                    <br/>
                      State Home Department
	                  <br/>
                    HRD (for educational documents)
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
