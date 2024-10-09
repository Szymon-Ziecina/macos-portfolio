"use client";

import useWallpaperStore from "@/stores/wallpaper.store";
import Image from "next/image";

const Background = () => {
  const { wallpaper } = useWallpaperStore();

  return (
    <Image
      src={`/wallpapers/${wallpaper}`}
      alt="Background"
      fill
      quality={100}
      style={{ objectFit: "cover" }}
      className="absolute top-0 left-0 z-0"
    />
  );
};

export default Background;
