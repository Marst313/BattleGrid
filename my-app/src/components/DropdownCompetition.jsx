import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

const DropdownCompetition = () => {
  const path = usePathname();

  console.log(path.startsWith("/tourney"));

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`bg-transparent text-base font-bold hover:bg-transparent hover:text-white focus:bg-transparent ${
              path === "/tourney"
                ? "w-fit rounded-none border-b-2 border-oren text-center font-semibold"
                : "font-light text-gray-300"
            }`}
          >
            Competition
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid  gap-3  p-6 backdrop-blur-md md:w-[400px] lg:w-[600px]  lg:grid-cols-2">
              <li className="row-span-3 ">
                <NavigationMenuLink asChild className="hover:bg-abu2">
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-abu1  p-6 no-underline outline-none  focus:shadow-md"
                    href="/tourney/geneartor"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Create Your Own
                    </div>
                    <p className="text-muted-foreground mt-5  text-sm font-light leading-snug">
                      Tailor competitions, personalize challenges, and foster
                      community engagement effortlessly.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/tourney/search"
                title="Upcoming Competition"
                className="bg-abu2 hover:bg-abu1"
              >
                Stay tuned for exciting matches, epic battles, and a chance to
                prove your skills on the virtual battlefield.
              </ListItem>
              <ListItem
                href="/tourney/search"
                title="Popular Competition"
                className="bg-abu2 h-full hover:bg-abu1"
              >
                Join the worldwide and experience of competing in the most
                popular gaming events around!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
              className,
            )}
            {...props}
          >
            <div className="text-base font-bold leading-none">{title}</div>
            <p className="text-muted-foreground mt-5  text-sm font-light leading-snug">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";

export default DropdownCompetition;
