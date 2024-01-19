import React from "react";
import { phudu, tektur, ubuntu } from "./fonts";
import { IoFlashOutline } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import { MdWeb } from "react-icons/md";
const Hero = () => {
  return (
    <div className="pt-[120px]">
      <h1
        className={`${tektur.className} text-5xl my-28 text-white font-semibold capitalize`}
      >
        Software Consulting and Development <br /> for your digital success
      </h1>
      {/* Cards */}
      <div className="flex justify-end gap-4 items-center">
        <div
          className={`${ubuntu.className} cardH1 relative overflow-hidden flex justify-center items-center w-[180px] h-[240px] text-white text-7xl bg-blue-600 cursor-pointer rounded-2xl card`}
        >
          <IoFlashOutline />
        </div>
        <div
          className={`${ubuntu.className} cardH2 relative overflow-hidden flex justify-center items-center w-[180px] h-[240px] text-white text-7xl bg-blue-600 cursor-pointer rounded-2xl card`}
        >
          <RiLightbulbFlashLine />
        </div>
        <div
          className={`${ubuntu.className} cardH3 relative overflow-hidden flex justify-center items-center w-[180px] h-[240px] text-white text-7xl bg-blue-600 cursor-pointer rounded-2xl card`}
        >
          <GrShieldSecurity />
        </div>
        <div
          className={`${ubuntu.className} cardH4 relative overflow-hidden flex justify-center items-center w-[180px] h-[240px] text-white text-7xl bg-blue-600 cursor-pointer rounded-2xl card`}
        >
          <MdWeb />
        </div>
      </div>
    </div>
  );
};

export default Hero;
