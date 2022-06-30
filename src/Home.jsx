import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import News from "./components/News";
import Services from "./components/Services";

function Home() {
  return (
    <div className="home bg-dark">
      <Hero/>
      <Services/>
      <News/>
      <Footer/>
    </div>
  );
}

export default Home;
