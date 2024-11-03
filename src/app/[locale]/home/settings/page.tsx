"use client";

import React from "react";
import Window from "@/components/interface/Window";
import { IoCogOutline, IoSearch } from "react-icons/io5";
import Image from "next/image";
import useWallpaperStore from "@/lib/stores/wallpaper.store";
import { wallpapersList } from "@/constants";
import { cn } from "@/lib/utils";
import {
  MdLightbulbOutline,
  MdOutlineBluetooth,
  MdOutlineWifi,
} from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import {
  BsDisplay,
  BsUniversalAccessCircle,
  BsWindowDesktop,
} from "react-icons/bs";
import {
  IoIosHourglass,
  IoIosNotifications,
  IoIosSunny,
  IoIosSwitch,
  IoMdMoon,
} from "react-icons/io";
import { PiFlower } from "react-icons/pi";
import { AiFillSound } from "react-icons/ai";

import { EventEmitter } from "events";
EventEmitter.defaultMaxListeners = 15;

const page = ({ params: { locale } }: { params: { locale: "en" | "pl" } }) => {
  const windowProps = {
    locale: locale,
    name: { en: "Settings", pl: "Ustawienia" },
    customAspect: true,
  };
  return (
    <Window sidebar={<Sidebar locale={locale} />} {...windowProps}>
      <Wallpapers />
    </Window>
  );
};

const Sidebar = ({ locale }: { locale: "en" | "pl" }) => {
  const siedebarElements = [
    [
      {
        name: { en: "Wifi", pl: "Wifi" },
        color: "bg-blue-500",
        icon: MdOutlineWifi,
      },
      {
        name: { en: "Bluetooth", pl: "Bluetooth" },
        color: "bg-blue-500",
        icon: MdOutlineBluetooth,
      },
      {
        name: { en: "Network", pl: "Sieć" },
        color: "bg-blue-500",
        icon: TfiWorld,
      },
      {
        name: { en: "Energy Saver", pl: "Oszczedżanie Energii" },
        color: "bg-yellow-500",
        icon: MdLightbulbOutline,
      },
      {
        name: { en: "VPN", pl: "VPN" },
        color: "bg-blue-500",
        icon: TfiWorld,
      },
    ],
    [
      {
        name: { en: "General", pl: "Ogołlne" },
        color: "bg-gray-400",
        icon: IoCogOutline,
      },
      {
        name: { en: "Accessibility", pl: "Dostępnosc" },
        color: "bg-blue-500",
        icon: BsUniversalAccessCircle,
      },
      {
        name: { en: "Appearance", pl: "Wygląd" },
        color: "bg-black",
        icon: IoSearch,
      },
      {
        name: { en: "Control Center", pl: "Centrum Obsługi" },
        color: "bg-gray-400",
        icon: IoIosSwitch,
      },
      {
        name: { en: "Desktop & Dock", pl: "Pulpit i Dock" },
        color: "bg-black",
        icon: BsWindowDesktop,
      },
      {
        name: { en: "Display", pl: "Wyświetlacz" },
        color: "bg-blue-500",
        icon: IoIosSunny,
      },
      {
        name: { en: "Screen Saver", pl: "Wygaszacz Ekranu" },
        color: "bg-blue-300",
        icon: BsDisplay,
      },
      {
        name: { en: "Wallpaper", pl: "Tapeta" },
        color: "bg-blue-300",
        icon: PiFlower,
      },
    ],
    [
      {
        name: { en: "Notifications", pl: "Powiadomienia" },
        color: "bg-red-400",
        icon: IoIosNotifications,
      },
      {
        name: { en: "Sound", pl: "Dźwięk" },
        color: "bg-pink-400",
        icon: AiFillSound,
      },
      {
        name: { en: "Focus", pl: "Skupienie" },
        color: "bg-purple-500",
        icon: IoMdMoon,
      },
      {
        name: { en: "Screen Time", pl: "Czas Pzed Ekranem" },
        color: "bg-purple-500",
        icon: IoIosHourglass,
      },
    ],
  ];

  return (
    <div className="flex flex-col gap-2 items-center mr-2">
      <div className="bg-black/10 flex items-center rounded-md gap-1 w-11/12 pl-2 pr-3 py-1">
        <IoSearch size={20} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full focus:outline-none"
        />
      </div>
      {siedebarElements.map((element, index) => (
        <div key={index} className="w-11/12 flex flex-col gap-0.5">
          {element.map(({ name, color, icon: Icon }) => (
            <div
              key={name[locale]}
              className={cn(
                "flex items-center gap-2 text-sm py-1 px-2 rounded-md hover:bg-blue-500/80 transition-all duration-150",
                name.en === "Wallpaper" && "bg-blue-500"
              )}
            >
              <div className={cn("p-1 rounded-lg", color)}>
                {Icon && <Icon size={18} color="white" />}
              </div>
              <p>{name[locale]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Wallpapers = () => {
  const {
    wallpaper,
    wallpaperName,
    wallpaperMode,
    changeWallpaper,
    changeWallpaperName,
    changeWallpaperMode,
  } = useWallpaperStore();
  return (
    <>
      <div className="w-[450px] flex gap-2 items-start px-4 py-2 border-b-2 border-gray-400/50">
        <div className="w-1/3 flex justify-center">
          <div className="w-full aspect-video relative border-4 border-white rounded-md">
            <Image
              draggable={false}
              src={wallpaper + wallpaperMode + ".jpg"}
              alt="Background"
              quality={100}
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <div className="w-2/3 flex flex-col gap-2">
          <div className="bg-black/5 p-2 rounded-md flex justify-between items-center">
            <p>{wallpaperName}</p>
            <select
              onChange={(e) => changeWallpaperMode(e.target.value)}
              defaultValue={wallpaperMode}
              className="bg-transparent border-none text-gray-900 text-sm px-2 py-1 focus:outline-none"
            >
              <option
                value="light"
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                Light
              </option>
              <option value="dark" className="overflow-hidden">
                Dark
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-1 bg-black/5 py-2 rounded-md ">
            <div className="w-full flex justify-between items-center px-2">
              <p>Show as screen saver</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="h-px w-full bg-gray-400/50" />
            <div className="w-full flex justify-between items-center px-2">
              <div>Show on all Spaces</div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-start">
        <div className="w-full grid grid-cols-4 gap-2 px-4 py-2">
          {wallpapersList.map((wallpaper) => (
            <WallpaperCard
              key={wallpaper.name}
              name={wallpaper.name}
              wallpaper={wallpaper.src}
              onClick={() => {
                changeWallpaper(wallpaper.src);
                changeWallpaperName(wallpaper.name);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const WallpaperCard = ({
  name,
  wallpaper,
  onClick,
}: {
  name: string;
  wallpaper: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="w-full aspect-video relative rounded-md overflow-hidden"
        onClick={onClick}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <Image
            draggable={false}
            src={wallpaper + "light.jpg"}
            alt="Light Background"
            quality={100}
            fill
            className="object-cover"
            style={{ objectPosition: "left" }}
          />
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image
            draggable={false}
            src={wallpaper + "dark.jpg"}
            alt="Dark Background"
            quality={100}
            fill
            className="object-cover"
            style={{ objectPosition: "right" }}
          />
        </div>
      </div>
      <p className="w-full text-center text-xs">{name}</p>
    </div>
  );
};

export default page;
