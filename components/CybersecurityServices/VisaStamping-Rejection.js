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
                <h2>Common Reasons for Visa Stamping Rejection</h2>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-close-line1"></i>&nbsp;&nbsp; Incomplete or incorrect documentation<br/>
                      </li>
                      <li>
                        <i className="ri-close-line1"></i>&nbsp;&nbsp;Medical test failure<br/>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-close-line1"></i>&nbsp;&nbsp;Criminal record issues<br/>
                      </li>
                      <li>
                        <i className="ri-close-line1"></i>&nbsp;&nbsp;Mismatch in sponsor details<br/>                                      
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
