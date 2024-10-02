import AboutArea from "@/common/about-area";
import TestemonialArea from "@/common/testimonial-area";
import FooterFive from "@/layout/footers/footer-3";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
 
const About = () => {
  return (
    <>
      <HeaderSix />
      <Breadcrumb title_top="About"  title_bottom="Digital Domination" />
      <HeroBanner title="About" subtitle="Digital Domination" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
      <Brand />
      <CompanyArea />
      <TestemonialArea />
      <AboutArea />
      
      {/* <TeamArea bg_style={true} /> */}
      {/* <JourneyArea /> */}
      {/* <JobArea /> */}
      <CtaArea />
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default About;
