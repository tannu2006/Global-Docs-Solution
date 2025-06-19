import React from "react";
import Image from "next/image";

const CyberSafety = () => {
  return (
    <>
      <div className="cyber-safety-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="cyber-safety-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/cybersecurity-services/ApostilleServices.png"
                  alt="image"
                  width={710}
                  height={560}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-safety-content">
                <h2> When Do You Need Apostille Services</h2>
                <p>
                 Apostills are required for documents used in countries 
                 that are members of the Hagua Postil Convention. 
                 Apostils are usually required
                </p>

                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i> 	Applying for a student visa
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>	Securing a work permit or employment abroad
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i>	Marriage registration in a foreign country
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i> 	Setting up a business overseas
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Export/import contracts or trade agreements
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> 	Legal procedures such as divorce or adoption
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CyberSafety;
