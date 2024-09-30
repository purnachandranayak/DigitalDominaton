import React from "react";
import SEO from "../common/seo";
import TermsConditions from "../components/termsandconditions";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO 
        pageTitle={"Terms and Conditions  - Digital Domination"} 
        pageDescription={"Terms and Conditions of DigitalDomination.io. Find more info on the page about our terms and conditions."}
      />
      <TermsConditions />
    </Wrapper>
  );
};

export default index;
