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
                width={200} 
                height={90} />
                 <Image 
                src="/images/blog/blog2.jpg" 
                alt="blog" 
                width={200} 
                height={90} />
              </div>
              <div className="col-lg-7 col-md-12">
                <h2>
                  What is a MEA services <br />
                </h2>
                <p>
                  MEA (Ministry of External Affairs) attestation is a mandatory 
                  process for verifying the authenticity of documents for 
                  international use. Whether for a work visa, higher education, 
                  migration, or business expansion, attested documents ensure 
                  acceptance by foreign authorities.
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
