import React from "react";
import SEO from "../common/seo";
import Refundpolicy from "../components/refundpolicy";
import Wrapper from "../layout/wrapper";

const refundpolicy = () => {
  return (
    <Wrapper>
      <SEO 
        pageTitle={"Refund Policy - Digital Domination"} 
        pageDescription={"Digital Domination Services offers a 7-day, no-questions-asked refund policy on consulting fees. Learn more about our refund guidelines and conditions for marketing services including email marketing, appointment setting, and more."}
      />
      <Refundpolicy />
    </Wrapper>
  );
};

export default refundpolicy;
