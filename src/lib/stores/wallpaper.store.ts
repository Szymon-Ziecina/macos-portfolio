import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WallpaperStore {
  wallpaper: string;
  wallpaperName: string;
  wallpaperMode: string;
  changeWallpaper: (wallpaper: string) => void;
  changeWallpaperName: (wallpaperName: string) => void;
  changeWallpaperMode: (mode: string) => void;
}

const useWallpaperStore = create<WallpaperStore>()(
  persist(
    (set) => ({
      wallpaper: "/wallpapers/Sequoia_",
      wallpaperName: "Sequoia",
      wallpaperMode: "light",
      changeWallpaper: (wallpaper) => {
        set(() => ({ wallpaper: wallpaper }));
      },
      changeWallpaperName: (wallpaperName) =>
        set(() => ({ wallpaperName: wallpaperName })),
      changeWallpaperMode: (mode) => set(() => ({ wallpaperMode: mode })),
    }),
    {
      name: "wallpaper-storage", // Unique name for localStorage key
    }
  )
);

export default useWallpaperStore;
