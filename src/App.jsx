import Logo from "@/assets/logo.svg";
import Clouds from "@/assets/clouds.png";
import Birds from "@/assets/birds.png";
import AppleIcon from "@/assets/apple_logo.svg";
import { NavigationMenuDemo } from "./components/mobileNav";
import { NAV_LINKS } from "./constants/navitems";
import { NavLink } from "./components/navLink";
import { Ellipsis } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen min-w-screen bg-blue-100 flex flex-col items-center p-12 relative">
      <nav className="w-mdXl max-w-full min-w-80 min-h-20 bg-white rounded-nav flex pl-6 pr-5 pt-5 pb-5 justify-between max-mdm:flex-row-reverse">
        <img src={Logo} alt="coup logo" />
        <div className="flex gap-4 items-center flex-wrap max-mdm:hidden">
          {NAV_LINKS.map((links, index) => {
            return (
              <NavLink label={links.label} link={links.link} key={index} />
            );
          })}
        </div>
        <div className="max-mdm:hidden">
          <PrimaryBtn />
        </div>
        <div className="hidden max-mdm:flex w-full">
          <NavigationMenuDemo />
        </div>
      </nav>
      <section
        id="hero"
        className="w-full max-w-184 flex flex-col gap-6 items-center justify-center text-center tracking-[-2%] p-2 wrap-break-word relative my-12"
      >
        <div className="w-mdXl max-h-47 h-full max-[1200px]:w-screen overflow-hidden px-12 max-sm:hidden origin-center absolute top-1/3 transform">
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
        <p className="leading-[130%] font-normal text-md max-w-146.5">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>
        <div
          id="btn-group"
          className="w-207 flex max-md:w-full flex-wrap justify-center items-center gap-4"
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
      <div className="absolute bottom-0 left-0 w-full max-h-145 pointer-events-none">
        <img
          src={Clouds}
          alt="clouds"
          className="w-full h-full object-contain"
        />
      </div>
    </main>
  );
}

export const PrimaryBtn = ({ label = "Contact Sales" }) => {
  return (
    <button
      type="button"
      className="bg-btn hover:bg-btn-hover disabled:bg-btn-disabled flex items-center justify-center px-4.5 py-2.75 rounded-[44px] text-white font-medium text-md w-full"
    >
      {label}
    </button>
  );
};

export const OutlinedBtn = ({ children }) => {
  return (
    <button
      type="button"
      className="disabled:bg-btn-disabled border border-[#6C788F] text-[#1D2026] flex items-center justify-center px-4.5 py-2.75 rounded-[44px] font-medium text-md w-full"
    >
      {children}
    </button>
  );
};

export default App;
