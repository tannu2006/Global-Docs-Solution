import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer-style-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <Link href="/" className="d-inline-block logo">
                  <Image
                    src="/images/white-logo.png"
                    alt="logo"
                    width={72}
                    height={39}
                  />
                </Link>
                <p>
                  Donec sollicitudin molestie malesuada vivamus magna justo
                  lacinia eget consectetur sed convallis at tellus donec rutrum
                  congue leo eget malesuada.
                </p>

                <div className="info">
                  <i className="ri-time-line"></i>
                  <h4>Opening Hours:</h4>
                  <span>7:00AM - 10:00PM</span>
                  <span>Open 7 Days a Week</span>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Solution</h3>
                <ul className="services-links">
                  <li>
                    <Link href="/services/details">Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Enterprise Networks</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Collaboration</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Website Security</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Malware Attack</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Phishing Attack</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="quick-links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/blog">Our News</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>
                <ul className="footer-contact-info">
                  <li>
                    <i className="ri-map-pin-line"></i> Address: 2750, Quadra
                    Street Victoria, Canada
                  </li>
                  <li>
                    <i className="ri-mail-line"></i> Email:{" "}
                    <a href="mailto:hello@lofi.com">hello@lofi.com</a>
                  </li>
                  <li>
                    <i className="ri-phone-line"></i> Phone:{" "}
                    <a href="tel:+44587154756">+44 587 154756</a>
                  </li>
                  <li>
                    <i className="ri-headphone-line"></i> Fax:{" "}
                    <a href="tel:+44587154756">+55 58715 4756</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              &copy; <strong>Lofi</strong> is Proudly Owned by{" "}
              <a href="https://envytheme.com/" target="_blank" rel="noreferrer">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
