"use client";

import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import React from "react";
import { FaApple, FaBluetoothB, FaRegKeyboard, FaWifi } from "react-icons/fa6";
import Clock from "../widgets/Clock";
import { IoSearch } from "react-icons/io5";
import { NavbarProps } from "@/types";
import { navItems } from "@/constants";

const Navbar = ({ locale, app }: NavbarProps) => {
  const pathname = usePathname();

  const content = (
    <>
      <Link
        href={pathname}
        locale={locale === "pl" ? "en" : "pl"}
        className="flex items-center gap-2"
      >
        {locale === "pl" ? "PL" : "U.S."}
        <FaRegKeyboard />
      </Link>
      <FaWifi />
    </>
  );

  return (
    <nav
      className={cn(
        pathname === "/"
          ? "justify-end text-white"
          : "bg-white/50 text-black justify-between",
        "w-full flex items-center gap-5 text-base px-4 py-1"
      )}
    >
      {pathname === "/" ? content : <HomeNav app={app}>{content}</HomeNav>}
    </nav>
  );
};

const HomeNav = ({
  children,
  app,
}: {
  children: React.ReactNode;
  app: string;
}) => (
  <>
    <div className="flex gap-5 items-center text-base">
      <FaApple size={24} />
      <p>
        <span className="font-bold">{app ? app : "Finder"}</span>
      </p>
      {navItems.map((item) => (
        <p>{item}</p>
      ))}
    </div>
    <div className="flex gap-5 items-center">
      <FaBluetoothB />
      <IoSearch />
      {children}
      <Clock variant="small" />
    </div>
  </>
);

export default Navbar;
