import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"> ATTESTATION SERVICES</span>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services1.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon8.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/MEA-Attestation">MEA Attestation</Link>
                  </h3>
                </div>
                <p>
                MEA attestation is the process of verifying documents 
                by the Ministry of External Affairs for international use.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Govt. Stamp
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> All Doc Types
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i>  Before Embassy
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Global Use
                      Form
                    </span>
                  </li>
                </ul>
                <Link href="/MEA-Attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services2.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon9.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/Apostille-Attestation">Apostille Attestation</Link>
                  </h3>
                </div>
                <p>
                Apostille attestation certifies documents for international 
                use under the Hague Convention.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i>  Hague Valid
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i>  No Embassy
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i>  Fast Process
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i>  100+ Nations
                    </span>
                  </li>
                </ul>
                <Link href="/Apostille-Attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services3.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon10.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/Degree-Attestation">Degree Attestation</Link>
                  </h3>
                </div>
                <p>
                Degree attestation verifies the authenticity of an educational degree for international use.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> University Check
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> HRD + MEA
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i>  For Visa/Jobs
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Embassy Ready
                    </span>
                  </li>
                </ul>
                <Link href="/Degree-Attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services4.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon11.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/Birth-Attestation">Birth Attestation</Link>
                  </h3>
                </div>
                <p>
                Birth certificate attestation confirms its authenticity for legal, educational, and immigration purposes abroad.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Notary
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> State Verify
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> MEA Proof
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Visa Use
                      Strategy
                    </span>
                  </li>
                </ul>
                <Link href="/Birth-Attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
