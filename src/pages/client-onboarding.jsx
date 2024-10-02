import React from "react";
import SEO from "../common/seo";
import Onboarding from "../components/onboarding";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Client Onboarding - Digital Domination"} pageDescription={""}></SEO>
      <Onboarding />
    </Wrapper>
  );
};

export default index;
