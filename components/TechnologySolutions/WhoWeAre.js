import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Who We Are</span>
            
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="single-features-box">
                <div className="icon">
                  <Image
                    src="/images/icon/icon1.png"
                    alt="image"
                    width={76}
                    height={76}
                  />
                </div>
                <h3>Who is Global Docs?</h3>
                <p>
                  Since 2011, Global Docs Services has been helping people and businesses get their
                   documents attested and stamped for visas across the UAE, Qatar, Saudi Arabia, and Kuwait — quickly and reliably
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-box">
                <div className="icon">
                  <Image
                    src="/images/icon/icon2.png"
                    alt="image"
                    width={76}
                    height={76}
                  />
                </div>
                <h3>What Does Do?</h3>
                <p>
                  With over 10 years of experience, we handle attestation and apostille services
                   for educational, personal, and business documents with the utmost care and accuracy.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-features-box">
                <div className="icon">
                  <Image
                    src="/images/icon/icon3.png"
                    alt="image"
                    width={76}
                    height={76}
                  />
                </div>
                <h3>where Located?</h3>
                <p>
                  Located in Delhi and Mumbai, we serve clients all over India and around the world, taking care of
                   your document needs from start to finish so you can focus on your next move with peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
