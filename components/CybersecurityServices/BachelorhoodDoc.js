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
                  src="/images/cybersecurity-services/basicdoc.png"
                  alt="image"
                  width={710}
                  height={560}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-safety-content">
                
                <h2>Document's Required</h2>
               

                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i>Original Bachelorhood certificate
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>Passport copy
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>Visa or Immigration form
                        </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Photocopy of Bachelorhood certificate
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Identification proof
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Power of attorney(if applicable)
                      </li>
                       <li>
                        <i className="ri-checkbox-circle-line"></i>Proof of residence
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
