import React from "react";

const NewsletterForm = () => {
  return (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">
          <div className="subscribe-inner">
            <span className="sub-title">Need For Marriage Certificate Attestation</span>
            <h2>Why is Marriage Certificate Attestation Important?</h2>
    

            <form className="newsletter-form">
               
              <input 
                type="text"
                className="input-newsletter"
                value="Immigration & Family Reunification" readOnly 
               /> 
               <i className="ri-arrow-down-line"></i>
                <div className="row-box">
                Proving your marital status when applying for visa or residency
                 </div>
            </form> 
              
              <form className="newsletter-form">
                <input 
                type="text"
                className="input-newsletter"
                value=" Legal & Official Procedures " readOnly
               /> 
               <i className="ri-arrow-down-line"></i>
                <div className="row-box">
               Essential for legal processes like property distribution, inheritance, or litigation
               </div>
              </form> 

              
              <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value=" Employment & Education" readOnly
               />
                <i className="ri-arrow-down-line"></i>
                <div className="row-box">  
               When your marital status is a requirement for job applications or school admissions abroad
               </div>

              </form>

              
              <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value="Embassy & Consulate Services" readOnly
               /> 
               <i className="ri-arrow-down-line"></i>
                <div className="row-box">  
               To obtain recognition of your marriage certificate from foreign governments
               </div> 
              
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
