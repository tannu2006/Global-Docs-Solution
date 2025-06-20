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
                  What is UAE Visa Stamping <br />
                </h2>
                <p>
                  UAE Visa  is the official process of maintaining stamps 
                  from UAE messages in your passport, ensuring that your 
                  visa has been approved and verified. This  mandatory for 
                  some types of visa employment and residential visas, and 
                  serves as an official approval to enter the UAE.
                </p>
                <Link href="/contact" className="default-btn style-two">
                    <span className="ri-arrow-right-s-line"></span>Start Your UAE Visa Stamping Now
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
