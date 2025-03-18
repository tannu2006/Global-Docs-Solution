import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <>
      <div className="cybersecurity-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="cybersecurity-banner-content"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span className="sub-title">World Class Security</span>
                <h1>Security Your Data From Cyber Attacks</h1>
                <p>
                  Donec sollicitudin molestie malesuada. Vivamus magna justo
                  lacinia eget consectetur sed convallis at tellus. Donec rutrum
                  congue leo eget malesuada.
                </p>
                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="cybersecurity-banner-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/cybersecurity-services/banner/banner.png"
                  alt="image"
                  width={1048}
                  height={788}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
