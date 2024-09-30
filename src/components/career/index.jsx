import BreadcrumbThree from "@/common/breadcrumbs/breadcrumb-3";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import PlatformArea from "../../common/platform-area";
import JobArea from "../about/job-area";
import CtaArea from "../contact/cta-area";
import CarrerBanner from "./carrer-banner";
import FooterThree from "@/layout/footers/footer-3";

const Career = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main> 
            <BreadcrumbThree />
            <CarrerBanner />
            <JobArea style_carrer={true} />
          </main>
          <FooterThree style_contact={true} style_team={true}/>
        </div>
      </div>
    </>
  );
};

export default Career;
