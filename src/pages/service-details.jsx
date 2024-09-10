import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
