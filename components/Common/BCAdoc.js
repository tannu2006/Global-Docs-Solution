import React from "react";
import Image from "next/image";

const FreeSEOQuotesForm = () => {
  return (
    <>
      <div className="quote-area">
        <div className="container">
          <div className="quote-content">
            <span className="sub-title">Document's Required</span>
            <h2><u>Basic Document's</u></h2>
           
            <form>
              
            <div className="">

              <div className="col-lg-5 col-md-6 pl-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value="Original Bachelorhood certificate" readOnly
                    />
                   
                  </div>
                </div>
               
                
                <div className="col-lg-5 col-md-6 pr-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value="Passport copy"  readOnly
                    />
                  </div>
                </div>
                
                <div className="col-lg-5 col-md-6 pl-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value="Identification proof"  readOnly
                    />
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 pr-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value="Power of attorney(if applicable)"  readOnly
                    />
                  </div>
                </div>
                
                <div className="col-lg-5 col-md-6 pl-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value="Visa or Immigration form"  readOnly
                    />
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 pr-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value="Proof of residence"  readOnly
                    />
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 pl-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value="Supporting documents(if required)" readOnly
                    />
                  </div>
                </div>
                 
            </div>
            </form>
          </div>
        </div>

        <div className="shape11">
          <Image
            src="/images/shape/shape10.png"
            alt="shape"
            width={280}
            height={532}
          />
        </div>
        <div className="shape12">
          <Image
            src="/images/shape/shape11.png"
            alt="shape"
            width={270}
            height={527}
          />
        </div>
      </div>
    </>
  );
};

export default FreeSEOQuotesForm;
