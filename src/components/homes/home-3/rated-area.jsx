import BlurStart from '@/svg/blur-start'; 
import React, { useEffect } from 'react';
import Image from "next/legacy/image";

import author_img_1 from "../../../../public/assets/img/rate/rate-logo-1.png";
import author_img_2 from "../../../../public/assets/img/rate/rate-logo-2.png";
import author_img_3 from "../../../../public/assets/img/rate/rate-logo-3.png";

import img_1 from "../../../../public/assets/img/rate/rate-shape-1.png";
import img_2 from "../../../../public/assets/img/rate/rate-shape-2.png";
// Removed author_big_img import since we will use the scheduling widget instead
import Link from 'next/link';

const rated_content = { 
    author: [
        {
            id: 1,
            title: <>"The interface is excellent"</>,
            img: author_img_1,
        },
        {
            id: 2,
            title: <>"Improvements in every release"</>,
            img: author_img_2,
        },
        {
            id: 3,
            title: <>"Great customer service and features."</>,
            img: author_img_3,
        },
    ],
    bg_img: "/assets/img/rate/rated-bg.jpg",
    title: <>Book a <span>Discovery Call</span><br /></>,
};

const { author, bg_img, title } = rated_content;

const RatedArea = () => {
    // Use useEffect to append the Leadmonk widget script
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://firebasestorage.googleapis.com/v0/b/leadmonk-prod.appspot.com/o/leadmonk%2Fembed%2Fleadmonk_widget.js?alt=media";
        script.async = true;
        document.body.appendChild(script);
        
        // Cleanup function to remove script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="tp-rated-area fix p-relative">
               <div className="tp-rated-bg pt-120" style={{backgroundImage: `url(${bg_img})`}}>
                  <div className="tp-rated-shape-1 d-none d-lg-block">
                     <Image src={img_1} alt="theme-pure"/>
                  </div>
                  <div className="tp-rated-shape-2 d-none d-sm-block">
                     <Image src={img_2} alt="theme-pure"/>
                  </div>
                  <div className="container z-index-6">
                     <div className="row justify-content-center">
                        <div className="col-xl-10">
                           <div className="tp-rated-title-box text-center">
                              <div className="tp-rated-icon tp-title-anim">  
                                    <BlurStart />                                      
                                    <BlurStart />                                      
                                    <BlurStart />                                      
                                    <BlurStart />                                      
                                    <BlurStart />                                      
                              </div>
                              <h5 className="tp-section-title-3 text-white">
                                {title}
                              </h5>
                              {/* <Link className="tp-btn-blue-lg tp-btn-hover alt-color-white" href="#">
                                 <span className="text-color-black">Try it on Browser</span>
                                 <b></b>
                              </Link> */}
                           </div>
                        </div>
                     </div>
                     {/* <div className="author-rated-wrapper">
                        <div className="row">
                            {author.map((item, i)  => 
                                <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="author-rated text-center">
                                        <div className="author-rated-icon">
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                        </div>
                                        <p>{item.title}</p>
                                        <div className="author-rated-logo">
                                            <Image src={item.img} alt="author logo"/>
                                        </div>
                                    </div>
                                </div>
                            )} 
                        </div>
                     </div> */}
                        <div className="leadmonk-inline-widget" 
                             data-url="https://meet.digitaldomination.io/digitaldomination/strategy?hideLogo=true&pagebackground=0xef444400" 
                             style={{ minWidth: "340px", height: "630px" }}>
                        </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default RatedArea;
