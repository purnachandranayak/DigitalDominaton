import React from "react";
import SEO from "../common/seo";
import Service from "../components/service";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Services - Digital Domination"} pageDescription={"Consistently adding 50-150 qualified meetings monthly to your sales pipeline, using outbound strategies such as LinkedIn and email outreach."}></SEO>
      <Service />
    </Wrapper>
  );
};

export default index;
