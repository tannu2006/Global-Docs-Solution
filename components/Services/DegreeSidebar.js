import React from "react";
import Link from "next/link";
const DegreeSidebar = () => {
  return (
    <>
      <div className="service-sidebar">
        <div className="sidebar-box">
          <h3> Attestation-List</h3>
          <ul>
            <li>
              <Link href="/services/details/MEA">
              MEA-Attestation  <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details/Apostille">
                Apostille-Attestation <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details/Degree">
                Degree-Attestation <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details/Birth">
                Birth-Attestation<i className="ri-arrow-right-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DegreeSidebar;
