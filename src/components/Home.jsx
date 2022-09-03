import React from "react";
import Hero from "./HomePages/Hero";
import About from "./HomePages/About";
import MySocial from "./HomePages/MySocial";
import Footer from "./HomePages/Footer";
import NavBar from "./HomePages/NavBar";

const Home = () => {
  return (
    <div className="text-baseColor h-screen flex flex-col justify-between md:gap-10 md:justify-center py-16 md:py-0">
      <div className="hidden md:block"></div>
      <div className="flex flex-col">
        <NavBar />
        <About />
        <Hero />
      </div>
      <MySocial />
    </div>
  );
};

export default Home;
