import React from "react";
import Image from "next/image";

const Process = () => {
  return (
    <>
      <div className="process-area">
        <div className="container">
          <div className="process-inner">
            <div className="row justify-content-center">
                <div className="section-title">
            <span className="sub-title">Document's We Attest</span>
           
          </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                  <div className="icon">
                    <i className="ri-graduation-cap-fill" style={{ fontSize: '50px' }}></i>
                  </div>
                  <h3>Educational Documents</h3>
                  <p>
                    Degree Certificates<br />
                    Diplomas<br />
                    Transcripts<br />
                    Mark sheets<br />
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                  <div className="icon">
                    <i className="ri-user-3-fill" style={{ fontSize: '50px' }}></i>
                  </div>
                  <h3>Personal Documents</h3>
                  <p>
                   Birth Certificate<br/>
                   Marriage Certificate<br/>
                   Bachelorhood/Single Status Certificate<br/>
                    Police clearance certificate (PCC)
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                  <div className="icon">
                     <i className="ri-briefcase-2-fill" style={{ fontSize: '50px' }}> </i>
                  </div>
                  <h3>Other Documents</h3>
                  <p>
                  Power of attorney <br/>
                  Company registration documents<br/>
                  MoA/AoA <br/>
                  Trade licenses<br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
