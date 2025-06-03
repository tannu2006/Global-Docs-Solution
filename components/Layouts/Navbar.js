import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";
import Image from "next/image";

const Navbar = () => {
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
                  src="/images/logo.png"
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
                    <Link href="/" className=" nav-link">
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
                      About Us
                    </Link>
                  </li>
                   <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                      Services
                    </Link>

                    <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link
                          href="/case-studies/2/"
                          className={`nav-link ${
                            currentPath == "/case-studies/2/" && "active"
                          }`}
                        >
                          Apostile Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/2/"
                          className={`nav-link ${
                            currentPath == "/case-studies/2/" && "active"
                          }`}
                        >
                          Visa Services
                        </Link>
                      </li>
                      
                      <li className="nav-item">
                        
                        
                        <Link
                          href="/case-studies/"
                          className={`nav-link ${
                            currentPath == "/case-studies/" && "active"
                          }`}
                        >
                          Visa Stamping
                        </Link>
                        <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/case-studies/"
                          className={`nav-link ${
                            currentPath == "/case-studies/" && "active"
                          }`}
                        >
                          UAE Visa Stamping
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/2/"
                          className={`nav-link ${
                            currentPath == "/case-studies/2/" && "active"
                          }`}
                        >
                           Qatar Visa Stamping 
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/3/"
                          className={`nav-link ${
                            currentPath == "/case-studies/3/" && "active"
                          }`}
                        >
                           Soudi Visa Stamping
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/details/"
                          className={`nav-link ${
                            currentPath == "/case-studies/details/" && "active"
                          }`}
                        >
                           Kuwait Visa Stamping
                        </Link>
                      </li>
                    </ul>
                      </li>

                      
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                      Attestation
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/"
                          className={`nav-link ${
                            currentPath == "/services/" && "active"
                          }`}
                        >
                          MEA Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/services/details/"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Apostile Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/services/details/"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Degree Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/services/details/"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Birth Certificate Attestation
                        </Link>
                      </li> <li className="nav-item">
                        <Link
                          href="/services/details/"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Marriage Certificate Attestation
                        </Link>
                      </li> <li className="nav-item">
                        <Link
                          href="/services/details/"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Bachelorhood Certificate Attestation
                        </Link>
                      </li> <li className="nav-item">
                        <Link
                          href="/services/details/"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Business Document Attestation
                        </Link>
                      </li> <li className="nav-item">
                        <Link
                          href="/services/details/"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Certificate Attestation
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                      Embassy Attestation
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/case-studies/"
                          className={`nav-link ${
                            currentPath == "/case-studies/" && "active"
                          }`}
                        >
                          UAE Embassy Attestation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/2/"
                          className={`nav-link ${
                            currentPath == "/case-studies/2/" && "active"
                          }`}
                        >
                           Qatar Embassy Attestation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/3/"
                          className={`nav-link ${
                            currentPath == "/case-studies/3/" && "active"
                          }`}
                        >
                           Soudi Embassy Attestation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/details/"
                          className={`nav-link ${
                            currentPath == "/case-studies/details/" && "active"
                          }`}
                        >
                           Kuwait Embassy Attestation
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
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <Link href="/contact" className="default-btn style-two">
                  <span ></span> Make your journey Safe
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
