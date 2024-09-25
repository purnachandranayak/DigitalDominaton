import React, { useEffect } from 'react';
import Image from "next/legacy/image";

const testimonial_content = {
    bg_img: "/assets/img/testimonial/testi-bg-3-1.png",
    title: <><span>Discover What Our Clients</span><br />Have to Say About Their <br /> <span>Experience with Us</span></>
};
const { bg_img, title } = testimonial_content;

const TestimonialArea = () => {
    useEffect(() => {
        // Create the script element
        const script = document.createElement('script');
        script.src = "https://embed.socialjuice.io/js/iframeResizer.min.js";
        script.async = true;
        script.onload = () => {
            // Call iFrameResize after the script has loaded
            window.iFrameResize({ log: false, checkOrigin: false }, "#socialjuice-carousel-digital-domination-4922");
        };

        // Append the script to the document
        document.body.appendChild(script);

        return () => {
            // Cleanup: remove the script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="tp-testimonial-area tp-testimonial-3-mlr pb-110">
                <div className="tp-testimonial-3-bg pt-110 fix"
                    style={{ backgroundImage: `url(${bg_img})` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-testimonial-3-section-box d-flex justify-content-between align-items-end mb-60">
                                    <h3 className="tp-section-title-3 text-white">{title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-testimonial-3-slider-wrapper">
                        <div className="container-fluid g-0">
                            <div className="row g-0">
                                <div className="col-12">
                                    <div className="iframe-wrapper" style={{ height: '400px', width: '100%' }}>
                                        <iframe
                                            id="socialjuice-carousel-digital-domination-4922"
                                            src="https://embed.socialjuice.io/carousel/6988?s=digital-domination&id=4922&custom=true"
                                            allowFullScreen
                                            allowTransparency="true"
                                            frameBorder="0"
                                            scrolling="no"
                                            width="100%"
                                            height="400px"
                                        ></iframe>
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

export default TestimonialArea;
