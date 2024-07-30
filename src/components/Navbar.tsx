import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30  ${
        scrolled
          ? "bg-white shadow-lg dark:bg-transparent"
          : "bg-transparent dark:bg-transparent"
      } ${pathname === "/" ? "bg-[#fef9f5]" : ""}`}
    >
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-semibold text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
        >
          DoveyXChong
        </Link>
        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className={`text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 ${
                      pathname === "/"
                        ? "border-b-2 border-red-500 mb-2 pb-1"
                        : "hover:border-b-2 hover:border-red-500 mb-2 pb-1"
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/games"
                    className={`text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 ${
                      pathname.includes("/game")
                        ? "border-b-2 border-red-500 mb-2 pb-1"
                        : "hover:border-b-2 hover:border-red-500 mb-2 pb-1"
                    }`}
                  >
                    Games
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/photos"
                    className={`text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 ${
                      pathname === "/photos"
                        ? "border-b-2 border-red-500 mb-2 pb-1"
                        : "hover:border-b-2 hover:border-red-500 mb-2 pb-1"
                    }`}
                  >
                    Photos
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
