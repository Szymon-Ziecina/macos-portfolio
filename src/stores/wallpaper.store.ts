import { WallpaperTypes } from "@/types";
import { create } from "zustand";

interface WallpaperStore {
  wallpaper: WallpaperTypes;
  changeWallpaper: (wallpaper: WallpaperTypes) => void;
}

const useWallpaperStore = create<WallpaperStore>((set) => ({
  wallpaper: WallpaperTypes.SEQUOIA_LIGHT,
  changeWallpaper: (wallpaper) => set(() => ({ wallpaper: wallpaper })),
}));

export default useWallpaperStore;
