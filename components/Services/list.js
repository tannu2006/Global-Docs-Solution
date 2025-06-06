import React from "react";
import Link from "next/link";

const List = () => {
  return (
    <>
      <div className="service-sidebar">
        <div className="sidebar-box">
          <h3>Attestation-List</h3>
          <ul>
            <li>
              <Link href="/services/details/MCA">
              Marriage-Attestation<i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details/BCA">
              Bachelorhood-Attestation <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details/BDA">
              Business-Attestation <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details/wic">
              Certificate-Attestation <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default List;
