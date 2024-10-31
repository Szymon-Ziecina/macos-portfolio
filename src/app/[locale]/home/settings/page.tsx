"use client";

import React from "react";
import Window from "@/components/interface/Window";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import useWallpaperStore from "@/lib/stores/wallpaper.store";
import { wallpapersList } from "@/constants";

const page = ({ params: { locale } }: { params: { locale: "en" | "pl" } }) => {
  const windowProps = {
    locale: locale,
    name: { en: "Settings", pl: "Ustawienia" },
    customAspect: true,
  };
  return (
    <Window sidebar={<Sidebar />} {...windowProps}>
      <Wallpapers />
    </Window>
  );
};

const Sidebar = () => {
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
    <div>
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
      <div className="w-full flex justify-center">
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
    </div>
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
