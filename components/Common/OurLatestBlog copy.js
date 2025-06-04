import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurLatestBlog = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"><h3>
              Document Required
              </h3></span>
            
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                  
                    <Image
                      src="/images/blog/passport1.png"
                      alt="image"
                      width={760}
                      height={900}
                    />
                 
                  <span className="date">March 20, 2024</span>
                </div>
                <div className="content">
                    
                <i className="ri-checkbox-circle-fill2"></i>&nbsp;&nbsp;
                  Valid passport (minimum 6 months validity)
                  <br/>
                  
                </div>
              </div>
            </div>
            

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                  
                    <Image
                      src="/images/blog/form.png"
                      alt="image"
                      width={760}
                      height={900}
                    />
                 
                  <span className="date">March 20, 2024</span>
                </div>
                <div className="content">
                  <i className="ri-checkbox-circle-fill2"></i>&nbsp;&nbsp;
                  Visa application form
                  
                </div>
              </div>
            </div>

 
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                 
                    <Image
                      src="/images/blog/financial.png"
                      alt="image"
                      width={760}
                      height={900}
                    />
                  
                  <span className="date">March 20, 2024</span>
                </div>
                <div className="content">
                <i className="ri-checkbox-circle-fill2"></i>&nbsp;&nbsp;
                  Financial proof (bank statements, ITR, salary  slips)
                  
                </div>
              </div>
            </div>


            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                 
                    <Image
                      src="/images/blog/flight.png"
                      alt="image"
                      width={760}
                      height={900}
                    />
                
                  <span className="date">March 19, 2024</span>
                </div>
                <div className="content">
                <i className="ri-checkbox-circle-fill2"></i>&nbsp;&nbsp;
                  Travel itinerary (flight tickets, hotel bookings)

                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                  
                    <Image
                      src="/images/blog/invitation.png"
                      alt="image"
                      width={760}
                      height={900}
                    />
                
                  <span className="date">March 18, 2024</span>
                </div>
                <div className="content">
                <i className="ri-checkbox-circle-fill2">&nbsp;&nbsp;</i>
                  Invitation letter (for business/family visas)
                 
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                 
                    <Image
                      src="/images/blog/medical.png"
                      alt="image"
                      width={760}
                      height={900}
                    />
                 
                  <span className="date">March 18, 2024</span>
                </div>
                <div className="content">
               
                  <i className="ri-checkbox-circle-fill2">&nbsp;&nbsp;</i>
                  Medical test results (for work visas)
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLatestBlog;
