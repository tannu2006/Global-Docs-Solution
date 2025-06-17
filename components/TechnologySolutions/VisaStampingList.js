import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Visa Stamping</span>
            <h2>We Offer Fastest And Safest Visa Stamping</h2>
            <p>
             
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
                    <Link href="/UAE-VisaStamping">UAE Visa Stamping</Link>
                  </h3>
                </div>
                <p>
                UAE Visa is the official process of maintaining stamps from UAE messages in your passport, ensuring that your
                visa has been approved and verified...
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i>mployment visa
                    </span>
                  </li>
                  <li>

                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Resident visa
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Business visa
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Student visa
                      
                    </span>
                  </li>
                </ul>
                <Link href="/UAE-VisaStamping" className="default-btn">
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
                    <Link href="/QATAR-VisaStamping">Qatar Visa Stamping</Link>
                  </h3>
                </div>
                <p>
                Qatar-VISA stamping is a mandatory process of checking a person's approval by Qatar message before 
                entering the country...
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> App Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Website Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Product Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> UX Design
                    </span>
                  </li>
                </ul>
                <Link href="/QATAR-VisStamping" className="default-btn">
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
                    <Link href="/SAUDI-VisaStamping">Saudi Visa Stamping</Link>
                  </h3>
                </div>
                <p>
                Saudi Arabia Visa Stamps are an essential process that ensures that they are officially 
                approved by the Saudi message before travelling to the country...
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Photography
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Animations
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Copywriting
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Social Content
                    </span>
                  </li>
                </ul>
                <Link href="/SAUDI-VisaStamping" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>
                
            <div className="col-lg-12 col-md-12">
              <div className="view-all-services-btn">
                <Link href="/Attestation" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>View All
                  Visa Stamping
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
