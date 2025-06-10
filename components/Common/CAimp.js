import React from "react";

const NewsletterForm = () => {
  return (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">
          <div className="subscribe-inner">
            <span className="sub-title">Need For Certificate Attestation</span>
            <h2>Why is Certificate Attestation Important?</h2>
    

            <form className="newsletter-form">
               
              <input 
                type="text"
                className="input-newsletter"
                value="Employment and Work visa applications" readOnly 
               /> 
      
            </form> 
              
              <form className="newsletter-form">
                <input 
                type="text"
                className="input-newsletter"
                value=" Higher education abroad " readOnly
               /> 
            </form> 

              
              <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value=" Immigration and PR processing" readOnly
               />
               

              </form>

              
            <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value="Marriage registration abroad" readOnly
               /> 
              
            </form>

            <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value="Family/Residence visa" readOnly
               /> 
              
            </form>

            <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value="Opening a company branch abroad" readOnly
               /> 
              
            </form>

            <form className="newsletter-form"> 
                <input 
                type="text"
                className="input-newsletter"
                value="Business, legal, or court matters overseas" readOnly
               /> 
              
            </form>



          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
