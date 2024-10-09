"use client";

import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { NavbarProps } from "@/types";
import React from "react";
import { FaRegKeyboard, FaWifi } from "react-icons/fa6";

const Navbar = ({ variant, locale }: NavbarProps) => {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        variant === "lockScreen" ? " justify-end" : "",
        "w-full flex items-center gap-5 text-white text-base px-4 py-1"
      )}
    >
      {variant === "homeScreen" && <HomeNav />}
      <Link
        href={pathname}
        locale={locale === "pl" ? "en" : "pl"}
        className="flex items-center gap-2"
      >
        {locale === "pl" ? "PL" : "U.S."}
        <FaRegKeyboard />
      </Link>
      <FaWifi />
    </nav>
  );
};

const HomeNav = () => (
  <>
    <p>Home</p>
  </>
);

export default Navbar;
