import React from "react";
import Link from "next/link";

const PricingTable = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70">
        <div className="container" >
          <div className="section-title">
            <span className="sub-title">Document's Required for Embassy Attestation</span>
           
          </div>

          <div className="row justify-content-center" >
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Educational Documents</h3>
                  <p>These are required when applying for jobs, higher education, or professional
                  licensing in the UAE.</p>
                </div>


                <div className="features-list">
                
                  <ul>
                    <li>
                    <i className="ri-arrow-right-circle-fill"></i> Original Degree/Diploma Certificate
                    </li>
                    <li>
                    <i className="ri-arrow-right-circle-fill"></i> Final Year Mark Sheets
                    </li>
                    <li>
                    <i className="ri-arrow-right-circle-fill"></i> Bonafide Certificate 
                    </li>
                    <li>
                    <i className="ri-arrow-right-circle-fill"></i> University Verification Letter
                    </li>
                    <li>
                    <i className="ri-arrow-right-circle-fill"></i> Passport Copy of the Certificate Holder
                    </li>
                    <li>
                    <i className="ri-arrow-right-circle-fill"></i> Authorization Letter (if submitting through a third party)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Personal Documents</h3>
                  <p> These are needed for family visa applications, marriage,
                  birth registration, or legal matters in the UAE.</p>
                </div>

              

                <div className="features-list">
                 
                  <ul>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i>  Original Marriage Certificate 
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Original Birth Certificate
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Original  Bachelorhood Certificate
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Police Clearance Certificate
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Recent Passport-size Photos
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Authorization Letter(if submitted by a representative)
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>

           

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Commercial Documents</h3>
                  <p> Required for setting up a business, opening a branch, or legalizing company-related paperwork.</p>
                </div>

      

                <div className="features-list">
                  
                  <ul>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Power of Attorney
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Authorized Signatory
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> MoA/AoA
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Company Registration/Trade License Copy
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Company Seal on Documents
                    </li>
                    <li>
                      <i className="ri-arrow-right-circle-fill"></i> Board Resolution or Authority Letter (if needed)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <i className="ri-alert-fill">Important: Requirements may vary depending on the type of
   document, issuing state, and latest Embassy policies. Our experts will help you with the
    updated checklist and document preparation.</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTable;
