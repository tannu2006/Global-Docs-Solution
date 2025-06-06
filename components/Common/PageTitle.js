import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const PageTitle = ({ pageTitle, homeText }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <h1>{pageTitle}</h1>
            <ul>
              <li>
                <Link href="/">{homeText}</Link>
              </li>
              <li>{pageTitle}</li>
            </ul>
          </div>
        </div>

        {/* Shape */}
        
      </div>
    </>
  );
};

export default PageTitle;
