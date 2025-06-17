import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="features-style-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="image">
                  <Image
                    src="/images/cybersecurity-services/features/educaton.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
                <h3>Educational Documents </h3>
                    <i className="ri-checkbox-circle-line"></i> Degree
                    <br/>
                   <i className="ri-checkbox-circle-line"></i>
                    Diploma
                    <br/>
                   <i className="ri-checkbox-circle-line"></i>
                    Mark sheets
                    <br/>
                  <i className="ri-checkbox-circle-line"></i>
                    Transfer certificates
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="image">
                  <Image
                    src="/images/cybersecurity-services/features/personal1.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
                 <h3>
                  Personal Documents 
                </h3>  
                 <i className="ri-checkbox-circle-line"></i>
                    Birth certificate
                    <br/>
                  <i className="ri-checkbox-circle-line"></i>
                    Marriage certificate,
                    <br/>
                  <i className="ri-checkbox-circle-line"></i>
                    Police clearance certificate (PCC)
                    <br/>
                  <i className="ri-checkbox-circle-line"></i>
                    Medical certificates
                  
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="image">
                  <Image
                    src="/images/cybersecurity-services/features/commercial.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
                <h3>
                  Commercial Documents
                </h3>
                 <i className="ri-checkbox-circle-line"></i>
                    Power of attorney
                    <br/>
                  <i className="ri-checkbox-circle-line"></i>
                    Company registration
                    <br/>
                  <i className="ri-checkbox-circle-line"></i>
                    Trade licenses
                    <br/>
                 <i className="ri-checkbox-circle-line"></i>
                    Memorandum & Articles of Association 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
