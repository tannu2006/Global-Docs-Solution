import React from 'react'

const ContactInfo = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-map-pin-2-line"></i>
                </div>
                <h3>Address:1</h3>
                <p>7/38 Ground Floor, Dr. Sachdevalane, Opp. MGM Society, 
                  Ansari Road, Daryaganj New, Delhi-110002 .  </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-map-pin-2-line"></i>
                </div>
                <h3>Address:2</h3>
                <p>Shop No. 01 Karim Manzil Jail Road Near Habib Hospital South Umer  </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-mail-unread-line"></i>
                </div>
                <h3>Email Address:</h3>
                <p>
                  <a href="mailto:Info@globaldocs.in">Info@globaldocs.in</a>
                  <br />
                  <a href="mailto:Attestation@globaldocs.in">Attestation@globaldocs.in</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-phone-line"></i>
                </div>
                <h3>Toll Free:</h3>
                <p>
                  <a href="tel:+917276309395">+91 7276309395</a>
                  <br />
                  <a href="tel:+918446684422">+91 8446684422</a>
                   <br />
                  <a href="tel:+9199118001162">+91 9911800116</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
