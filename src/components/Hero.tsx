import React from "react";
import { phudu, tektur, ubuntu } from "./fonts";
import { IoFlashOutline } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import { MdWeb } from "react-icons/md";
const Hero = () => {
  return (
    <div className="lg:pt-[120px] h-screen overflow-y-hidden p-2">
      <h1
        className={`${tektur.className} text-3xl lg:text-5xl md:text-6xl md:mt-24 md:mb-16 lg:mb-0 lg:my-28 mt-16 text-white font-semibold capitalize`}
      >
        Software Consulting and Development <br className="hidden lg:block" /> for your digital success
      </h1>
      {/* Cards */}
      <div className="xl:flex hidden justify-end gap-4 items-center">
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
      {/* Responsive Cards for Mobile and Tablet */}
      <div className="grid xl:hidden lg:grid-cols-4 grid-cols-2 gap-5 max-w-fit mx-auto mt-5 lg:mt-12">
        <div
          className={`${phudu.className} flex p-2 items-center w-[160px] md:w-[240px] h-[220px] md:h-[320px] text-white text-xl text-center bg-blue-600 cursor-pointer rounded-lg`}
        >
          Information Technology Consultancy
        </div>
        <div
          className={`${phudu.className} flex p-2 items-center w-[160px] md:w-[240px] h-[220px] md:h-[320px] text-white text-xl text-center bg-blue-600 cursor-pointer rounded-lg`}
        >
          Product Design Strategy
        </div>
        <div
          className={`${phudu.className} flex p-2 items-center w-[160px] md:w-[240px] h-[220px] md:h-[320px] text-white text-xl text-center bg-blue-600 cursor-pointer rounded-lg`}
        >
          Cyber Security & Web Development
        </div>
        <div
          className={`${phudu.className} flex p-2 items-center justify-center w-[160px] md:w-[240px] h-[220px] md:h-[320px] text-white text-xl text-center bg-blue-600 cursor-pointer rounded-lg`}
        >
          UI/UX Design Ideas
        </div>
      </div>
    </div>
  );
};

export default Hero;
