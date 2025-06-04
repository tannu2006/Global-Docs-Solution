import React from "react";

const FunFacts = () => {
  return (
    <>
      <div className="funfacts-area pt-100 pb-70">
        <div className="container">
        <div className="section-title">
            <span className="sub-title">Processing Time</span>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-4 col-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-funfacts-box">
                <div className="icon">
                  <i className="ri-graduation-cap-fill"></i>
                </div>
                <h3>Educational Documents</h3>
                <p>7 to 15 working days</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-4 col-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-funfacts-box">
                <div className="icon bg-4D69FF">
                  <i className="ri-user-3-fill"></i>
                </div>
                <h3>Personal Documents</h3>
                <p>5 to 10 working days</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-4 col-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-funfacts-box">
                <div className="icon bg-FFC23B">
                  <i className="ri-briefcase-2-fill"></i>
                </div>
                <h3>Commercial Documents</h3>
                <p>5 to 12 working days</p>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
