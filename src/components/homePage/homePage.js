import React from "react";
import AboutUs from "../aboutUs/aboutUs";
import Capabilities from "../capabilities/capabilities";
import Header from "../header/header";
import WorkDescription from "../workDescription/workDescription";

const HomePage = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <WorkDescription />
      <Capabilities />
    </div>
  )
}
export default HomePage;