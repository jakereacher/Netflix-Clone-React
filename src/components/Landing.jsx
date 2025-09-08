import React from "react";
import Navbar from "./Navbar";
import Hero from "./landing/Hero";
import Trending from "./landing/Trending";
import Plans from "./landing/Plans";
import Reason from "./landing/Reason";
import Questions from "./landing/Questions";
import Footer from "./Footer";
import BeforFotter from "./landing/BeforFotter";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-14 lg:px-36 ">
        <Trending />
        <Plans />
        <Reason />
        <Questions />
        <BeforFotter />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
