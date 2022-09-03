import React from "react";

const About = () => {
  return (
    <div className="text-4xl md:text-5xl text-center md:text-left md:w-1/3 relative z-50">
      Decentralized <br className="hidden md:block" /> DApp Hosting{" "}
      <br className="hidden md:block" />
      Using{" "}
      <a target="_blank" href="https://spheron.network/">
        <span className="block md:inline font-bold text-transparent bg-clip-text bg-gradient-to-l from-spheronCyan md:from-spheronBlue via-spheronCyan md:via-spheronCyan to-spheronCyan md:to-spheronCyan">
          Spheron
        </span>
      </a>
      <div className="text-center md:text-left text-2xl font-bold opacity-50 origin-top-right w-auto md:w-max md:-rotate-12 md:text-lg uppercase tracking-widest text-spheronBlue pb-5">
        Demo
      </div>
    </div>
  );
};

export default About;
