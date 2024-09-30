import testimonial_data from '@/data/testimonial-data';
import Image from "next/legacy/image";
import React, { useState, useEffect } from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonial_content = {
   bg_img: "/assets/img/testimonial/testi-bg-5-1.jpg",
   sub_title: "CLIENTS & PROJECTS",
   title: <>About Customer <span>Stories</span></>,
}
const { bg_img, sub_title, title } = testimonial_content

// setting 
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
         <div className="tp-testimonial-area pt-130 pb-60 fix background-000229"
         >
            <div className="container">
               <div className="row align-items-end tp-testimonial-five-section-space">
                  <div className="col-md-8">
                     <div className="tp-testimonial-five-section-box">
                        <span className="tp-section-subtitle-5">{sub_title}</span>
                        <h3 className="tp-section-title-5">{title}</h3>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
                        <div className="test-next">
                           <button><i className="far fa-arrow-left"></i></button>
                        </div>
                        <div className="test-prev">
                           <button><i className="far fa-arrow-right"></i></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-12">
                     <div className="tp-testimonial-five-slider-section">
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
      </>
   );
};

export default TestimonialArea;