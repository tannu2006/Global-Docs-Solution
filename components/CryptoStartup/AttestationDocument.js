import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="features-style-area pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card text-start">
                <div className="image">
                  <Image
                    src="/images/crypto-startup/features/edu.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
                <h3>Educational Documents</h3>
               
                 <div className="features-list">
                  <ul>
                    
                      <i className="ri-checkbox-circle-line"></i>  Degree Certificate
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i> Diploma Certificate
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i> Transfer Certificate (TC)
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i> Nursing,
                       Engineering, Medical Certificates
                   
                    
              
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card text-start">
                <div className="image">
                  <Image
                    src="/images/crypto-startup/features/personal.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
                <h3>Personal Documents</h3>
                 <div className="features-list">
                  <ul>
                    
                      <i className="ri-checkbox-circle-line"></i> Birth Certificate
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i> Marriage, Divorce Certificate
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i>Police Clearance Certificate (PCC)
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i> Bachelorhood Certificate
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i> Affidavits and Declarations
                   
                    
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-card text-start">
                <div className="image">
                  <Image
                    src="/images/crypto-startup/features/bussiness.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
                <h3>Commercial Documents</h3>
                 <div className="features-list">
                  <ul>
                    
                      <i className="ri-checkbox-circle-line"></i> Power of Attorney
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i> Business Registration Certificate
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i>Memorandum & Articles of 
                      Association (MOA/AOA)
                    <br/>
                    
                      <i className="ri-checkbox-circle-line"></i>Trade Licenses
                   
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
