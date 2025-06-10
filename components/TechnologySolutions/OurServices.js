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
                    src="/images/icon/icon30.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/marriage-attestation">Marriage Attestation</Link>
                  </h3>
                </div>
                <p>
                Marriage certificate attestation verifies the authenticity of a marriage certificate 
                for use in foreign countries.
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
                <Link href="/marriage-attestation" className="default-btn">
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
                    src="/images/icon/icon32.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/bachelorhood-attestation">Bachelorhood  Attestation</Link>
                  </h3>
                </div>
                <p>
                Bachelorhood certificate attestation authenticates a bachelor's degree
                for use in foreign countries.
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
                <Link href="/bachelorhood-attestation" className="default-btn">
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
                    src="/images/icon/icon29.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/business-attestation">Business  Attestation</Link>
                  </h3>
                </div>
                <p>
                Business document attestation authenticates business documents for official use in
                foreign countries.
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
                <Link href="/business-attestation" className="default-btn">
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
                    src="/images/icon/icon31.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/certificate-attestation">Certificates Attestation</Link>
                  </h3>
                </div>
                <p>
                Certificate attestation authenticates documents for use abroad, ensuring their legal 
                acceptance by authorities.
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
                <Link href="/certificate-attestation" className="default-btn">
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
