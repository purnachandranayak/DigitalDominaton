import React from 'react';
import Link from 'next/link';

const pricing_data = {
  header_text: <>Choose your plan to get started with our outreach services</>,
  price_header: [
    {
      id: 1,
      title: "Email Outreach",
      description: "Done with you",
      price: 1500,
      features: [
        "Email outreach only",
        "Positive Response Notifications",
        "30 Mailboxes",
        "Reporting Automation",
      ],
      footer_text: "Starts at 1500$/m",
      button_class: "tp-btn-service",
    },
    {
      id: 2,
      title: "Email + LinkedIn Outreach",
      description: "Done for you",
      price: 3000,
      features: [
        "Email + LinkedIn Outreach",
        "Positive Response Notifications",
        "100 Mailboxes",
        "Reporting Automation",
        "Nurturing Automation",
        "Client Portal",
      ],
      footer_text: "Starts at 3000$/m",
      button_class: "tp-btn-service",
    }
  ]
};

const { header_text, price_header } = pricing_data;

const PriceArea = () => {
  return (
    <section className="tp-price-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="section-title">{header_text}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {price_header.map((item, i) => (
            <div key={i} className="col-lg-5 col-md-6 mb-4">
              <div className="price-card">
                <div className="price-card-header">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="price-card-body">
                  <ul className="feature-list">
                    {item.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="price-card-footer">
                  <p className="price">{item.footer_text}</p>
                  <Link href="/schedule" className="tp-btn-border tp-btn-hover tp-btn-border-2 alt-color-black">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
       .tp-btn-border.tp-btn-hover.tp-btn-border-2.alt-color-black {
          background: #000229;
        }
        .tp-price-area {
          padding: 80px 0;
          background-color: #f8f9fa;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .price-card {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .price-card-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .price-card-header h3 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .price-card-body {
          flex-grow: 1;
        }
        .feature-list {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }
        .feature-list li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .feature-list li::before {
          content: "✓";
          color: #28a745;
          position: absolute;
          left: 0;
        }
        .price-card-footer {
          text-align: center;
        }
        .price {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #ef4444;
        }
      `}</style>
    </section>
  );
};

export default PriceArea;