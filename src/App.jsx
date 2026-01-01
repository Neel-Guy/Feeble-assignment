import Logo from "@/assets/logo.svg";
import { NavigationMenuDemo } from "./components/mobileNav";
import { NAV_LINKS } from "./constants/navitems";
import { NavLink } from "./components/navLink";

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
          <ContactSalesButton />
        </div>
        <div className="hidden max-mdm:flex w-full">
          <NavigationMenuDemo />
        </div>
      </nav>
    </main>
  );
}

export const ContactSalesButton = () => {
  return (
    <button
      type="button"
      className="bg-btn hover:bg-btn-hover disabled:bg-btn-disabled flex items-center justify-center px-4.5 py-2.75 rounded-[44px] text-white font-medium text-md w-full"
    >
      Contact Sales
    </button>
  );
};

export default App;
