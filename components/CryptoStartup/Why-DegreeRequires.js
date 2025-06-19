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
                <h2> Why is Degree Attestation Required</h2>

                <div className="invest-inner-box">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Higher Education </h3>
                  <p>
                    Universities demand attested degrees before admission.
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
                  <h3>Employment Visa</h3>
                  <p>
                    Many companies require attested diplomas for work permits.
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
                  <h3> Immigration & Residency </h3>
                  <p>
                    Visa processing for some countries requires attested degrees.
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
                  <h3>Professional Licensing</h3>
                  <p>
                   Professions like doctors and engineers need attested degrees.
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
