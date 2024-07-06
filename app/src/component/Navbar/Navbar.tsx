"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Darkmode } from "../Darkmode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { ResponsiveMenu } from "../ResponsiveMenu";
import { usePathname } from "next/navigation";

export const Navlink = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Features",
    link: "/features",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

export const Navbar = () => {
  const pathName = usePathname();
  const [showmenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showmenu);
  };

  return (
    <nav className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300 ">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
            <span>Cap</span>
            <span className="text-primary">Ride</span>
          </Link>
          {/* Desktop menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              {Navlink.map(({ id, name, link }) => {
                const isActive = pathName === link;
                return (
                  <li key={id} className="py-4">
                    <Link
                      href={link}
                      className={`${
                        isActive ? "bg-primary dark:text-black" : ""
                      }text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              {/* Derkmode features implement */}
              <Darkmode />
            </ul>
          </div>

          {/* mobile menu section */}
          <div className="md:hidden flex items-center gap-4">
            <Darkmode />
            {showmenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showmenu={showmenu} />
    </nav>
  );
};
