import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const PartnerArea = () => {
  return (
    <>
      <div className="partner-area pt-100">
        <div className="container">
          <div className="section-title style-two">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <Image 
                src="/images/blog/blog1.jpg" 
                alt="blog" 
                width={400} 
                height={190} />
                 
              </div>
              <div className="col-lg-7 col-md-12">
                <h2>
                  What is a Degree services <br />
                </h2>
                <p>
                  Diploma certificates are the process of verifying the reliability 
                  of educational certificates for use abroad. Required for visa 
                  applications, university education, employment and professional 
                  licensing. The certificate is issued by the authorized institution 
                  and confirms that the diploma is legally valid.
                </p>
                <Link href="/contact" className="default-btn style-two">
                    <span className="ri-arrow-right-s-line"></span>Start Your Attestation Now
                </Link>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default PartnerArea
