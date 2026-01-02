import Logo from "@/assets/images/logo.svg";
import Clouds from "@/assets/images/clouds.png";
import { MobileNav } from "@/components/mobileNav";
import { NAV_LINKS } from "@/constants/navitems";
import { NavLink } from "@/components/navLink";
import { PrimaryBtn } from "@/components/buttons/primary";
import HeroSection from "@/sections/home/hero";
import Bird1 from "@/assets/images/bird_1.svg";
import Bird2 from "@/assets/images/bird_2.svg";
import Bird3 from "@/assets/images/bird_3.svg";
import Bird4 from "@/assets/images/bird_4.svg";
import ArrowDown from "@/assets/images/arrow_down.svg";

function HomePage() {
  return (
    <main className="min-h-screen max-w-480 w-full h-full bg-bg flex flex-col items-center p-12 relative overflow-hidden mx-auto my-auto">
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
          <MobileNav />
        </div>
      </nav>
      <HeroSection />
      <div className="absolute bottom-6 flex flex-col text-[#1D2026] items-center z-30 arrow w-fit h-fit cursor-pointer">
        <p>Scroll to learn more</p>
        <div>
        <img
          src={ArrowDown}
          className="w-8 h-8"
          alt="down arrow"
          />
          </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full max-h-145 pointer-events-none">
        <img
          src={Clouds}
          alt="clouds"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute inset-0 overflow-hidden bird-group max-sm:hidden">
        <div className="relative w-full max-sm:-left-1/2 -top-24">
          <img
            src={Bird1}
            alt="first bird"
            className="bird absolute left-92.5 top-231.5"
          />
          <img
            src={Bird2}
            alt="second bird"
            className="bird absolute left-167.5 top-220"
          />
          <img
            src={Bird3}
            alt="third bird"
            className="bird absolute left-316 top-239"
          />
          <img
            src={Bird4}
            alt="fourth bird"
            className="bird absolute left-394.5 top-220.5"
          />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
