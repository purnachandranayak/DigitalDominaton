import Link from "next/link";
import React from "react";

const inner_content = {
  title: "Book a Demo!",
  description: <>We will contact you again after receiving your request within 24 hours.</>,

  contact_data: [
    {
      id: 1,
      title: "Email",
      info: "support@digitaldomination.io",
      icon: "fas fa-envelope",
    },
    {
      id: 2,
      title: "Phone",
      info: "+1 505 477 7357",
      icon: "fa fa-phone",
    },
    {
      id: 3,
      title: "USA",
      info: "1209 Mountain Road PL NE, STE R, Albuquerque, 87110",
      icon: "fas fa-location-arrow", // You can change this to another icon if needed
    },
    {
      id: 4,
      title: "INDIA",
      info: "P No 1477/6705, Opp Sneha Filling, Odisha 767033",
      icon: "fas fa-location-arrow", // You can change this to another icon if needed
    },
  ],
};

const { title, description, contact_data } = inner_content;

const ContactInner = () => {
  return (
    <div className="contact-inner-area pb-130">
      <div className="container">
        <div className="contact-inner-wrapper">
          <div className="row gx-0">
            {contact_data.map((item) => (
              <div key={item.id} className="col-xl-6 col-lg-6">
                <div className="contact-inner-item d-flex align-items-start">
                  <div className="contact-icon me-3">
                    <i className={item.icon} style={{ color: "#f44336", fontSize: "1.5rem" }} />
                  </div>
                  <div className="contact-info d-flex flex-column">
                    <h5>{item.title}</h5>
                    <p>{item.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInner;
