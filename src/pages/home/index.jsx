import Logo from "@/assets/logo.svg";
import Clouds from "@/assets/clouds.png";
import { MobileNav } from "@/components/mobileNav";
import { NAV_LINKS } from "@/constants/navitems";
import { NavLink } from "@/components/navLink";
import { PrimaryBtn } from "@/components/buttons/primary";
import HeroSection from "@/sections/home/hero";

function HomePage() {
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
          <MobileNav />
        </div>
      </nav>
      <HeroSection />
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

export default HomePage;
