import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS } from "@/constants/navitems";
import { NavLink } from "../navLink";
import { PrimaryBtn } from "../buttons/primary";

export function MobileNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md text-gray-500">
            Menu
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white shadow-sm">
            <div className="flex flex-col w-fit h-full items-center gap-2">
              {NAV_LINKS.map((links, index) => {
                return (
                  <NavLink label={links.label} link={links.link} key={index} />
                );
              })}
              <div className="min-w-50">
                <PrimaryBtn />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
