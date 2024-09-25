import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import useTitleAnimation from '@/hooks/useTitleAnimation';
import BounceLine from '@/svg/bounce-line';
import gsap from 'gsap';
import Image from "next/legacy/image";
import React, { useRef } from 'react';
import Slider from "react-slick";

import left_shape from "../../../../public/assets/img/hero/hero-left-shape-3-1.png";
import img_1 from "../../../../public/assets/img/hero/hero-img-3-1.png";
import img_2 from "../../../../public/assets/img/hero/hero-img-3-1-3.png";
import Link from 'next/link';

// Client logos
import brand_img_1 from "../../../../public/assets/img/brand/whizco_logo.webp";
import brand_img_2 from "../../../../public/assets/img/brand/ablespace-292x300.png";
import brand_img_3 from "../../../../public/assets/img/brand/RefundsPro-Logo-300x58.webp";
import brand_img_4 from "../../../../public/assets/img/brand/myconect_logo-300x74.webp";
import brand_img_5 from "../../../../public/assets/img/brand/impactve_logo.webp";
import brand_img_6 from "../../../../public/assets/img/brand/itlist.png";
import brand_img_7 from "../../../../public/assets/img/brand/sbh-cap.png";
import brand_img_8 from "../../../../public/assets/img/brand/preloader.webp";
import brand_img_9 from "../../../../public/assets/img/brand/newtra.png";

const hero_content = { 
   title_1: <><span>Supercharge</span> Your <span>B2B</span></>,
   title_2: <>Sales Pipeline with <br /><span>Qualified Leads</span></>,
   info: <>We specialize in filling your sales pipeline with qualified prospects using <br/>cutting-edge outbound strategies.</>,
   btn_1: "Get Started",
   btn_2: "Book A Free Consultation",
}

const { title_1, title_2, info, btn_1, btn_2 } = hero_content;

const HeroArea = () => {
   let info_anim = useRef(null);

   useIsomorphicLayoutEffect(() => {
      let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
      tl.to(".hero-text-anim i.child-1", { y: "0px", duration: 1, opacity: 1, stagger: 0.3, delay: .5 });
   }, []);

   // Slick carousel settings
   const sliderSettings = {
       dots: false,
       arrows: false,
       infinite: true,
       speed: 2000,
       slidesToShow: 4,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 0,
       cssEase: 'linear',
       pauseOnHover: false,
       responsive: [
           {
               breakpoint: 1024,
               settings: {
                   slidesToShow: 3,
               },
           },
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 2,
               },
           },
           {
               breakpoint: 480,
               settings: {
                   slidesToShow: 1, // Show 1 logo on small screens
               },
           },
       ],
   };
 
   return (
       <>
           <div className="tp-hero-area tp-hero-pt pt-170 pb-70 p-relative">
               <div className="tp-hero-left-shape">
                   <Image src={left_shape} alt="them-pure" />
               </div>
 
               <div className="container">
                   <div className="row justify-content-center z-index-3">
                       <div className="col-xl-11">
                           <div className="tp-hero-title-box text-center">
                               <h2 className="tp-hero-title-3 hero-text-anim pb-5">
                                   <i><i className="child-1">{title_1}</i></i>
                                   <i><i className="child-1">{title_2}</i></i>
                               </h2>
                               <p className="tp-char-animation-2 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">{info}</p>
                           </div>
 
                           <div className="tp-hero-btn-3 text-center wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".9s">
                               <Link className="tp-btn-blue-lg tp-btn-hover alt-color-black" href="#">
                                   <span>{btn_1}</span>
                                   <b></b>
                               </Link>
                               <Link className="tp-btn-border tp-btn-hover alt-color-black" href="#">
                                   <span>{btn_2}</span>
                                   <b></b>
                               </Link>
                           </div>
 
                           {/* Client Logos Slider Section */}
                           <div className="tp-client-logos-slider-wrapper">
                               <Slider {...sliderSettings}>
                                   {[
                                       brand_img_1,
                                       brand_img_2,
                                       brand_img_3,
                                       brand_img_4,
                                       brand_img_5,
                                       brand_img_6,
                                       brand_img_7,
                                       brand_img_8,
                                       brand_img_9,
                                   ].map((item, i) => (
                                       <div key={i} className="client-logo-wrapper">
                                           <div className="client-logo-box">
                                               <Image src={item} alt={`Client Logo ${i + 1}`} className="client-logo" height={60} objectFit="contain" />
                                           </div>
                                       </div>
                                   ))}
                               </Slider>
                           </div>
 
                           <div className="tp-hero-3-wrapper p-relative">
                               <div className="tp-hero-3-border-wrap d-none d-md-block">
                                   <span className="redius-shape-1"></span>
                                   <span className="redius-shape-2"></span>
                                   <span className="redius-shape-3"></span>
                               </div>
                               <div className="tp-hero-3-main-thumb z-index-5">
                                   <Image src={img_1} alt="them-pure" />
                               </div>
                               <div className="tp-hero-3-shape-5 d-none d-lg-block wow frist-img animated">
                                   <Image src={img_2} alt="them-pure" />
                               </div>
                               <div className="tp-hero-3-shape-6 d-none d-lg-block">
                                   <span><BounceLine /></span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
 
           {/* Additional Styles for Client Logos */}
           <style jsx>{`
               .tp-client-logos-slider-wrapper {
                   width: 70%;
                   margin-left: auto !important;
                   margin-right: auto !important;
                   margin: 10px 0;
               }
               .client-logo-wrapper {
                   display: flex;
                   justify-content: center; /* Center the logo horizontally */
                   align-items: center; /* Center vertically */
                   height: 80px; /* Set a consistent height for alignment */
               }
               .client-logo-box {
                   background-color: white; /* Set the background color to white */
                   border-radius: 8px; /* Optional: add border radius for a softer look */
                   padding: 10px; /* Add padding for spacing */
                   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: add shadow for depth */
                   display: flex;
                   justify-content: center; /* Center the logo */
                   align-items: center; /* Center vertically */
                   height: 100%; /* Ensure the box takes the full height */
               }
               .client-logo {
                   max-height: 60px; /* Constrain the max height of logos */
                   width: auto; /* Maintain aspect ratio */
                   display: block; /* Ensures that images are treated as block elements */
               }
           `}</style>
       </>
   );
};

export default HeroArea; 
