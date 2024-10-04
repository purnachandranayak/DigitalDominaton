import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import FooterThree from "@/layout/footers/footer-3";
import HeroBanner from "@/common/hero-banner";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react"; 
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ServiceArea from "../homes/home-3/service-area.jsx";

const Service = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={"Our top"} title_bottom={"Services"} />
            {/* <HeroBanner title="Our Top" subtitle="Service" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" /> */}
            <ServiceArea />
            {/* <CardArea style_service={true} /> */}
            <SalesArea style_service={true} />
            <TestimonialArea />
            <FaqArea style_service={true} />
            <CtaArea />
          </main>
          <FooterThree/>
        </div>
      </div>
    </>
  );
};

export default Service;
