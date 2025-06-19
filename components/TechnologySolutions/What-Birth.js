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
                  What is a Birth services <br />
                </h2>
                <p>
                  Birth certificate attestation is the process of verifying the authenticity 
                  of a birth certificate for use in a foreign country. It is a mandatory 
                  requirement for visa applications,
                  higher education, employment, migration, and legal procedures abroad.
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
