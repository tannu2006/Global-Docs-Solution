import React from "react";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesCard = () => {
  return (
    <>
      <div className="case-studies-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR CASE STUDIES</span>
            <h2>We Get you Higher Revenues, Not just Higher Ranks</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="case-studies-card-box">
            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <div className="logo">
                      <Image
                        src="/images/case-studies/elan.png"
                        alt="image"
                        width={91}
                        height={83}
                      />
                    </div>
                    <h3>
                      <Link href="/case-studies/details">eLan Education</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        WordPress
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        Education
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a href="#" target="_blank">
                          www.elan.com
                        </a>
                      </li>
                    </ul>
                    <Link href="/case-studies/details" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>View More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <Image
                      src="/images/case-studies/case-studies1.png"
                      alt="image"
                      width={860}
                      height={703}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <div className="logo">
                      <Image
                        src="/images/case-studies/startp.png"
                        alt="image"
                        width={91}
                        height={83}
                      />
                    </div>
                    <h3>
                      <Link href="/case-studies/details">StartP Startup</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        React.js
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        Startup
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a href="#" target="_blank">
                          www.startp.com
                        </a>
                      </li>
                    </ul>
                    <Link href="/case-studies/details" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>View More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <Image
                      src="/images/case-studies/case-studies2.png"
                      alt="image"
                      width={860}
                      height={703}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <div className="logo">
                      <Image
                        src="/images/case-studies/edmo.png"
                        alt="image"
                        width={91}
                        height={83}
                      />
                    </div>
                    <h3>
                      <Link href="/case-studies/details">Edmo Marketing</Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        Moodle
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        Marketing
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a href="#" target="_blank">
                          www.edmo.com
                        </a>
                      </li>
                    </ul>
                    <Link href="/case-studies/details" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>View More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <Image
                      src="/images/case-studies/case-studies3.png"
                      alt="image"
                      width={860}
                      height={703}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesCard;
