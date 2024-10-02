import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import TestimonialArea from "@/common/testimonial-area";
import FooterThree from "@/layout/footers/footer-3";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import Brand from "../about/brand";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import PlanArea from "./plan-area";
import PriceArea from "./price-area";

const Price = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
          <Breadcrumb title_top={"Pricing"} title_bottom={"Plans"} />
            <PriceArea />
            {/* <PlanArea /> */}
            <Brand />
            <TestimonialArea />
            <FaqArea style_service={true}/>
            <CtaArea />
          </main>
          <FooterThree/>
        </div>
      </div>
    </>
  );
};

export default Price;
