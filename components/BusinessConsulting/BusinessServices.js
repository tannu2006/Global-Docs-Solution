import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const BusinessServices = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Business Document Attestation</span>
            <p>Planning to expand your business overseas, open a branch, or submit documents for trade,
   investment, or licensing purposes? Then, attestation of business documents is a legal 
   necessity. We simplify the entire attestation process for your corporate paperwork — 
   ensuring it's officially valid and accepted by foreign authorities.</p>
          </div>

<>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div >
              <div className="service-details-content">
               
<div className="single-services-item with-boxshadow">           
  <p><h2>What is Business Document Attestation?</h2>
  Business Document Attestation is the official process of verifying and legalizing
 commercial documents issued in one country for use in another.<br/> These documents must 
 be authenticated by local authorities, the Ministry of External Affairs (MEA), and 
 the concerned foreign embassy or consulate.</p>

  <h3>Why is Business Document Attestation Important: </h3>
  <i className="ri-check-line">Register a company abroad</i><br/>
  <i className="ri-check-line">Participate in foreign tenders or contracts</i><br/>
  <i className="ri-check-line">Open an overseas bank account</i><br/>
  <i className="ri-check-line">Apply for business visas or investor permits</i><br/>
  <i className="ri-check-line">Establish trade relationships or export/import</i><br/>
  <i className="ri-check-line">Fulfill legal compliance for international partnerships</i>

  <div className="process-area1">
  <div className="container">
    <div className="process-inner1">
        <div className="row justify-content-center">
          <div className="center">
            <h2>Business documents we attest:</h2>
            </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
            <li>Certificate of Incorporation</li>
            <li>Memorandum & Articles of Association (MOA/AOA)</li>
            <li>Board Resolution</li>
             <li>Power of Attorney</li>
            <li>Company Profile or Letterhead </li>
            <li>Partnership Deed</li>Partnership Deed
            <li>Commercial Invoice</li>
            <li> Trade License</li>
            <li>Company Registration Documents</li>
            <li>Import/Export code</li>
            <li>Financial Statements</li>
            </div>
          </div>
          </div>
        </div>
      </div>  
    </div>

<h3><br/>Our Attestation process</h3>
<li><b>Step 1.Chamber of Commerce Attestation:</b></li>
Initial verification from the issuing body or local business authority.
<li><b>Step 2.Notary Attestation(if required):</b></li>
Legal authentication by a certified notary public.
<li><b>Step 3.State Authority Attestation:</b></li>
For verification through respective state departments (if applicable).
<li><b>Step 4.Ministry of outside Affairs (MEA) Attestation:</b></li>
MEA authenticates the document for foreign use.
<li><b>Step 5.Embassy or Consulate Attestation:</b></li>
Final verification by the target country’s embassy (UAE, Saudi, Qatar, Kuwait, etc.)
<li><b>Step 6.(Optional) MOFA (Destination Country) Attestation:</b></li>
In some cases, attestation is required by the Ministry of Foreign Affairs after arrival
 in the destination country.

 <h2><br/>Document's Required</h2>
 <i className="ri-checkbox-circle-fill"> Original Marriage certificate</i><br/>
 <i className="ri-checkbox-circle-fill">Photocopy of marriage certificate</i><br/>
 <i className="ri-checkbox-circle-fill">Passport copy</i><br/>
 <i className="ri-checkbox-circle-fill">Identification proof</i><br/>
 <i className="ri-checkbox-circle-fill">Power of attorney(if applicable)</i><br/>
 <i className="ri-checkbox-circle-fill">Visa or Immigration form</i><br/>
 <i className="ri-checkbox-circle-fill"> Proof of residence</i>
 
 <h3><br/>Processing Time</h3>
 Educational Documents – 7 to 15 working days<br/>
 Personal Documents – 5 to 10 working days<br/>
 Commercial Documents – 5 to 12 working days

<h3><br/>Why Choose Us</h3>
<i className="ri-check-line">Trusted by entrepreneurs & corporates across sectors</i><br/>
<i className="ri-check-line">End-to-end support with real-time tracking</i><br/>
<i className="ri-check-line">Document pickup & delivery service (in select cities)</i><br/>
<i className="ri-check-line">Transparent pricing with no hidden fees</i><br/>
<i className="ri-check-line">100% authenticity & embassy compliance</i>


     
</div>                    
              </div>
            </div>

           
          </div>
        </div>
      </div>
</>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="services-slides-two"
          >
             <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon30.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/marriage-attestation">Marriage Attestation</Link>
                  </h2>
                </div>
                <p>Marriage certificate attestation verifies the authenticity of a marriage certificate for use in
                foreign countries.</p>
                <Link href="/marriage-attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon32.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/bachelorhood-attestation">Bachelorhood  Attestation</Link>
                  </h2>
                </div>
                <p>Bachelorhood certificate attestation authenticates a bachelor's degree
                   for use in foreign countries.</p>
              
                <Link href="/bachelorhood-attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>
             
            
            
            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon31.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h2>
                    <Link href="/certificate-attestation">Certificates Attestation</Link>
                  </h2>
                </div>
                <p>Certificate attestation authenticates documents for use abroad, ensuring their legal 
                  acceptance by authorities.</p>

                <Link href="/certificate-attestation" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

         </Swiper>
        </div>
      </div>
    </>
  );
};

export default BusinessServices;
