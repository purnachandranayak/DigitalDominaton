import React from 'react';

const JobArea = () => {
  const handleLoad = () => {
    window.scrollTo(0, 0); // Scroll to top when iframe loads
  };

  return (
    <div className="job-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="job-section-box text-center mb-40">
              <h3 className="tp-section-title">Join our Growing Team</h3>
              <p>Explore our job portal for exciting opportunities!</p>
            </div>
          </div>
        </div>
        <div className="iframe-container">
          <iframe
            onLoad={handleLoad} // Use the function here
            height="750"
            allowTransparency="true"
            frameBorder="0"
            scrolling="yes"
            style={{ width: '100%', border: 'none' }}
            src="https://links.digitaldomination.io/job-portal"
            id="formalooIframe"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default JobArea;
