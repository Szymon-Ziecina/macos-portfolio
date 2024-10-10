"use client";

import { dockApps } from "@/constants";
import { Link } from "@/i18n/routing";
import { AppIconProps, AppProps } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Dock = () => {
  return (
    <nav className="flex items-center bg-white/50 gap-1 p-1 mb-2 rounded-3xl">
      {dockApps.map((app) => (
        <AppIcon key={app.name} name={app.name} src={app.src} />
      ))}
      <Devider />
      <Image
        src="/icons/RecycleBin.png"
        alt="Recycle Bin"
        width={64}
        height={64}
      />
    </nav>
  );
};

const Devider = () => (
  <div className="w-[3px] h-5/6 rounded-full bg-white/30" />
);

const AppIcon = ({ name, src }: AppIconProps) => {
  const { locale, app } = useParams() as { locale: "en" | "pl"; app: AppProps };
  const href = app === name ? "/home" : `/home/${name}`;
  return (
    <Link className="group relative" href={href}>
      <div className="hidden group-hover:block absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/50 px-2 py-1 rounded text-sm">
        {name === "settings" && locale === "pl"
          ? "Ustawienia"
          : name.capitalize()}
        <span className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/50" />
      </div>
      <Image src={src} alt={name} width={64} height={64} />
    </Link>
  );
};

export default Dock;
