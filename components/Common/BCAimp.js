import React from "react";

const NewsletterForm = () => {
  return (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">
          <div className="subscribe-inner">
            <span className="sub-title">Need For Bachelorhood Certificate Attestation</span>
            <h2>Why is Bachelorhood Certificate Attestation Important?</h2>
    

            <form className="newsletter-form">
               
              <input 
                type="text"
                className="input-newsletter"
                value="Marriage visa applications" readOnly 
               /> 
              
            </form> 
              
              <form className="newsletter-form">
                <input 
                type="text"
                className="input-newsletter"
                value=" Overseas marriage registration" readOnly
               /> 
             
              </form> 

              
              <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value=" Immigration and residency processing" readOnly
               />
              
              </form>

               <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value=" Legal proceedings " readOnly
               />
              
              </form>

              <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value="  Employment in specific regions" readOnly
               />
               
              </form>

              <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value=" Adoption and Sponsorship" readOnly
               /> 
                
              </form>
              
              
            
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
