import React from "react";
import SEO from "../common/seo";
import Schedule from "../components/schedule";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Schedule a Call - Digital Domination"} pageDescription={"Schedule a call with us today to discuss how we can help you achieve your business goals! It takes less than 7 minutes and strictly no sales."}></SEO>
      <Schedule />
    </Wrapper>
  );
};

export default index;
