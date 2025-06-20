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
                <h2>Why is Business Document Attestation Important?</h2>

                <div className="invest-inner-box">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Register a company abroad</h3>
                  <p>
                 Setting up a branch, subsidiary, or office overseas.
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
                  <h3> Open an overseas bank account</h3>
                  <p>
                  Banks may demand for compliance, KYC, and Anti-Money Laundering procedures.
                  </p>
                </div>

                <div className="invest-inner-box">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Apply for business visas or investor permits</h3>
                  <p>
                   Verify your business background.
                  </p>
                </div>

                <div className="invest-inner-box with-some-left">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-2.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Establish trade relationships or export/import</h3>
                  <p>
                     To establish trust and ensure smooth legal processing.
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
                  <h3>Fulfill legal compliance for international partnerships</h3>
                  <p>
                   Used as evidence in court cases (e.g.,fraud cases).
                  </p>
                </div>

              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="invest-image">
                <Image
                  src="/images/crypto-startup/invest/Marri.png"
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
