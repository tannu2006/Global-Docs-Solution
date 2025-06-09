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
                    <Link href="#" className="dropdown-toggle nav-link">
                    Services
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/"
                          className={`nav-link ${
                            currentPath == "/services/" && "active"
                          }`}
                        >
                          Apostille Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/services/details/"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Visa Services
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                    Attestation Services
                    </Link>

                    <ul className="dropdown-menu">
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
                          href="/Uae-Embassy"
                          className={`nav-link ${
                            currentPath == "/Uae-Embassy" && "active"
                          }`}
                        >
                          UAE Embassy Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/Qatar-Embassy"
                          className={`nav-link ${
                            currentPath == "/Qatar-Embassy" && "active"
                          }`}
                        >
                         Qatar Embassy Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/Saudi-Embassy"
                          className={`nav-link ${
                            currentPath == "/Saudi-Embassy" && "active"
                          }`}
                        >
                          Saudi Embassy Attestation
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/Kuwait-Embassy"
                          className={`nav-link ${
                            currentPath == "/Kuwait-Embassy" && "active"
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
                          href="/case-studies/3/"
                          className={`nav-link ${
                            currentPath == "/case-studies/3/" && "active"
                          }`}
                        >
                          UAE Visa Stamping
                        </Link>
                      </li><li className="nav-item">
                        <Link
                          href="/case-studies/3/"
                          className={`nav-link ${
                            currentPath == "/case-studies/3/" && "active"
                          }`}
                        >
                         Qatar Visa Stamping
                        </Link>
                      </li><li className="nav-item">
                        <Link
                          href="/case-studies/3/"
                          className={`nav-link ${
                            currentPath == "/case-studies/3/" && "active"
                          }`}
                        >
                        Saudi Visa Stamping
                        </Link>
                      </li><li className="nav-item">
                        <Link
                          href="/case-studies/3/"
                          className={`nav-link ${
                            currentPath == "/case-studies/3/" && "active"
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
