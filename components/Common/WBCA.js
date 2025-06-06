import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurTeamMember = () => {
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
                        src="/images/team/mar1.jpg"
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
                        src="/images/team/mar22.jpg"
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
                <span className="sub-title">Bachelorhood Certificate Attestation</span>
                <h2>
                What is Bachelorhood Certificate Attestation?
                </h2>
                <p>
Bachelorhood Certificate Attestation is the official process of verifying that an individual is
 unmarried. This certificate is often needed for marriage registration, immigration, or legal
  use in another country. The attestation confirms that the document is genuine and issued
   by an authorized body, making it legally valid for submission to government and
    consular authorities.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamMember;
