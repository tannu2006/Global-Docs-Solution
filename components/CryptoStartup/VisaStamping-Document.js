import React from "react";
import Image from "next/image";

const TokenDistribution = () => {
  return (
    <>
      <div className="token-distribution-area pb-70">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="token-distribution-card">
                <Image
                  src="/images/crypto-startup/.png"
                  alt="chart"
                  width={894}
                  height={894}
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="token-distribution-card">
                <div className="token-distribution-details">
                  <div className="header">
                    <h3> Documents Required for UAE Visa Stamping</h3>
                  </div>
                  <ul className="info-list">
                    <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                    Original Passport (valid for at least 6 months)<br/>
                    <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;                            
                    visa Approval Copy <br/>
                    <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                    Medical Clearance Certificate <br/>
                    <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;                 
                    Police Clearance Certificate<br/>
                    <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                    Recent Photographs
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenDistribution;
