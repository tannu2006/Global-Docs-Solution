import React from "react";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesCard3 = () => {
  return (
    <>
      <div className="case-studies-area bg-gradient-image pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Embassy Attestation</span>
            <h2>  What is Embassy Attestation?</h2>
            <p>
             We handle embassy attestation services efficiently, helping your documents 
             meet the legal requirements of specific foreign embassies
            </p>
          </div>

          <div className="shorting row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <Image
                  src="/images/case-studies/case-studies4.png"
                  alt="image"
                  width={78}
                  height={78}
                />
                <h3>
                  <Link href="/UAE-EmbassyAttestation">UAE Embassy Attestation</Link>
                </h3>
                <p>
                 UAE Embassy Attestation is the process of legalizing documents issued
                 in your home country so that they are recognized by UAE government authorities
                </p>
                <Link href="/UAE-EmbassyAttestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <Image
                  src="/images/case-studies/case-studies7.png"
                  alt="image"
                  width={78}
                  height={78}
                />
                <h3>
                  <Link href="/SAUDI-EmbassyAttestation">Saudi Embassy Attestation</Link>
                </h3>
                <p>
                  Saudi Embassy Attestation is the process of certifying the authenticity of your documents by
                   the Ministry of External Affairs (MEA) in your home country and then the Saudi Embassy or Consulate. 
                </p>
                <Link href="/SAUDI-EmbassyAttestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Read More
                </Link>
              </div>
            </div>


            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <Image
                  src="/images/case-studies/case-studies6.png"
                  alt="image"
                  width={78}
                  height={78}
                />
                <h3>
                  <Link href="QATAR-EmbassyAttestation">Qatar Embassy Attestation</Link>
                </h3>
                <p>
                  Qatar Embassy Attestation is a crucial process that verifies the authenticity 
                  of your documents so they are legally recognized in the State of Qatar.
                </p>
                <Link href="/QATAR-EmbassyAttestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Read More
                </Link>
              </div>
            </div>

          
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <Image
                  src="/images/case-studies/case-studies8.png"
                  alt="image"
                  width={78}
                  height={78}
                />
                <h3>
                  <Link href="/KUWAIT-EmbassyAttestation">Kuwait Embassy Attestation</Link>
                </h3>
                <p>
                  Kuwait Embassy Attestation is a vital procedure for verifying 
                  the authenticity of documents issued outside Kuwait, making them legally valid for use within the country.
                </p>
                <Link href="/KUWAIT-EmbassyAttestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesCard3;
