import React, { useEffect } from 'react';

const cta_content = {
   bg_img: "/assets/img/cta/cta-bg.jpg",
   title: "Book a Discovery Call",
}
const { bg_img, title } = cta_content

const CtaArea = () => {

   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://firebasestorage.googleapis.com/v0/b/leadmonk-prod.appspot.com/o/leadmonk%2Fembed%2Fleadmonk_widget.js?alt=media";
      script.async = true;
      document.body.appendChild(script);
   }, []);

   return (
      <>
         <div className="tp-cta-area p-relative mb-80">
            <div className="tp-cta-grey-bg"></div>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-cta-bg" style={{ backgroundImage: `url(${bg_img})` }}>
                        <div className="tp-cta-content tp-inner-font text-center">
                           <h3 className="tp-section-title text-white">{title}</h3>

                           {/* Leadmonk iframe widgets for desktop and mobile */}
                           
                           {/* Desktop Widget */}
                           <div className="leadmonk-inline-widget desktop-widget"
                              data-url="https://meet.digitaldomination.io/digitaldomination/strategy?hideLogo=true&pagebackground=0xef444400"
                              style={{ minWidth: "340px", height: "630px" }}>
                           </div>

                           {/* Mobile Widget */}
                           <div className="leadmonk-inline-widget mobile-widget"
                              data-url="https://meet.digitaldomination.io/digitaldomination/strategy?hideLogo=true&pagebackground=0xffffff00&hideEventDetails=true"
                              style={{ minWidth: "340px", height: "630px" }}>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <style jsx>{`
            /* Hide desktop widget on mobile */
            .desktop-widget {
               display: block;
            }
            .mobile-widget {
               display: none;
            }

            @media (max-width: 767px) {
               /* Hide desktop widget and show mobile widget on small screens */
               .desktop-widget {
                  display: none;
               }
               .mobile-widget {
                  display: block;
               }
            }
         `}</style>
      </>
   );
};

export default CtaArea;
