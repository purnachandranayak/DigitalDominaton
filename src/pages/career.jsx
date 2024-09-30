import React from "react";
import SEO from "../common/seo";
import Career from "../components/career";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Careers - Digital Domination"} pageDescription={"Apply for a thriving career at Digital Domination. We are an equal opportunity employer and strive to provide the best growth opportunities."}></SEO>
      <Career />
    </Wrapper>
  );
};

export default index;
