"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import gsap, { Back, Circ, Expo, Power4 } from "gsap";

const Navbar = () => {
  const navCom: any = useRef();
  useLayoutEffect(() => {
    const navCtx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".navbar",{y:-160,rotateX:-70,duration:.8,opacity:.3})
      .from(".navEle",{x:1500,stagger:.3,ease:Power4.easeInOut},"-=.5")
    }, navCom);
    return () => navCtx.revert();
  }, []);
  const path = usePathname();
  return (
    <div ref={navCom} className="w-full flex justify-center">
      <div className="fixed top-2 lg:top-10 h-11 md:h-[74px] xl:w-3/4 w-[96vw] mx-auto rounded bg-white z-50 flex justify-between p-1 lg:p-2 navbar">
        <Image
          alt="logo"
          src="/images/logo.png"
          width={300}
          height={300}
          className="w-20 md:w-40 navEle"
        />
        <div className="flex items-center md:gap-5 gap-3 text-sm md:text-base lg:text-lg mr-2 lg:mr-0">
          <div className="navEle">
            <Link
              className={`${
                path == "/" ? "text-[#1f2fd8]" : "hover:scale-110 duration-200"
              } hidden lg:block`}
              href="/"
            >
              Home
            </Link>
          </div>
          <div className="navEle">
            <Link
              className={`${
                path == "/about"
                  ? "text-[#1f2fd8]"
                  : "hover:scale-110 duration-200"
              }`}
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="navEle">
            <Link
              className={`${
                path == "/services"
                  ? "text-[#1f2fd8]"
                  : "hover:scale-110 duration-200"
              }`}
              href="/services"
            >
              Services
            </Link>
          </div>
          <div className="navEle">
            <Link
              className={`${
                path == "/caseStudy"
                  ? "text-[#1f2fd8]"
                  : "hover:scale-110 duration-200"
              }`}
              href="/caseStudy"
            >
              Case-Study
            </Link>
          </div>
          <div className="navEle">
            <Link className="hidden md:block" href="/contact">
              <Button button="Free Consultation" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
