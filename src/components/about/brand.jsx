import Image from "next/legacy/image";
import React from 'react';
import Slider from "react-slick"; // Import react-slick for the carousel

// brand img import here 
import brand_img_1 from "../../../public/assets/img/brand/whizco_logo.webp";
import brand_img_2 from "../../../public/assets/img/brand/ablespace-292x300.png";
import brand_img_3 from "../../../public/assets/img/brand/RefundsPro-Logo-300x58.webp";
import brand_img_4 from "../../../public/assets/img/brand/myconect_logo-300x74.webp";
import brand_img_5 from "../../../public/assets/img/brand/impactve_logo.webp";
import brand_img_6 from "../../../public/assets/img/brand/itlist.png";
import brand_img_7 from "../../../public/assets/img/brand/sbh-cap.png";
import brand_img_8 from "../../../public/assets/img/brand/preloader.webp";
import brand_img_9 from "../../../public/assets/img/brand/newtra.png";

const brand_content = {
  title: "They trust us:",
  brand_img: [
    { img: brand_img_1 },
    { img: brand_img_2 },
    { img: brand_img_3 },
    { img: brand_img_4 },
    { img: brand_img_5 },
    { img: brand_img_6 },
    { img: brand_img_7 },
    { img: brand_img_8 },
    { img: brand_img_9 },
  ],
};

const { title, brand_img } = brand_content;

const Brand = () => {
  // Settings for the carousel
  const settings = {
    dots: false,               // Hide the dots (pagination)
    arrows: false,             // Hide the navigation arrows
    infinite: true,            // Infinite scroll enabled
    speed: 2000,               // Duration for one slide transition
    slidesToShow: 5,           // Number of slides visible
    slidesToScroll: 1,         // Number of slides to scroll at once
    autoplay: true,            // Enable auto-play
    autoplaySpeed: 0,          // The speed of autoplay, 0 for continuous scrolling
    cssEase: 'linear',         // Makes the scrolling smooth and continuous
    pauseOnHover: false,       // Do not pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="ab-brand-area">
        <div className="container">
          <div className="ab-brand-border-bottom pb-90">
            <div className="row">
              {/* Optional title */}
              {/* <div className="col-12">
                <div className="ab-brand-section-box text-center mb-50">
                  <h4 className="ab-brand-title">{title}</h4>
                </div>
              </div> */}
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                {/* Slick Carousel Component */}
                <Slider {...settings}>
                  {brand_img.map((item, i) => (
                    <div key={i} className="ab-brand-item mb-25">
                      <Image 
                        src={item.img} 
                        alt={`brand-${i}`} 
                        layout="intrinsic" 
                        objectFit="contain" 
                        width={150} // Consistent width for the logos
                        height={100} // Consistent height for the logos
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .ab-brand-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto; /* Set a consistent height for the brand logo container */
        }
        .slick-track {
          display: flex;
          align-items: center;
        }
        .slick-slide {
          transition: transform 0.3s ease-in-out;
        }
        .ab-brand-section-box h4 {
          font-size: 24px;
          font-weight: 700;
          // margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

export default Brand;
