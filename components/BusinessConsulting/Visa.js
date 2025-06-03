import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from "next/link";

const Visa= () => {
  return (
    <>
         <div className="case-studies-area ptb-100">
      <div className="container">
         <div className="paragraph">
            <h1> Visa-Services</h1> 
          </div>
         <h2>
         <div className="paragraph">
           What is a Visa services     
         </div>
         </h2>
         <p>
           Visa services play a crucial role in international travel, work, 
           education, and migration. Whether you are planning a vacation, 
           studying abroad, or relocating for work, obtaining the correct visa 
           is essential.
          </p>      
         <div className="">
           <div className="">
              <div className="row mb-40">
               <div className="col-lg-7 col-md-12"> 
                <div className="blog-area pt-100 pb-70">
                        <div className="container">
                          <div className="section-title">
                            <span className="sub-title"><h3>
                              Document Required
                              </h3></span>
                            
                          </div>
                
                          <div className="row justify-content-center">
                            <div
                              className="col-lg-4 col-md-6 col-sm-12"
                              data-aos="fade-up"
                              data-aos-delay="400"
                              data-aos-duration="800"
                              data-aos-once="true"
                            >
                              <div className="single-blog-post">
                                <div className="image">
                                  
                                    <Image
                                      src="/images/blog/passport1.png"
                                      alt="image"
                                      width={760}
                                      height={900}
                                    />
                                 
                                 
                                </div>
                                <div className="content">
                                    
                                <i className="ri-checkbox-circle-fill2"></i>&nbsp;&nbsp;
                                  Valid passport (minimum 6 months validity)
                                  <br/>
                                  
                                </div>
                              </div>
                            </div>
                            
                
                            <div
                              className="col-lg-4 col-md-6 col-sm-12"
                              data-aos="fade-up"
                              data-aos-delay="400"
                              data-aos-duration="800"
                              data-aos-once="true"
                            >
                              <div className="single-blog-post">
                                <div className="image">
                                  
                                    <Image
                                      src="/images/blog/form.png"
                                      alt="image"
                                      width={760}
                                      height={900}
                                    />
                                 
                                  
                                </div>
                                <div className="content">
                                  <i className="ri-checkbox-circle-fill2"></i>&nbsp;&nbsp;
                                  Visa application form
                                  
                                </div>
                              </div>
                            </div>
                
                 
                            <div
                              className="col-lg-4 col-md-6 col-sm-12"
                              data-aos="fade-up"
                              data-aos-delay="400"
                              data-aos-duration="800"
                              data-aos-once="true"
                            >
                              <div className="single-blog-post">
                                <div className="image">
                                 
                                    <Image
                                      src="/images/blog/financial.png"
                                      alt="image"
                                      width={760}
                                      height={900}
                                    />
                                  
                                 
                                </div>
                                <div className="content">
                                <i className="ri-checkbox-circle-fill2"></i>&nbsp;&nbsp;
                                  Financial proof (bank statements, ITR, salary  slips)
                                  
                                </div>
                              </div>
                            </div>
                
                
                            <div
                              className="col-lg-4 col-md-6 col-sm-12"
                              data-aos="fade-up"
                              data-aos-delay="600"
                              data-aos-duration="800"
                              data-aos-once="true"
                            >
                              <div className="single-blog-post">
                                <div className="image">
                                 
                                    <Image
                                      src="/images/blog/flight.png"
                                      alt="image"
                                      width={760}
                                      height={900}
                                    />
                                
                                  
                                </div>
                                <div className="content">
                                <i className="ri-checkbox-circle-fill2"></i>&nbsp;&nbsp;
                                  Travel itinerary (flight tickets, hotel bookings)
                
                                </div>
                              </div>
                            </div>
                
                            <div
                              className="col-lg-4 col-md-6 col-sm-12"
                              data-aos="fade-up"
                              data-aos-delay="800"
                              data-aos-duration="800"
                              data-aos-once="true"
                            >
                              <div className="single-blog-post">
                                <div className="image">
                                  
                                    <Image
                                      src="/images/blog/invitation.png"
                                      alt="image"
                                      width={760}
                                      height={900}
                                    />
                                
                                  
                                </div>
                                <div className="content">
                                <i className="ri-checkbox-circle-fill2">&nbsp;&nbsp;</i>
                                  Invitation letter (for business/family visas)
                                 
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-lg-4 col-md-6 col-sm-12"
                              data-aos="fade-up"
                              data-aos-delay="800"
                              data-aos-duration="800"
                              data-aos-once="true"
                            >
                              <div className="single-blog-post">
                                <div className="image">
                                 
                                    <Image
                                      src="/images/blog/medical.png"
                                      alt="image"
                                      width={760}
                                      height={900}
                                    />
                                 
                                 
                                </div>
                                <div className="content">
                               
                                  <i className="ri-checkbox-circle-fill2">&nbsp;&nbsp;</i>
                                  Medical test results (for work visas)
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
                <div className="col-lg-5 col-md-12">
                   <div className="position">
                  <div className="service-sidebar">
                   <div className="sidebar-box">
                     <div className="position-container1">
                       <h3 >
                        <div className="center">
                          <div className="background">
                             Our Services
                          </div>
                          </div>
                        </h3>
                       <ul>
                         <li>
                           <Link href="/MEA-Attestation">
                             MEA-Attestation  <i className="ri-arrow-right-double-fill"></i>
                           </Link>
                         </li>
                         <li>
                           <Link href="/Apostille-Attestation">
                             Apostille-Attestation <i className="ri-arrow-right-double-fill"></i>
                           </Link>
                         </li>
                         <li>
                           <Link href="/Degree-Attestation">
                             Degree-Attestation <i className="ri-arrow-right-double-fill"></i>
                           </Link>
                         </li>
                         <li>
                            <Link href="/Birth-Attestation">
                             Birth-Attestation<i className="ri-arrow-right-double-fill"></i>
                           </Link>
                         </li>
                         <li>
                           <Link href="/Apostille-Services">
                             Apostille-Service  <i className="ri-arrow-right-double-fill"></i>
                           </Link>
                         </li>
                         <li>
                           <Link href="/Visa-Services">
                             Visa-Service <i className="ri-arrow-right-double-fill"></i>
                           </Link>
                         </li>
                         <li>
                           <Link href="case-studies/3/UAE">
                             UAE-Stamping <i className="ri-arrow-right-double-fill"></i>
                           </Link>
                         </li>
                         <li>
                           <Link href={"case-studies/3/Saudi"}>
                             Saudi-Stamping <i className="ri-arrow-right-double-fill"></i>
                           </Link>
                         </li>
                         <li>
                           <Link href={"case-studies/3/Kuwait"}>
                             Kuwait-Stamping <i className="ri-arrow-right-double-fill"></i>
                          </Link>
                         </li>
                         <li>
                           <Link href={"case-studies/3/Qatar"}>
                             Qatar-Stamping <i className="ri-arrow-right-double-fill"></i>
                           </Link>
                         </li>
                       </ul>
                     </div>
                     </div>
                    </div>
                  </div>
               
                </div>
              </div>
           </div>
         </div>       
      </div>
    </div>
    </>
  );
};

export default Visa;
