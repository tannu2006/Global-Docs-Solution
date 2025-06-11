import React from "react";
import Link from "next/link";
import Image from "next/image";

const QATARAttestation = () => {
  return (
    <>
            <div className="case-studies-area bg-gradient-image pt-100 pb-70">
             <div className="services-area ptb-100">
                <div className="container">
                 
                
        
      

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
                  <Link href="/Uae-Embassy">UAE Embassy</Link>
                </h3>
                <p>UAE Embassy attestation is the official verification of foreign documents for legal use
                   in the UAE.</p>
                <Link href="/Uae-Embassy" className="default-btn">
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
                  <Link href="/Saudi-Embassy">Saudi Embassy</Link>
                </h3>
                <p>Saudi Embassy attestation is the process of authenticating foreign documents for legal 
                  use in Saudi Arabia.</p>
                <Link href="/Saudi-Embassy" className="default-btn">
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
                  <Link href="/Kuwait-Embassy">Kuwait Embassy </Link>
                </h3>
                <p>Kuwait Embassy attestation is the process of authenticating foreign documents for
                   legal use in Kuwait.
                </p>
                <Link href="/Kuwait-Embassy" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Read More
                </Link>
     </div>
    </div>

   </div>
       
       
        </div>
      </div>
      </div>
    </>
  );
};

export default QATARAttestation;
