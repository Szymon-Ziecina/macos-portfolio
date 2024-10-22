"use client";

import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { FaApple, FaBluetoothB, FaRegKeyboard, FaWifi } from "react-icons/fa6";
import Clock from "./Clock";
import { IoSearch } from "react-icons/io5";
import { App, AppProps } from "@/types";
import { appsList, navItems } from "@/constants";
import { useParams, useRouter } from "next/navigation";
import useShortcut from "@/lib/hooks/useShortcut";

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
        <FaApple size={24} className="-mr-2" />
        <p>
          <span className="font-bold">
            {app === "settings" && locale === "pl"
              ? "Ustawienia"
              : app?.capitalize() || "Finder"}
          </span>
        </p>
        {navItems.map((item) => (
          <p key={item[locale]}>{item[locale]}</p>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <FaBluetoothB />
        <Spotlight locale={locale} />
        {children}
        <Clock variant="small" />
      </div>
    </>
  );
};

const Spotlight = ({ locale }: { locale: "en" | "pl" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const wasOpenedRef = useRef(false);
  const [matchingApps, setMatchingApps] = useState<App[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleShortcut = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      spotlightRef.current &&
      !spotlightRef.current.contains(event.target as Node)
    ) {
      if (!wasOpenedRef.current) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      wasOpenedRef.current = true;
      window.addEventListener("click", handleClickOutside);
      const timeout = setTimeout(() => {
        wasOpenedRef.current = false;
      }, 100);

      return () => {
        clearTimeout(timeout);
        window.removeEventListener("click", handleClickOutside);
      };
    } else {
      window.removeEventListener("click", handleClickOutside);
    }
    setMatchingApps([]);
  }, [isOpen]);

  useShortcut(" ", handleShortcut);

  const handleSearch = () => {
    if (inputRef.current) {
      const searchTerm = inputRef.current.value.toLowerCase();
      const filteredApps = appsList.filter((app) =>
        app.name[locale].toLowerCase().includes(searchTerm)
      );
      if (inputRef.current.value === "") setMatchingApps([]);
      else {
        setMatchingApps(
          filteredApps.map((app) => ({
            ...app,
            page: React.memo(app.page),
          }))
        );
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value) {
      router.push(`/home/${inputRef.current.value}`);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className="cursor-pointer z-50"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <IoSearch />
      </div>

      {isOpen && (
        <div
          ref={spotlightRef}
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-1/3 bg-white/80 text-2xl text-black border border-gray-300 z-50 p-4 overflow-hidden",
            matchingApps.length > 0 ? "rounded-3xl" : "rounded-full"
          )}
        >
          <form onSubmit={handleSubmit} className="flex items-center gap-4">
            <IoSearch size={32} className="text-gray-500" />
            <input
              autoFocus
              ref={inputRef}
              onChange={handleSearch}
              className="bg-transparent focus:outline-none w-full"
              type="text"
              placeholder={locale === "en" ? "Search..." : "Szukaj..."}
            />
          </form>
          {matchingApps.length > 0 && (
            <div className="w-full h-px my-2 bg-gray-300" />
          )}
          <div className="flex flex-col gap-1">
            {matchingApps.map((app) => {
              const href =
                app.name["en"] === "store" && inputRef.current?.value
                  ? `/home/${inputRef.current?.value}`
                  : `home/${app.href}`;

              if (app.name["en"] === "store") return;

              return (
                <Link
                  className="flex items-center gap-2 p-1 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-150"
                  key={app.href}
                  href={href || "#"}
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    draggable={false}
                    src={app.src}
                    alt={app.name[locale]}
                    width={32}
                    height={32}
                  />
                  {app.name[locale].capitalize()}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
