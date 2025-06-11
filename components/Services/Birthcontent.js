import React from "react";
import BirthSidebar from "./BirthSidebar";
import Image from "next/image";
const Birthcontent = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div >
              <div className="service-details-content">
              
                <Image
                  src="/images/services/services2.jpg"
                  alt="Services Images"
                  width={260}
                  height={160}
                  
                />
               <div className="margin"> <h2>
                Birth Attestation</h2></div>
                <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">      
                <h2>what is start certificate Attestation</h2>
                </div>
                <p>
                Birth certificate attestation is the process of verifying the authenticity 
                of a birth certificate for use in a foreign country. It is a mandatory 
                requirement for visa applications,
                 higher education, employment, migration, and legal procedures abroad.
                </p>    
                
                <h4>
                Why is Birth Certificate Attestation Required
                </h4>
                <i className="ri-check-line1"> </i> &nbsp;&nbsp;
                  <b>Education  Abroad –</b> Required for university admissions.<br/>
                 <i className="ri-check-line1"></i>&nbsp;&nbsp;
                  <b>Employment Visa –</b> Essential for work visa applications.<br/>
                 <i className="ri-check-line1"></i>&nbsp;&nbsp;
                 <b> Dependent Visa –</b> Needed for family visa approvals.<br/>
                 <i className="ri-check-line1"></i>&nbsp;&nbsp;
                  <b>
                  Residency & Migration –</b> Required for permanent residency & citizenship.<br/>
                  <i className="ri-check-line1"></i>&nbsp;&nbsp;
                  <b>Legal & Medical Purposes –</b> Used in inheritance claims, passport applications, and medical benefits.
                           
                <h4><br/>
                Documents Required
                </h4>              
               <ul>
                <li>
                   Original Birth Certificate
                 <br/>
                </li>
                <li>
                Copy of Passport (Front & Back)
                 <br/>
                </li>
                <li>
                 Copy of Visa (If applicable)
                  <br/>
               </li>
               <li>
               National ID Proof (Aadhaar, PAN, etc.)
                  <br/>
               </li>
               <li>
               Application Form (As per authority requirement)
               </li>
               </ul>
                <h4>
                Our Birth Certificate Attestation Process
                </h4>                            
                <ol>
                  <li>
                  Notary Attestation – Initial verification by a Notary Public.
                  </li>
                  <li>
                  State Home Department Authentication – Approval from the respective state authority.
                  </li>
                  <li>
                  MEA Attestation – Ministry of External Affairs (MEA) attestation for official verification.
                  </li>
                  <li>
                  Embassy Attestation – Required for non-Hague Convention countries.
                  </li>
                  <li>
                  MOFA Attestation (For Gulf Countries) – Final attestation in the destination country.
                  </li>
                </ol> 
                <h4>
                 Why Choose Our Birth Certificate Attestation Services
                </h4>
                
               
                 <i className="ri-check-line1"></i>&nbsp;&nbsp;
                  <b>Quick & Hassle-Free Process –</b>   We handle all verifications and submissions.
                  <br/>
                  <i className="ri-check-line1"></i>&nbsp;&nbsp;
                  <b>100% Genuine Attestation –</b> Approved by government authorities & embassies.
                  <br/>
                  <i className="ri-check-line1"></i>&nbsp;&nbsp;
                  <b>Doorstep Pickup & Delivery –</b> No need to visit multiple offices.
                  <br/>
                  <i className="ri-check-line1"></i>&nbsp;&nbsp;
                  <b>Secure & Reliable Service – </b>Trusted by thousands of customers.
                  <h2>Processing Time </h2>            
                <p>
                Processing Time: 5-15 working days (varies by country & document type).
                </p>  
                  </div> 
              </div>  
               
            </div>
          </div>
        </div>
      </div>
      
      <BirthSidebar />
    </>
    
  );
};

export default Birthcontent;
