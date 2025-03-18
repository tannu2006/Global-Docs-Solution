import React from "react";
import Image from "next/image";

const InvestorsPartners = () => {
  return (
    <>
      <div className="industry-partner-area">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Investors</h2>
          </div>

          <div className="industry-partner-inner-box-wrap pt-100 pb-70">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-2 col-6 col-sm-3 col-md-3">
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-13.png"
                    alt="image"
                    width={90}
                    height={50}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-6 col-sm-3 col-md-3">
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-14.png"
                    alt="image"
                    width={59}
                    height={100}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-6 col-sm-3 col-md-3">
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-15.png"
                    alt="image"
                    width={91}
                    height={42}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-6 col-sm-3 col-md-3">
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-16.png"
                    alt="image"
                    width={95}
                    height={100}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-6 col-sm-3 col-md-3">
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-17.png"
                    alt="image"
                    width={90}
                    height={70}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-6 col-sm-3 col-md-3">
                <div className="partner-card">
                  <Image
                    src="/images/cybersecurity-services/partner/partner-18.png"
                    alt="image"
                    width={90}
                    height={82}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorsPartners;
