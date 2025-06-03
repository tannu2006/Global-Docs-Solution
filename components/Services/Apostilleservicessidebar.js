import React from "react";
import Link from "next/link";
const Apostilleservicessidebar = () => {
  return (
    <>
      <div className="service-sidebar">
        <div className="sidebar-box">
          <h3> Attestation-List</h3>
          <ul>
            <li>
              <Link href="/services/details/Apostilleservices">
              Apostille-Service  <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details/Visaservices">
                Visa-Service <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Apostilleservicessidebar;
