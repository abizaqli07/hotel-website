import React from "react";
import AboutBox from "./components/AboutBox";
import AboutHeader from "./components/AboutHeader";
import AboutMain from "./components/AboutMain";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer"

function About() {
  return (
    <div className="About bg-dark">
      <AboutHeader/>
      <AboutBox/>
      <AboutMain/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default About;