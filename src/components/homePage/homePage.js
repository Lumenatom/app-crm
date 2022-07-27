import React from "react";
import AboutUs from "./aboutUs/aboutUs";
import Capabilities from "./capabilities/capabilities";
import WorkDescription from "./workDescription/workDescription";
import Header from "./header/header";
import Effect from "./effect/effect";
import Examples from "./examples/examples";
import Gives from "./gives/gives";
import Must from "./must/must";
import Manager from "./manager/manager";
import Benefits from "./benefits/benefits";
import Footer from "./footer/footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <WorkDescription />
      <Capabilities />
      <Effect />
      <Examples />
      <Gives />
      <Must />
      <Manager />
      <Benefits />
      <Footer />
    </div>
  )
}
export default HomePage;