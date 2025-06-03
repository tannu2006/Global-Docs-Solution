import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>Your Trusted Partner in Global Documentation Services.</h2>
            <p>
            Experience seamless documentation services tailored to your needs.
            Trusted by clients worldwide for accuracy and efficiency.
            </p>
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
                    src="/images/new_icon/icon1.png"
                    alt="image"
                    width={76}
                    height={76}
                  />
                </div>
                <h3>Education Documents</h3>
                <p>
                Attestation and embassy verification for all academic credentials—transcripts, diplomas, degrees—so your certificates enjoy global recognition for further studies or professional licensing.
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
                    src="/images/new_icon/icon2.png"
                    alt="image"
                    width={76}
                    height={76}
                  />
                </div>
                <h3>Work / Employment Documents</h3>
                <p>
                Professional attestation of employment‑related papers—experience letters, recommendation letters, offer letters, HR letters—ensuring smooth visa applications and job transitions abroad.
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
                    src="/images/new_icon/icon3.png"
                    alt="image"
                    width={76}
                    height={76}
                  />
                </div>
                <h3>Personal Certificates</h3>
                <p>
                Legalisation and apostille services for personal records—birth certificates, marriage certificates, police clearances, power of attorney—so you’ve got hassle‑free acceptance for immigration, family visas, or overseas marriages.
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
