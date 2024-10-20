import { DesktopApps } from "@/constants";
import React from "react";
import AppIcon from "./AppIcon";

const Desktop = () => {
  return (
    <div className="relative h-full w-full">
      {DesktopApps.map((app, index) => (
        <AppIcon
          key={app.href}
          src={app.src}
          name={app.name}
          href={app.href}
          type="desktop"
          index={index}
        />
      ))}
    </div>
  );
};

export default Desktop;
