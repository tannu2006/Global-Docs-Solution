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
                src="/images/blog/ApostilleServices.jpg" 
                alt="blog" 
                width={400} 
                height={190} />
                 
              </div>
              <div className="col-lg-7 col-md-12">
                <h2>
                  What is a Apostille services <br />
                </h2>
                <p>
                  In today's world, it is common to travel, employment, 
                  marriage, or overseas business. The document must be 
                  authenticated for it to become legally effective in other 
                  countries. Apostil Services plays an important role here.
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
