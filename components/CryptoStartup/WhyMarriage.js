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
                <h2> Why is Marriage Certificate Attestation Important?</h2>

                <div className="invest-inner-box">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Immigration & Family Reunification</h3>
                  <p>
                   It validates your marital status for sponsorship or visa extensions.
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
                  <h3>Legal & Official Procedures</h3>
                  <p>
                    Verified evidence of your marital relationship-inheritance,
                     property ownership, or power of attorney.
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
                  <h3>Employment & Education</h3>
                  <p>
                    Require it for residency permits or employment benefits for spouses.
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
