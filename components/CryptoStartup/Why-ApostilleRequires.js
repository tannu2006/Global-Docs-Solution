import React from "react";
import Image from "next/image";

const ReasonsToInvestInCryptocurrency = () => {
  return (
    <>
      <div className="invest-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="invest-content">
                <h2> Why is Apostille Attestation Required</h2>

                <div className="invest-inner-box">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Employment Abroad</h3>
                  <p>
                    Required for work visa applications.
                  </p>
                </div>

                <div className="invest-inner-box ">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-2.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Higher Education</h3>
                  <p>
                   Needed for university admissions.
                  </p>
                </div>

                <div className="invest-inner-box">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-3.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Legal Matters</h3>
                  <p>
                    Used in property transactions, inheritance claims, and other legal 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="invest-image">
                <Image
                  src="/images/crypto-startup/invest/invest1.png"
                  alt="image"
                  width={662}
                  height={632}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReasonsToInvestInCryptocurrency;
