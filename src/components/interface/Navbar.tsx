"use client";

import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { FaApple, FaBluetoothB, FaRegKeyboard, FaWifi } from "react-icons/fa6";
import Clock from "../widgets/Clock";
import { IoSearch } from "react-icons/io5";
import { AppProps, NavbarProps } from "@/types";
import { navItems } from "@/constants";
import { useParams } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { locale, app } = useParams() as { locale: "en" | "pl"; app: AppProps };

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
      {pathname === "/" ? (
        content
      ) : (
        <HomeNav app={app} locale={locale}>
          {content}
        </HomeNav>
      )}
    </nav>
  );
};

const HomeNav = ({
  children,
  app,
  locale,
}: {
  children: React.ReactNode;
  app: AppProps;
  locale: "en" | "pl";
}) => {
  return (
    <>
      <div className="flex gap-5 items-center text-base">
        <FaApple size={24} />
        <p>
          <span className="font-bold">
            {app === "settings" && locale === "pl"
              ? "Ustawienia"
              : app?.capitalize() || "Finder"}
          </span>
        </p>
        {navItems.map((item) => (
          <p key={item.en}>{item[locale]}</p>
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
};

export default Navbar;
