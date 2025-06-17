import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="cyber-security-services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Attestation</span>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <Image
                        src="/images/attestation/atticon1.png"
                        alt="image"
                        width={272}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/MEA-Attestation">MAE Attestation</Link>
                      </h3>
                      <p>
                       MEA Attestation—this is an official stamp from India's Ministry of 
                       External Affairs that confirms your documents are valid for use abroad.
                      </p>
                      <Link href="/MEA-Attestation" className="services-btn">
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
                        src="/images/attestation/atticon2.png"
                        alt="image"
                        width={255}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="Apostille-Attestation">Apostile Attestation</Link>
                      </h3>
                      <p>
                        Apostille Attestation, which is used in countries that are part of the Hague 
                        Convention. It helps get your documents accepted legally faster...
                      </p>
                      <Link href="/Apostille-Attestion/" className="services-btn">
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
                        src="/images/attestation/atticon3.png"
                        alt="image"
                        width={258}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/Degree-Attestation">Degree Attestation</Link>
                      </h3>
                      <p>
                       Diploma certificates are the process of verifying the reliability of educational certificates 
                       for use abroad. Required for visa applications, university education, employmen...
                      </p>
                      <Link href="/Degree-Attestation/" className="services-btn">
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
                        src="/images/attestation/atticon4.png"
                        alt="image"
                        width={214}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/BirthCertificate-Attestation/">Birth Certificate Attestation</Link>
                      </h3>
                      <p>
                       Birth Certificate Attestation ensures your birth certificates are recognized internationally, which might 
                       be needed for via
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
                <Link href="/Attestation" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>View All
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="cyber-security-services-shape">
          <Image
            src="/images/cybersecurity-services/services/shape.png"
            alt="image"
            width={523}
            height={867}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
