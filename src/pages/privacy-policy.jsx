import React from "react";
import SEO from "../common/seo";
import Privacypolicy from "../components/privacypolicy";
import Wrapper from "../layout/wrapper";

const privacypolicy = () => {
  return (
    <Wrapper>
      <SEO 
        pageTitle={"Privacy Policy - Digital Domination"} 
        pageDescription={"Your privacy is one of the most important priorities for us at DigitalDomination.io. This privacy policy is a guide book on what rights can be exercised."}
      />
      <Privacypolicy />
    </Wrapper>
  );
};

export default privacypolicy;
