import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";
import Image from "next/image";

const Navbar= () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area">
        {/* TopHeader */}
        <TopHeader />

        <div id="navbar" className="navbar-area">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/" className="navbar-brand d-lg-none">
                <Image
                  src="/images/Glogo.png"
                  alt="Site logo"
                  width={114}
                  height={41}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${
                        currentPath == "/about-us/" && "active"
                      }`}
                    >
                    About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="services" className="dropdown-toggle nav-link">
                    Services
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/Apostille-Services/"
                          className={`nav-link ${
                            currentPath == "/Apostille-Services/" && "active"
                          }`}
                        >
                          Apostille Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/Visa-Services/"
                          className={`nav-link ${
                            currentPath == "/Visa-Services/" && "active"
                          }`}
                        >
                          Visa Services
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="Attestation" className="dropdown-toggle nav-link">
                    Attestation 
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/MEA-Attestation/"
                          className={`nav-link ${
                            currentPath == "/MEA-Attestation/" && "active"
                          }`}
                        >
                          MEA Attestation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/Apostille-Attestation/"
                          className={`nav-link ${
                            currentPath == "/Apostille-Attestation/" && "active"
                          }`}
                        >
                          Apostille Attestation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/Degree-Attestation/"
                          className={`nav-link ${
                            currentPath == "/Degree-Attestation/" && "active"
                          }`}
                        >
                          Degree Attestation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/Birth-Attestation/"
                          className={`nav-link ${
                            currentPath == "/Birth-Attestation/" && "active"
                          }`}
                        >
                          Birth Certificate Attestation
                        </Link>
                      </li>
                      
                      <li className="nav-item">
                        <Link
                          href="/marriage-attestation/"
                          className={`nav-link ${
                            currentPath == "/marriage-attestation/" && "active"
                          }`}
                        >
                          Marriage Certificate Attestation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/bachelorhood-attestation/"
                          className={`nav-link ${
                            currentPath == "/bachelorhood-attestation/" && "active"
                          }`}
                        >
                          Bachelorhood Certificate Attestation
                        </Link>
                      </li>

                    
                      <li className="nav-item">
                        <Link
                          href="/business-attestation/"
                          className={`nav-link ${
                            currentPath == "/business-attestation/" && "active"
                          }`}
                        >
                      Business Document Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/certificate-attestation/"
                          className={`nav-link ${
                            currentPath == "/certificate-attestation/" && "active"
                          }`}
                        >
                          Certificate Attestation
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className={'dropdown-toggle nav-link'}
                    >
                      Embassy Attestation
                    </Link>
                    <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link
                          href="/UAEEmbasyAttestation/"
                          className={`nav-link ${
                            currentPath == "UAEEmbasyAttestation" && "active"
                          }`}
                        >
                          UAE Embassy Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/QATAREmbassyAttestation/"
                          className={`nav-link ${
                            currentPath == "/QATAREmbassyAttestation/" && "active"
                          }`}
                        >
                         Qatar Embassy Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/SAUDIEmbassyAttestation"
                          className={`nav-link ${
                            currentPath == "/SAUDIEmbassyAttestation/" && "active"
                          }`}
                        >
                          Saudi Embassy Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/KUWAITEmbassyAttestation/"
                          className={`nav-link ${
                            currentPath == "/KUWAITEmbassyAttestation" && "active"
                          }`}
                        >
                          Kuwait Embassy Attestation
                        </Link>
                      </li>
                      </ul>
                  </li>
                   <li className="nav-item">
                    <Link
                      href="#"
                      className="dropdown-toggle nav-link"
                    >
                      Visa Stamping
                    </Link>
                    <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link
                          href="/UAEVisaStamping/"
                          className={`nav-link ${
                            currentPath == "/UAEVisaStamping/" && "active"
                          }`}
                        >
                          UAE Visa Stamping
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/QATARVisaStamping/"
                          className={`nav-link ${
                            currentPath == "/QATARVisaStamping" && "active"
                          }`}
                        >
                         Qatar Visa Stamping
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/SAUDIVisaStamping/"
                          className={`nav-link ${
                            currentPath == "/SAUDIVisaStamping/" && "active"
                          }`}
                        >
                        Saudi Visa Stamping
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/KUWAITVisaStamping/"
                          className={`nav-link ${
                            currentPath == "/KUWAITVisaStamping/" && "active"
                          }`}
                        >
                        Kuwait Visa Stamping
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blog/"
                      className={`nav-link ${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-edit-2-line"></span>Get A Free Quote
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
