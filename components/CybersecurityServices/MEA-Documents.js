import React from "react";
import Image from "next/image";

const CyberSafety = () => {
  return (
    <>
      <div className="cyber-safety-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="cyber-safety-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/cybersecurity-services/document.png"
                  alt="image"
                  width={710}
                  height={560}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-safety-content">
                <h2>Documents Required</h2>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i>Original document (educational, personal, or commercial)<br/>
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>Copy of passport (front & back)
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>   Copy of Aadhaar card (for identity verification)
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Application form (as per authority requirement)
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>   Copy of Visa 
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>  National ID Proof (Aadhaar, PAN, etc.).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CyberSafety;
