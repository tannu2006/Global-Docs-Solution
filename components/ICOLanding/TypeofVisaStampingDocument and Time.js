import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <h2>
        <div className="center">
          Additional Documents Based on Visa Type
        </div>
      </h2>
      <div className="features-style-area pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card ">
                <h3>Resident/Family Visa</h3>
                <p>
                  <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                  Marriage Certificate (attested by MEA & UAE Embassy)<br/>
                  <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                  Birth Certificate (for children) 
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card ">
                <h3>Employment Visa</h3>
                <p>
                  <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                  Sponsor's UAE<br/>
                  <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                  Work Permit Copy
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card ">
                <h3>Business Visa</h3>
                <p>
                  <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                  Invitation Letter from UAE Business Firm <br/>
                 <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                 Chamber of Commerce Approval
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card ">
                <h3>Student Visa</h3>
                <p>
                  <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                  Admission Letter from UAE University<br/>
                  <i className="ri-checkbox-circle-fill"></i>&nbsp;&nbsp;
                  Educational Certificates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-9 col-sm-6 col-md-6"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <div className="single-features-card ">
          <h3>Processing Time</h3>
          <p>
            <b>Processing Time</b> Usually takes 7-15 business days, depending on the visa type.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
