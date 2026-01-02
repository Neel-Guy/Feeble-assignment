import React from "react";
import Birds from "@/assets/images/birds.png";
import AppleIcon from "@/assets/images/apple_logo.svg";
import { Ellipsis } from "lucide-react";
import { OutlinedBtn } from "@/components/buttons/outline";
import { PrimaryBtn } from "@/components/buttons/primary";

function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full max-w-184 flex flex-col gap-6 items-center justify-center text-center tracking-[-2%] p-2 wrap-break-word relative my-12"
    >
      <div className="w-mdXl max-h-47 h-full max-[1200px]:w-screen overflow-hidden px-12 max-sm:hidden origin-center absolute top-1/3 transform bird-group">
        <img
          src={Birds}
          alt="birds bg"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex min-h-7 w-fit px-2 pt-1 pb-1.25 gap-2 bg-white rounded-xl items-center justify-center drop-shadow-sm">
        <Ellipsis className="bg-foundation-blue-500 text-white rounded-xl w-8 h-4.25 font-bold" />
        <p className="text-foundation-blue text-md font-medium leading-[120%]">
          #1iMessage Automation Tool
        </p>
      </div>

      <p className="text-6-7xl max-sm:text-5xl font-bold leading-[120%]">
        <span className="text-foundation-blue-500">iMessage</span> Automation
        <br />
        for Teams and AI
        <br />
        Workflows.
      </p>
      <p className="leading-[130%] font-normal text-md max-sm:text-sm max-w-146.5">
        Coup lets you, your team, or AI workflows send iMessages directly from
        your phone number, running securely on your Mac or Mac Mini.
      </p>
      <div
        id="btn-group"
        className="w-xl flex max-mdm:w-full flex-wrap justify-center items-center gap-4"
      >
        <div className="w-40">
          <PrimaryBtn label="Get Started" />
        </div>
        <div className="w-80">
          <OutlinedBtn>
            <div className="flex gap-2">
              <img src={AppleIcon} alt="apple icon" />
              <div className="border-r border-[#6C788F]" />
              Download the Mac App
            </div>
          </OutlinedBtn>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
