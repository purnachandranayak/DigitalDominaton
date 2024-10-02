// import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import FooterThree from "@/layout/footers/footer-3";
import HeaderSix from "@/layout/headers/header-3";
import React from "react"; 
import Contentarea from "./contentarea";

const Setup = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Contentarea /> 
          </main>
          <FooterThree/>
        </div>
      </div>
    </>
  );
};

export default Setup;
