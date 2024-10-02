import React from "react";
import SEO from "../common/seo";
import About from "../components/about";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"About Us - Digital Domination"}
      pageDescription={"Digital Domination was founded in 2019 by a group of marketers who believed in the power of outreach to scale a B2B business."}></SEO>
      <About />
    </Wrapper>
  );
};

export default index;
