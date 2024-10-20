"use client";

import { Link, useRouter } from "@/i18n/routing";
import Image from "next/image";
import { AppIconProps, AppProps } from "@/types";
import { useParams } from "next/navigation";
import { useRef } from "react";
import useDraggable from "@/lib/hooks/useDraggable";

const AppIcon = ({
  name,
  src,
  type = "desktop",
  href,
  index,
}: AppIconProps) => {
  const { locale, app } = useParams() as { locale: "en" | "pl"; app: AppProps };
  const isOpen = app === name["en"];
  const IconProps = {
    name,
    src,
    type,
    href,
    index,

    locale,
    isOpen,
  };
  if (type === "dock") return <DockAppIcon {...IconProps} />;
  if (type === "desktop") return <DesktopAppIcon {...IconProps} />;
};

const DesktopAppIcon = ({ name, src, href, index, locale }: AppIconProps) => {
  const router = useRouter();
  const appRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

  const { position, handleMouseDown } = useDraggable(
    index! * 90,
    5,
    appRef,
    iconRef
  );

  return (
    <div
      ref={appRef}
      onDoubleClick={() => router.push(`/home/${href}`)}
      style={{ top: position.top, left: position.left, position: "absolute" }}
      className="w-20 flex flex-col items-center gap-0 cursor-pointer"
    >
      <Image
        ref={iconRef}
        draggable={false}
        onMouseDown={handleMouseDown}
        src={src || "/images/Folder.png"}
        alt={name[locale!]}
        width={64}
        height={64}
      />
      <div>{name[locale!]}</div>
    </div>
  );
};

const DockAppIcon = ({ isOpen, name, src, locale, href }: AppIconProps) => (
  <Link className="group relative" href={isOpen ? "/home" : `/home/${href}`}>
    <div className="hidden group-hover:block absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/50 px-2 py-1 rounded text-sm">
      {name[locale!].capitalize()}
      <span className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/50" />
    </div>
    <Image
      draggable={false}
      src={src || "/images/Folder.png"}
      alt={name[locale!]}
      width={64}
      height={64}
    />
  </Link>
);

export default AppIcon;
