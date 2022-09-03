import React from "react";
import { BsTwitter, BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";

const MySocial = () => {
  return (
    <div className="relative z-50">
      <div className="text-gray-400 uppercase pb-2 text-center md:text-left">
        Follow Me:
      </div>
      <div className="flex justify-center md:justify-start gap-5 text-xl text-spheronCyan">
        {" "}
        <a
          className="cursor-pointer hover:text-white"
          target="_blank"
          href="https://twitter.com/_raushansharma"
        >
          <BsTwitter />
        </a>
        <a
          className="cursor-pointer hover:text-white"
          target="_blank"
          href="https://www.youtube.com/channel/UCMh1Fk_40eTljXX-SSrrccA"
        >
          <BsYoutube />
        </a>
        <a
          className="cursor-pointer hover:text-white"
          target="_blank"
          href="https://www.linkedin.com/in/raushansharma/"
        >
          <BsLinkedin />
        </a>
        <a
          className="cursor-pointer hover:text-white"
          target="_blank"
          href="https://github.com/raushanweb3"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default MySocial;
