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
                  What is a Apostille services <br />
                </h2>
                <p>
                  Apostille attestation is an official authentication process that 
                  certifies the validity of documents for international use in Hague 
                  Convention member countries. This ensures that documents issued in 
                  one country are legally recognized in another without further legalization.
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
