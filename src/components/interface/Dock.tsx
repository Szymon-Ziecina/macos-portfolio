"use client";

import { dockApps } from "@/constants";
import Image from "next/image";
import AppIcon from "./AppIcon";

const Dock = () => {
  return (
    <nav className="flex items-center bg-white/50 gap-1 p-1 mb-2 rounded-3xl z-50">
      {dockApps.map((app) => (
        <AppIcon
          key={app.src}
          name={app.name}
          src={app.src}
          href={app.href}
          type="dock"
        />
      ))}
      <Devider />
      <Image
        src="/images/RecycleBin.png"
        alt="Recycle Bin"
        width={64}
        height={64}
        draggable={false}
        className="z-50"
      />
    </nav>
  );
};

const Devider = () => (
  <div className="w-[3px] h-5/6 rounded-full bg-white/30" />
);

export default Dock;
