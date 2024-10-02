import React, { useEffect, useState } from 'react';

const ContentArea = () => {
  const [iframeHeight, setIframeHeight] = useState('1200px');

  useEffect(() => {
    // Adjust the iframe height based on the viewport height for mobile devices
    const updateIframeHeight = () => {
      const viewportHeight = window.innerHeight;
      if (window.innerWidth < 768) {
        setIframeHeight(`2200px`); // Set the iframe height to match viewport height
      } else {
        setIframeHeight('1150px'); // Default height for larger screens
      }
    };

    // Initial call
    updateIframeHeight();

    // Update height on window resize
    window.addEventListener('resize', updateIframeHeight);

    return () => {
      window.removeEventListener('resize', updateIframeHeight);
    };
  }, []);

  return (
    <section className="tp-price-area">
      <div className="container pt-70">
         <div className="row justify-content-center">
          <div className="col-lg-12">
          <iframe
              src="https://payments.pabbly.com/subscribe/6588eb7ff7e4e431cb4c725a/account-setup"
              width="100%"
              height={iframeHeight}
              frameBorder="1"
              scrolling="no"
              title="Pabbly Payment Form"
              className="payment-iframe"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tp-price-area {
          padding: 80px 0;
          background-color: #f8f9fa;
        }
                .payment-iframe {
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .card-body {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContentArea;
