import React from "react";
import Link from "next/link";
import Image from "next/image";

const GetStarted = () => {
  return (
    <>
      <div className="get-started-area bg-gradient-image pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="get-started-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/man.png"
                  alt="image"
                  width={423}
                  height={590}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="get-started-content">
                <span className="sub-title">READY TO STARTED?</span>
                <h2>
                  Let us help you 
                </h2>
                <p>
                 Have questions or need assistance? Reach out to us—we're here to help
                 with all your document and visa service needs.
                  
                </p>

                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Contact US Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
