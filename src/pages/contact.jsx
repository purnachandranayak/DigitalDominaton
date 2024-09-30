import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact Us - Digital Domination"} pageDescription={"Contact us using the form below for questions, feedbacks and enquiries you might have. Allow us 24 hours time Mon - Fri to get back to you."}></SEO>
      <Contact />
    </Wrapper>
  );
};

export default index;
