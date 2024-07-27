"use client";

import React from "react";
import Link from "next/link";
import { User } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import SearchBar from "./searchBar";

const Navbar = () => {
  //const router = useRouter();

  return (
    <navbar className="sticky bottom-0 z-50 w-full flex items-center justify-center">
      <div className="flex justify-between items-center p-2 h-14 w-full bg-[#272628] border-t-2 border-[#292525]">
        <div className="flex justify-between items-center p-6 h-14 w-full">
          <Link href="/">
            <h1 className="font-bold text-2xl text-white">CrossFitMoves</h1>
          </Link>
          <div className="flex justify-center items-center gap-20">
            <MyNavigation />
            <SearchBar />
          </div>
          <a href="/log-in">
            <User className="cursor-pointer bg-[#272628] text-white" />
          </a>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;

const mouvements = [
  {
    title: "",
    href: "/mouvementsGym",
    description: "Tous les mouvements de gym",
  },
  {
    title: "",
    href: "/haltero",
    description: "Tous les mouvements d'halterophilie",
  },
];

const entrainements = [
  {
    title: "",
    href: "/dayWod",
    description: "Wod du jour",
  },
  {
    title: "",
    href: "/wodWEquipement",
    description: "Tous nos wods avec equipement",
  },
  {
    title: "",
    href: "/wodSEquipement",
    description: "Tous nos wods sans equipement",
  },
  {
    title: "",
    href: "/wodsHero",
    description: "Wods Hero",
  },
];

export function MyNavigation() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className="flex justify-center items-center gap-20">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Les mouvements</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {mouvements.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Wods</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {entrainements.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
