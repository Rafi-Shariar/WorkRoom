import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import WorkRule from "../WorkRule";
import WhyChooseUs from "../WhyChooseUs";
import GetStarted from "../GetStarted";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <WorkRule />
      <WhyChooseUs />
      <GetStarted />
    </div>
  );
};

export default Homepage;
