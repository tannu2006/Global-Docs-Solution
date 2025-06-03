import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import Image from "next/image";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactUs = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-us-area">
        <div className="container">
          <div className="contact-us-inner-box with-black-color">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="contact-form-wrap">
                  <h2>Contact Us</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                            value={contact.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={contact.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={contact.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="6"
                        className="form-control"
                        placeholder="Enter message..."
                        value={contact.text}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="contact-us-btn">
                      <button type="submit" className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Send
                        Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="get-in-touch-information">
                  <h4>Get in Touch</h4>

                  <ul className="information-list">
                    <li>
                      <i className="ri-map-pin-line"></i>
                      Address:1 7/38 Ground Floor, Dr. Sachdeva lane, Opp. MGM S
                    </li>
                    <li>
                       <i className="ri-map-pin-line"></i>
                      Address:2 hop No. 01 Karim Manzil Jail Road Near Habib Hospital South Umerkhadi Dongari MUMBAI - 400009
                    </li>
                     
                    <li>
                      <i className="ri-phone-line"></i>
                      <a href="tel:+919911800116">+91 99118 00116</a>
                      <a href="tel:+918446684422">+91 84466 84422</a>
                      <a href="tel:+917276309395">+91 7276309395</a>
                    </li>
                    <li>
                      <i className="ri-mail-line"></i>
                      <a href="mailto:Info@globaldocs.in">Info@globaldocs.in</a>
                      <a href="mailto:attestation@globaldocs.in">attestation@globaldocs.in</a>
                    </li>
                     
                    
                  </ul>
                  <div className="get-in-touch-shape">
                    <Image
                      src="/images/crypto-startup/get-in-touch-shape.png"
                      alt="image"
                      width={368}
                      height={104}s
                    />
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

export default ContactUs;
