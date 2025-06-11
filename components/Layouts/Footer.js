import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <Link href="/" className="d-inline-block logo">
                  <Image
                    src="/images/Glogo.png"
                    alt="logo"
                    width={114}
                    height={41}
                  />
                </Link>
                <p>
                  Established in 2011, Global Docs Services has grown into a trusted
                   name in document attestation, apostille, and visa services. With 
                   over 13 years of experience, we specialize in simplifying the complex 
                   process of legalizing documents for use worldwide.
                </p>
                <a class="default-btn" href="/about-us/"><span class="ri-arrow-right-s-line"></span>More About Us</a>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Services</h3>
                <ul className="services-links">
                  <li>
                    <Link href="/Apostille-Services">Apostille Services</Link>
                  </li>
                  <li>
                    <Link href="/Visa-Services">Visa Services</Link>
                  </li>
                  <li>
                    <Link href="/MEA-Attestation">Attestation</Link>
                  </li>
                  <li>
                  <Link href="/UAE-EmbassyAttestation">Embassy Attestation</Link>
                  </li>
                 <li>
                  <Link href="/UAE-VisaStamping">Visa Stamping</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Quick Links</h3>
                <ul className="quick-links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/UAE-EmbassyAttestation">UAE Embassy Attestation</Link>
                  </li>
                  <li>
                    <Link href="/SAUDI-EmbassyAttestation"> Saudi Embassy Attestation</Link>
                  </li>
                  <li>
                    <Link href="/QATAR-EmbassyAttestation">Qatar Embassy Attestation</Link>
                  </li>
                  <li>
                    <Link href="/KUWAIT-EmbassyAttestion">Kuwait Embassy Attestation</Link>
                  </li>
                  <li>
                    <Link href="/UAE-VisaStamping">UAE Visa Stamping</Link>
                  </li>
                  <li>
                    <Link href="/SAUDI-VisaStamping"> Saudi Visa Stamping</Link>
                  </li>
                  <li>
                    <Link href="/QATAR-VisaStamping">Qatar Visa Stamping</Link>
                  </li>
                  <li>
                    <Link href="/KUWAIT-VisaStamping">Kuwait Visa Stamping</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>
                <ul className="footer-contact-info">
                  <li>
                    7/38 Ground Floor,Dr. Sachdeva 
                    lane,Opp. MGM Society, Ansari Road,
                    Daryaganj,  New Delhi-110002 .
                  </li>
                  <li>
                   Shop No. 01 Karim Manzil Jail 
                   Road Near Habib Hospital South 
                   Umerkhadi Dongari MUMBAI – 400009
                  </li>
                  <li>
                    Email: <a href="mailto:Info@globaldocs.in">Info@globaldocs.in</a>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="mailto:Info@globaldocs.in">Info@globaldocs.in</a>
                  </li>
                  <li>
                    Phone: <a href="tel:+91 99118 00116">+91 99118 00116</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <p>
                  &copy; <strong>2025 Global Docs Solution.</strong> All Rights Reserved.{" "}
                  <a
                    href="https://envytheme.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                  
                  </a>
                </p>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
