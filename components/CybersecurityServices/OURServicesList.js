import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="cyber-security-services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Services</span>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <Image
                        src="/images/ourservices/apostille.png"
                        alt="image"
                        width={214}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/Apostille-Services">Apostille services</Link>
                      </h3>
                      <p>
                       If you need to get your documents recognized internationally, we can 
                       help with apostille services for countries that 
                      </p>
                      <Link href="/Apostille-Services" className="services-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <Image
                        src="/images/ourservices/visaservices.png"
                        alt="image"
                        width={214}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/Visa-Services">Visa Services</Link>
                      </h3>
                      <p>
                        visa, we can assist with the paperwork to make the process easier and faster, whether it’s for travel, work, or study.
                      </p>
                      <Link href="/Visa-Services/" className="services-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <Image
                        src="/images/ourservices/attestation.png"
                        alt="image"
                        width={214}
                        height={240}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/Attestation">Attestation</Link>
                      </h3>
                      <p>
                      We offer quick document attestation for educational, personal, and business
                       purposes, making sure your papers are valid for use in other countries.
                       </p>
                      <Link href="/Attestation/" className="services-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <Image
                        src="/images/ourservices/emattestation.png"
                        alt="image"
                        width={213}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/Embassy-Attestation/">Embassy Attestation</Link>
                      </h3>
                      <p>
                       We take care of embassy attestation services smoothly, helping your 
                       documents meet the legal requirements of the specific foreign embassies.
                      </p>
                      <Link href="/BirthCertificate-Attestation/" className="services-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="view-all-services-btn">
                <Link href="/OURServices" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>View All
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
