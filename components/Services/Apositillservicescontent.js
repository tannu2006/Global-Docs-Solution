import React from "react";
import Image from "next/image";
import MEASidebar from "./MEASidebar";
import Apostille from "../BusinessConsulting/Apostille";
import Apostilleservicessidebar from "./Apostilleservicessidebar";

const Apostilleservicescontent = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                <Image
                  src="/images/services/services2.jpg"
                  alt="Services Images"
                  width={860}
                  height={860}
                />
                 <h2>Apostille-Service</h2>
                
                <h3>
                  What is Apostille-Service
                </h3>
                <p>
                Apostille is a legal authentication process for documents used internationally 
                in Hague Convention countries. The Ministry of External Affairs 
                (MEA) in India provides apostille certification, ensuring that documents 
                are recognized globally without the need for further embassy attestation.
                </p>
                
                <h3>
                Documents We Apostille
                </h3>
                
                <h4>
                Educational Documents
                </h4>
                <ul>
                  <li> 
                  Degree Certificates
                  </li>
                  <li>                  
                   Mark Sheets
                  </li>
                  <li>        
                  Diploma Certificates
                  </li>
                  
                </ul>
                <h4> Personal Documents</h4>
                <ul>
                  <li> 
                   Birth Certificates
                  </li>
                  <li>                  
                   Marriage Certificates
                  </li>
                  
                  <li>
                   Police Clearance Certificates (PCC)
                  </li>
                </ul>
                <h4>Commercial Documents </h4>
                <ul>
                  <li> 
                  Business Registration Certificates
                  </li>
                  <li>                  
                   Power of Attorney
                  </li>
                  <li>        
                  Export/Import Documents
                  </li>
                  
                </ul>
                
                <h3>
                Our Apostille Process
                </h3>
                <ol>
                  <li>
                    <b>
                    Document Collection -
                    </b>
                     We pick up documents from your location
                  </li>
                  <li>
                    <b>
                    State-Level Verification - 
                    </b>
                     Documents authenticated by respective state authorities
                  </li>
                  <li>
                    <b>
                    MEA Apostille Attestation - 
                    </b>
                     Ministry of External Affairs issues the apostille stamp
                  </li>
                  <li>
                    <b>
                    Safe Delivery -
                    </b>
                    Documents securely delivered to your doorstep
                  </li>
                </ol>
                <h3>
                How to Apply?
                </h3>
                <ol>
                  <li>
                    <b>
                      step1:
                    </b>
                    Contact us via call, WhatsApp, or email
                  </li>
                  <li>
                    <b>
                      step2:
                    </b>
                    Submit your documents online or opt for pickup service
                  </li>
                  <li>
                    <b>
                      step3:
                    </b>
                    Track the progress of your attestation in real-time
                  </li>
                  <li>
                    <b>
                      step4:
                    </b>
                    Receive your attested documents safely
                  </li>
                </ol>
                <h3>
                 Why Choose Us?
                </h3>
                <ol>
                  <li>
                  <b>
                  Fast & Reliable Service – 
                  </b>
                  Hassle-free apostille attestation in minimum time
                  </li>
               
                <li>
                  <b>
                  Government Authorized – 
                  </b>
                  MEA-recognized service providers
                </li>
                <li>
                  <b>
                  Doorstep Pickup & Delivery – 
                  </b>
                  No need to visit offices, we handle everything
                </li>
                <li>
                  <b>
                  Transparent Process – 
                  </b>
                  Real-time tracking and updates
                </li>
                </ol>
              </div>
            </div>

            <div className="col-lg-4">
              <Apostilleservicessidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apostilleservicescontent;
