import React from "react";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const items = [
  {
    key: "1",
    label: <Link href="/tourney">Create Your Own</Link>,
  },
  {
    key: "2",
    label: <Link href="/tourney">Upcoming competition</Link>,
  },

  {
    key: "2",
    label: <Link href="/tourney">Popuar competition</Link>,
  },
];
const DropdownCompetition = () => {
  const path = usePathname();
  return (
    <NavigationMenu
      className={`${
        path === "/competitions"
          ? "w-fit border-b-2 border-oren text-center font-semibold"
          : "font-light text-gray-300"
      } z-50`}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${
              path === "/competitions"
                ? "w-fit border-b-2 border-oren text-center font-semibold"
                : "font-light text-gray-300"
            } bg-transparent bg-none hover:bg-abu hover:text-white`}
          >
            <Link href="/competition">Competitions</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-red-500">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default DropdownCompetition;
