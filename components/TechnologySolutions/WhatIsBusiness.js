import React from 'react'
import PartnerSlider from './PartnerSlider'
import Image from "next/image";

const PartnerArea = () => {
  return (
   <>
      <div className="team-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="team-member-list">
                <div className="row justify-content-center">
                  <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/user/user3.jpg"
                        alt="team"
                        width={500}
                        height={500}
                      />
                     
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/blog/blog3.jpg"
                        alt="team"
                        width={500}
                        height={500}
                      />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="team-section-title">
                <span className="sub-title">Business Document Attestation</span>
                <h2>
                 What is Business Document Attestation?
                </h2>
                <p> Business Document Attestation is the official process of verifying and legalizing
                   commercial documents issued in one country for use in another.<br/> 
                   These documents must be authenticated by local authorities, the Ministry of External
                    Affairs (MEA), and the concerned foreign embassy or consulate.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartnerArea
