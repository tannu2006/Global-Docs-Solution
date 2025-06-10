import React from "react";

const NewsletterForm = () => {
  return (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">
          <div className="subscribe-inner">
            <span className="sub-title">Need For Business Document Attestation</span>
            <h2>Why is Business Document Attestation Important?</h2>
    

            <form className="newsletter-form">
               
              <input 
                type="text"
                className="input-newsletter"
                value="Register a company abroad" readOnly 
               /> 
      
            </form> 
              
              <form className="newsletter-form">
                <input 
                type="text"
                className="input-newsletter"
                value=" Participate in foreign tenders or contracts " readOnly
               /> 
            </form> 

              
              <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value=" Open an overseas bank account" readOnly
               />
               

              </form>

              
            <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value="Apply for business visas or investor permits" readOnly
               /> 
              
            </form>

                        <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value="Establish trade relationships or export/import" readOnly
               /> 
              
            </form>

                        <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value="Fulfill legal compliance for international partnerships" readOnly
               /> 
              
            </form>



          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
