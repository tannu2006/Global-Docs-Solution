import React from "react";
import Image from "next/image";

const AboutContent = () => {
  return (
    <>
      <div className="about-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about.jpg"
                  alt="image"
                  width={600}
                  height={617}
                />

                
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">ABOUT US</span>
                <h2>We Are Your Trud Partner for Fast and Secure Legal Documentation</h2>
                <p>
                  Established in 2011, Global Docs Services has grown into a trusted name in document attestation, apostille, and visa services. With over 13 years of experience, we specialize in simplifying the complex process of legalizing documents for use worldwide. Our mission is to provide reliable, efficient, and transparent services to individuals and businesses seeking opportunities in the Gulf countries, Asia, USA, UK, and beyond.

                  Based in New Delhi with a strong presence in Mumbai, our dedicated team ensures every client receives personalized support. We handle everything from certificate attestation to visa stamping with precision, making your journey seamless and stress-free.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <Image
                          src="/images/icon/icon4.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Legal Experts</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <Image
                          src="/images/icon/icon5.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Quick & Easy Process</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <Image
                          src="/images/icon/icon6.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>PAN India Coverage</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <Image
                          src="/images/icon/icon7.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Secure & Confidential</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="awards-list">
           
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
