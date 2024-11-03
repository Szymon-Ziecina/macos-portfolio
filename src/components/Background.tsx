"use client";

import useWallpaperStore from "@/lib/stores/wallpaper.store";
import Image from "next/image";

const Background = () => {
  const { wallpaper, wallpaperMode } = useWallpaperStore();
  return (
    <>
      <Image
        draggable={false}
        src={wallpaper + wallpaperMode + ".jpg"}
        alt="Background"
        fill
        sizes="(100vw, 100vh)"
        quality={100}
        style={{ objectFit: "cover" }}
        className="absolute top-0 left-0 z-0"
      />
    </>
  );
};

export default Background;
