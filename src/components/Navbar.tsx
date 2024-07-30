import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // Assuming you're using Lucide icons

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Check initial screen size
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 ${
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
          {isMobile ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/" className="w-full">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/games" className="w-full">
                    Games
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/photos" className="w-full">
                    Photos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <ModeToggle />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
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
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
