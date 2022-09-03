import React from "react";

const NavBar = () => {
  return (
    <div className="text-primaryYellow font-semibold text-xl text-center md:text-left tracking-widest pb-2 relative z-50">
      <div>
        <span className="text-gray-400 text-base font-normal">By</span>{" "}
        <a
          className="cursor-pointer"
          target="_blank"
          href="https://www.youtube.com/channel/UCMh1Fk_40eTljXX-SSrrccA"
        >
          <span className="uppercase">Raushan Sharma</span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
