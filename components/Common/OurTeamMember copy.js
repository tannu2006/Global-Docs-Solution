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
                        src="/images/team/team12.jpg"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Ben Stokes</h3>
                          <span>Marketing Lead</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/team/team13.jpg"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Sarah Taylor</h3>
                          <span>Art Director</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/team/team14.jpg"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Ellyse Perry</h3>
                          <span>Designer</span>
                        </div>
                      </div>
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
                        src="/images/team/team15.jpg"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Steven Smith</h3>
                          <span>Development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="team-section-title">
                <span className="sub-title"> <h4>Common Reasons for Visa Rejection </h4> </span>
               
                 <i className="ri-close-line1"></i>&nbsp;&nbsp;Incomplete or incorrect documentation<br/>
                 <i className="ri-close-line1"></i>&nbsp;&nbsp;Insufficient financial proof <br/>
                 <i className="ri-close-line1"></i>&nbsp;&nbsp;Failure in medical examination <br/>
                 <i className="ri-close-line1"></i>&nbsp;&nbsp;Errors in the application form
                 <br/>
                 <i className="ri-close-line1"></i>&nbsp;&nbsp;Lack of travel history or strong home 
                 country ties<br/>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamMember;
