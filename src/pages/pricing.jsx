import React from "react";
import SEO from "../common/seo";
import Pricing from "../components/price";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Pricing - Digital Domination"} pageDescription={"Done with you"}></SEO>
      <Pricing />
    </Wrapper>
  );
};

export default index;