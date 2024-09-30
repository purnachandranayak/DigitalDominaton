import React from "react";
import SEO from "../common/seo";
import HomeThree from "../components/homes/home-3";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Outbound Aficionados |  Digital Domination "} pageDescription={"Consistently adding 50-150 qualified meetings monthly to your sales pipeline, using outbound strategies such as LinkedIn and email outreach."}></SEO>
      <HomeThree />
    </Wrapper>
  );
};

export default index;
