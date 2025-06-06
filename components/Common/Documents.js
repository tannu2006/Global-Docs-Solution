import React from "react";
import Image from "next/image";

const ClientsFeedback = () => {
  return (
    <>
      <div className="feedback-area bg-main-color">
        <div className="container">
          <div className="section-title">
            <h2><u>Types of Documents We Attest</u></h2>
           
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-feedback-box with-boxshadow">
                
                
                <h5>Educational Certificates</h5>
                <i className="ri-arrow-right-line"> Degree Certificate</i><br/>
        <i className="ri-arrow-right-line">Diploma Certificate</i><br/>
       <i className="ri-arrow-right-line">Transfer Certificate (TC)</i><br/>
        <i className="ri-arrow-right-line">Nursing, Engineering, Medical Certificates</i><br/><br/>
               
                <div className="client-info">
                 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feedback-box with-boxshadow">
                <div className="rating">
                  
                </div>
                
                <h5>Personal Certificates</h5>
       <i className="ri-arrow-right-line"> Birth Certificate</i > <br/>
        <i className="ri-arrow-right-line">Marriage, Divorce Certificate</i ><br/>
        <i className="ri-arrow-right-line">Police Clearance Certificate (PCC)</i ><br/>
        <i className="ri-arrow-right-line">Bachelorhood/Single Status Certificate</i ><br/>
        <i className="ri-arrow-right-line">Affidavits and Declarations </i >
                
                <div className="client-info">
                 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feedback-box with-boxshadow">
               
               
                <h5>Commercial Documents</h5>
        <i className="ri-arrow-right-line">Power of Attorney</i><br/>
        <i className="ri-arrow-right-line">Business Registration,Experience</i><br/>
        <i className="ri-arrow-right-line">Memorandum & Articles of Association (MOA/AOA)</i><br/> 
        <i className="ri-arrow-right-line">Trade Licenses</i><br/>  
               
                <div className="client-info">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsFeedback;
