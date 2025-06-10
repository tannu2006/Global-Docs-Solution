import React from "react";
import Image from "next/image";
import MEASidebar from "./MEASidebar";
import Apostille from "../BusinessConsulting/Apostille";
import Apostilleservicessidebar from "./Apostilleservicessidebar";
import Visaservicessidebar from "./Visaservicessidebar";

const Visaservicescontent = () => {
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
                 <h2>Visa-Service</h2>
                <h3>
                 Introduction
                </h3>
                <p>
                Visa stamping is a mandatory step for individuals traveling 
                to a foreign country for work, study, business, or family visits. 
                It serves as an official permit granted by the destination country’s 
                embassy or consulate, allowing entry and legal stay.
                </p>
                <h3>
                Types of Visas
                </h3>
                <h5>
                1. Tourist Visa
                </h5>
                <li>
                Issued to travelers for leisure, sightseeing, or short-term family visits.
                </li>
                <li>
                 Usually valid for 30–90 days and does not permit employment.
                </li>
                <li>
                 May require hotel bookings, flight details, and financial proof.
                </li>
                
                <h5>
                  2. Business Visa
                </h5>
                <li>
                For individuals traveling for meetings, trade, conferences, or investments.
                </li>
                <li>
                Generally sponsored by a company in the host country.
                </li>
                <li>
                 Requires business invitation letter and financial proof.
                </li>
                <h5>
                  3. Student Visa
                </h5>
                <li>
                Granted to students enrolled in foreign universities or colleges.
                </li>
                <li>
                 Requires proof of admission, financial sponsorship, and health insurance.
                </li>
                <li>
                 Often allows limited work opportunities.
                </li>
                <h5>
                  4. Work Visa (Employment Visa)
                </h5>
                <li>
                 Issued to foreign professionals with a job offer from an overseas employer.
                </li>
                <li>
                Requires employment contract, company sponsorship, and medical tests.
                </li>
                <li>
                Some countries offer permanent residency pathways.
                </li>
                <h5>
                 5. Investor Visa
                </h5>
                <li>
                 Designed for individuals investing in businesses or real estate abroad.
                </li>
                <li>
                 May lead to residency or citizenship programs.
                </li>
                <li>
                 Requires proof of investment, financial background checks, and business registration.
                </li>
                <h5>
                 6. Family / Dependent Visa
                </h5>
                <li>
                 Allows family members (spouse, children, parents) to join a resident or citizen abroad.
                </li>
                <li>
                 Often requires sponsorship, relationship proof (marriage/birth certificate), and financial stability.
                </li>
                <li>
                 Some countries allow residency or citizenship after fulfilling requirements.
                </li>
                <h4>
              Visa Application Process
              </h4>
              <b>
              Step 1: Choose the Right Visa
              </b>
              <li>
               Identify the visa type that suits your purpose of travel.
              </li>
              <li>
               Check eligibility criteria and document requirements.
              </li>
              <b>
              Step 2: Complete the Application Form
              </b>
              <li>
              Some countries accept online applications, while others require paper submissions.
              </li>
              <li>
               Ensure accurate and complete information to avoid rejection.
              </li>
              <b>
              Step 3: Schedule and Attend Visa Interview (If Required)
              </b>
              <li>
               Some countries (like the USA, Canada, and UK) require a visa interview.
              </li>
              <li>
                 Applicants should be prepared to answer questions about their travel purpose, financial status, and ties to their home country.
              </li>
              <b>
              Step 4: Wait for Processing
              </b>
              <li>
               Visa processing times vary based on visa type and nationality.
              </li>
              <li>
               Some visas are approved within days, while others take weeks or months.
              </li>
              <b>
              Step 5: Receive Your Visa
              </b>
              <li>
              If approved, the visa is stamped on your passport or issued electronically.
              </li>
              <li>
              Check all details carefully before traveling
              </li>
              <h4>
              Required Documents
              </h4>  
              <li>
              Valid passport (minimum 6 months validity) </li>
              <li> Passport-size photographs </li>
              <li>  Visa application form </li>
              <li> Financial proof (bank statements, ITR, salary slips) </li>
              <li> Travel itinerary (flight tickets, hotel bookings)</li>
              <li> Invitation letter (for business/family visas) </li>
              <li> Medical test results (for work visas)
              </li>
              <h4>
                Visa Processing Time 
              </h4>
              <table border="1">
               <tr>
                 <th>Visa Type</th>
                 <th>Processing Time</th>
                 
               </tr>
              
               <tr>
                 <td>Tourist Visa</td>
                 <td>
                 5-15 days
                 </td>
                 
                </tr>
               <tr>
                <td> Business Visa</td>
                 <td>
                 7-20 days
                 </td>
               
               </tr>
               <tr>
                 <td> Student Visa</td>
                 <td>
                 15-45 days
                 </td>
                 
                </tr>
               <tr>
                <td> Work Visa</td>
                 <td>30-90 days

                  </td>
               
               </tr>
               <tr>
                 <td>Investor Visa</td>
                 <td>30-90 days
                 </td>
                 
                </tr>
               <tr>
                <td>Family Visa</td>
                 <td>15-45 days</td>
               
               </tr>
              </table>

              <h4>
                Why Choose Our Visa Services?
              </h4>
               <li>
               Fast & Hassle-Free Visa Processing
               </li>
               <li>
               End-to-End Support (Application to Approval)
               </li>
               <li>
               Expert Guidance & Documentation Assistance
               </li>
               <li>
               Doorstep Document Pickup & Delivery
               </li>
               <li>
                100% Trusted & Transparent Pricing
               </li>
              </div>
            </div>

            <div className="col-lg-4">
              <Visaservicessidebar/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visaservicescontent;
