import React from "react";
import SEO from "../common/seo";
import Setup from "../components/setup";
import Wrapper from "../layout/wrapper";

const setup = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Account Setup Services - Digital Domination"}
      pageDescription={"We help businesses build cold email infrastructure without spending hours of manual work hours."}></SEO>
      <Setup />
    </Wrapper>
  );
};

export default setup;
